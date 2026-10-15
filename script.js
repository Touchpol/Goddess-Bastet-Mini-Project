const KEYS = Object.keys(groups);
const PAIRS = 20;
// groups.js stores cats as objects; the code below reads them as [name, trait, fur, eye, ear, pattern, patternColor, longHair, eye2]
KEYS.forEach(k => { groups[k].cats = groups[k].cats.map(c => Array.isArray(c) ? c : [c.name, c.trait, c.fur, c.eye, c.ear, c.pattern, c.patternColor, c.longHair, c.eye2]); });
const $ = id => document.getElementById(id);

// Draw a cat face as inline SVG (keeps theme tokens for the backdrop)
function catSVG(c) {
  const [, , fur, eye, ear, pat, pc, long, eye2] = c;
  const e2 = eye2 || eye;
  let ears = "";
  // original curved ears (disabled for test)
  // if (ear === "f") ears = `<path d="M54 82 Q62 62 86 70 Q70 78 64 92Z M146 82 Q138 62 114 70 Q130 78 136 92Z" fill="${fur}"/>`;
  // simple circle ears (test)
  if (ear === "f") ears = `<circle cx="66" cy="76" r="14" fill="${fur}"/><circle cx="134" cy="76" r="14" fill="${fur}"/>`;
  else if (ear === "c") ears = `<path d="M60 90 L62 44 Q82 40 94 72Z M140 90 L138 44 Q118 40 106 72Z" fill="${fur}"/><path d="M62 44 Q50 52 58 62 M138 44 Q150 52 142 62" stroke="${fur}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
  else {
    const h = ear === "b" ? 26 : ear === "s" ? 52 : 38, w = ear === "b" ? 4 : 0;
    ears = `<path d="M${56-w} 94 L${64-w} ${h} L${98} 72Z M${144+w} 94 L${136+w} ${h} L102 72Z" fill="${fur}"/>
            <path d="M${66-w/2} 84 L${69-w} ${h+16} L88 74Z M${134+w/2} 84 L${131+w} ${h+16} L112 74Z" fill="#e9a3a3" opacity=".55"/>`;
  }
  const pointEars = pat === "point" ? ears.replace(new RegExp(fur, "g"), pc) : "";
  let mane = "";
  if (long) for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2; mane += `<circle cx="${100 + Math.cos(a) * 56}" cy="${116 + Math.sin(a) * 50}" r="16" fill="${fur}"/>`; }
  let marks = "";
  // Coat markings, drawn over the head; pc = pattern colour. Each pattern replaces `marks`.
  // stripe: three forehead stripes + two cheek stripes on each side (tabby)
  if (pat === "stripe") marks = `<path d="M92 66 L95 86 M100 64 L100 88 M108 66 L105 86" stroke="${pc}" stroke-width="5" stroke-linecap="round"/><path d="M50 108 L64 112 M50 122 L64 120 M150 108 L136 112 M150 122 L136 120" stroke="${pc}" stroke-width="4" stroke-linecap="round"/>`;
  // point/mask: darker muzzle ellipse; mask is larger and fully opaque, point is smaller and slightly translucent (ears are also recoloured via pointEars)
  if (pat === "point" || pat === "mask") marks = `<ellipse cx="100" cy="126" rx="${pat === "mask" ? 40 : 30}" ry="${pat === "mask" ? 34 : 26}" fill="${pc}" opacity="${pat === "mask" ? 1 : .85}"/>`;
  // spot: seven small dots at fixed [x, y] positions scattered over the face
  if (pat === "spot") marks = [[70,90],[128,88],[60,128],[140,130],[84,74],[116,72],[100,62]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="5" fill="${pc}"/>`).join("");
  // patch: one colour patch over the left eye / top-left of the head
  if (pat === "patch") marks = `<path d="M100 60 Q60 58 48 104 Q58 86 98 86Z" fill="${pc}"/>`;
  // tux: tuxedo bib, a teardrop shape down the chin and chest
  if (pat === "tux") marks = `<path d="M100 92 Q72 110 76 150 Q100 166 124 150 Q128 110 100 92Z" fill="${pc}"/>`;
  // Layers are painted bottom to top: backdrop, ears, mane, head, markings, eyes (iris, pupil, glint), nose, mouth, whiskers.
  // The aria-label is the cat's name (c[0]). Eyes use `eye` (left) and `e2` (right) so odd-eyed cats work.
  return `<svg viewBox="0 0 200 200" role="img" aria-label="${c[0]}">
    <rect width="200" height="200" fill="var(--surface-raised)"/>
    ${pointEars || ears}${mane}
    <ellipse cx="100" cy="116" rx="56" ry="52" fill="${fur}"/>
    ${marks}
    <ellipse cx="80" cy="108" rx="10" ry="12" fill="${eye}"/><ellipse cx="120" cy="108" rx="10" ry="12" fill="${e2}"/>
    <ellipse cx="80" cy="109" rx="3" ry="9" fill="#14100c"/><ellipse cx="120" cy="109" rx="3" ry="9" fill="#14100c"/>
    <circle cx="83" cy="104" r="2.5" fill="#fff"/><circle cx="123" cy="104" r="2.5" fill="#fff"/>
    <path d="M94 128 L106 128 L100 135Z" fill="#e9a3a3"/>
    <path d="M100 135 Q95 142 89 140 M100 135 Q105 142 111 140" stroke="#14100c" stroke-opacity=".55" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M70 132 L40 128 M70 138 L42 142 M130 132 L160 128 M130 138 L158 142" stroke="#14100c" stroke-opacity=".3" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`;
}

// Photo: try images/cats/<group>-<n>.jpg first, fall back to the SVG
function photo(cat) {
  const box = document.createElement("div");
  box.className = "mh-card__photo";
  box.innerHTML = catSVG(cat);
  const img = new Image();
  img.alt = cat[0];
  img.className = "mh-card__photo";
  img.onload = () => box.replaceWith(img);
  img.src = `images/cats/${cat.group}-${cat.idx}.jpg`;
  return box;
}

function shuffle(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } return array; }

let pools, scores, pair, current, picks, locked = false;

function buildPools() {
  pools = {}; scores = {}; picks = [];
  KEYS.forEach(k => {
    pools[k] = shuffle(groups[k].cats.map((c, i) => Object.assign([...c], { group: k, idx: i + 1 })));
    scores[k] = 0;
  });
  pair = 0;
}

// Two groups with the most cats left, one cat from each → never same-group, uses all 40
function nextPair() {
  const order = shuffle([...KEYS]).sort((a, b) => pools[b].length - pools[a].length);
  const p = [pools[order[0]].pop(), pools[order[1]].pop()];
  return Math.random() < .5 ? p : [p[1], p[0]];
}

function fillCard(el, cat, key) {
  el.className = "mh-card";
  el.innerHTML = "";
  el.append(photo(cat));
  const body = document.createElement("span");
  body.className = "mh-card__body";
  body.innerHTML = `<span class="mh-card__name">${cat[0]}</span><span class="mh-card__trait">${cat[1]}</span><span class="mh-card__key">${key}</span>`;
  el.append(body);
  el.setAttribute("aria-label", `${cat[0]} — ${cat[1]}`);
}

function showPair() {
  current = nextPair();
  fillCard($("cardA"), current[0], "A ←");
  fillCard($("cardB"), current[1], "B →");
  $("pairLabel").textContent = `คู่ที่ ${pair + 1} / ${PAIRS}`;
  $("progFill").style.width = (pair / PAIRS * 100) + "%";
  $("progTrack").setAttribute("aria-valuenow", pair);
  locked = false;
}

function choose(side) {
  if (locked || $("test").hidden) return;
  locked = true;
  const cat = current[side];
  scores[cat.group]++;
  picks.push(cat);
  pair++;
  const el = side ? $("cardB") : $("cardA");
  el.classList.add("is-chosen");
  $("progFill").style.width = (pair / PAIRS * 100) + "%";
  setTimeout(() => pair >= PAIRS ? finish() : showPair(), 320);
}

function rank(s) { return [...KEYS].sort((a, b) => s[b] - s[a]); }

function finish() {
  const order = rank(scores);
  const top = scores[order[0]];
  const winners = order.filter(k => scores[k] === top);
  saveResult({ scores, winners, at: Date.now() });
  renderResult(scores, winners, picks);
  show("result");
}

// Ranked list, no chart: rank · group name · points (ties share a rank)
function scoreRows(s, winners, short) {
  let prev = null, r = 0;
  return rank(s).map((k, i) => {
    if (s[k] !== prev) { r = i + 1; prev = s[k]; }
    return `<li class="mh-score${winners.includes(k) ? " is-winner" : ""}">
      <span class="mh-score__rank">${r}</span>
      <span class="mh-score__name">${short ? groups[k].short : groups[k].name}</span>
      <span class="mh-score__value"><b>${s[k]}</b> คะแนน</span></li>`;
  }).join("");
}

function renderResult(s, winners, picked) {
  const tie = winners.length > 1;groups
  $("winTitle").innerHTML = winners.map(k => `<span style="color:var(${groups[k].color})">${groups[k].name}</span>`).join(tie ? "<br>" : "");
  $("winDesc").textContent = tie
    ? `เสมอกัน ${winners.length} กลุ่ม คุณชอบแมวหลายแบบเท่าๆ กัน ` + groups[winners[0]].desc
    : groups[winners[0]].desc;
  $("scores").innerHTML = scoreRows(s, winners, false);
  $("pickedTitle").textContent = tie ? "แมวที่คุณเลือกในกลุ่มที่ชนะ" : "แมวที่คุณเลือกในกลุ่มนี้";
  const box = $("picked"); box.innerHTML = "";
  picked.filter(c => winners.includes(c.group)).forEach(c => {
    const m = document.createElement("div"); m.className = "mini";
    m.append(photo(c));
    const t = document.createElement("div"); t.innerHTML = `${c[0]}<small>${c[1]}</small>`;
    m.append(t); box.append(m);
  });
}

function saveResult(r) { try { localStorage.setItem("meowHavenLast", JSON.stringify(r)); } catch (e) {} }
function loadResult() { try { return JSON.parse(localStorage.getItem("meowHavenLast")); } catch (e) { return null; } }

function renderLast() {
  const r = loadResult();
  const p = $("lastPanel");
  if (r && r.scores && r.winners) {
    p.innerHTML = `<h2>ผลครั้งก่อน</h2><p>คุณชอบแมว ${r.winners.map(k => `<b style="color:var(${groups[k].color})">${groups[k].name}</b>`).join(" และ ")} มากที่สุด</p>
      <ol class="scores">${scoreRows(r.scores, r.winners, true)}</ol>`;
  } else {
    p.innerHTML = `<h2>เล่นยังไง</h2><p>ใช้เวลาประมาณ 1 นาที</p>
      <ol class="rules"><li>แมวจะขึ้นมาทีละคู่ เลือกตัวที่ชอบมากกว่า</li><li>คลิกการ์ด หรือกด A / B หรือ ← →</li><li>ครบ 20 คู่ ระบบจะบอกว่าคุณชอบแมวกลุ่มไหน</li></ol>`;
  }
}

function renderBreeds() {
  $("breedGrid").innerHTML = KEYS.map(k => `<div class="breed-col"><h3><i style="background:var(${groups[k].color})"></i>${groups[k].name}</h3>
    <ul>${groups[k].cats.map(c => `<li>${c[0]}<span>${c[1]}</span></li>`).join("")}</ul></div>`).join("");
}

function show(id) {
  ["intro", "test", "result"].forEach(s => $(s).hidden = s !== id);
  document.querySelectorAll("[data-nav]").forEach(a => a.toggleAttribute("aria-current", false));
  const nav = document.querySelector(`[data-nav="${id === "result" ? "test" : id}"]`);
  if (nav) nav.setAttribute("aria-current", "page");
  window.scrollTo(0, 0);
}

function start() { buildPools(); showPair(); show("test"); }

document.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if (!go) return;
  e.preventDefault();
  const t = go.dataset.go;
  if (t === "test") start();
  else if (t === "breeds") { renderLast(); show("intro"); document.querySelector('[data-nav="breeds"]').setAttribute("aria-current", "page"); document.querySelector('[data-nav="intro"]').removeAttribute("aria-current"); $("breeds").scrollIntoView(); }
  else { renderLast(); show("intro"); }
});
$("startBtn").addEventListener("click", start);
$("againBtn").addEventListener("click", start);
$("cardA").addEventListener("click", () => choose(0));
$("cardB").addEventListener("click", () => choose(1));
document.addEventListener("keydown", e => {
  if (e.target.closest && e.target.closest("input,textarea")) return;
  const k = e.key.toLowerCase();
  if (k === "a" || k === "arrowleft") choose(0);
  if (k === "b" || k === "arrowright") choose(1);
});

renderBreeds();
renderLast();
show("intro");

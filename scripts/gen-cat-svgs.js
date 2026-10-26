#!/usr/bin/env node
// One-off generator: renders a parametric cat-face SVG for every cat in groups.js
// and writes it to images/cats/<group>-<n>.svg, replacing the old .jpg photos.
// Run with: node scripts/gen-cat-svgs.js
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const groupsSrc = fs.readFileSync(path.join(ROOT, "groups.js"), "utf8");
const groups = new Function(groupsSrc + "\nreturn groups;")();

function clamp(n) { return Math.max(0, Math.min(255, n)); }
function shade(hex, percent) {
  const n = parseInt(hex.slice(1), 16);
  const r = clamp(((n >> 16) & 0xff) + 255 * percent);
  const g = clamp(((n >> 8) & 0xff) + 255 * percent);
  const b = clamp((n & 0xff) + 255 * percent);
  return "#" + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, "0")).join("");
}
// Blend two hex colors (0 = all a, 1 = all b) — used to tint the nose/mouth from the fur color
// instead of a single fixed tone, so they read as part of the same cat.
function mix(hexA, hexB, t) {
  const a = parseInt(hexA.slice(1), 16), b = parseInt(hexB.slice(1), 16);
  const ar = (a >> 16) & 0xff, ag = (a >> 8) & 0xff, ab = a & 0xff;
  const br = (b >> 16) & 0xff, bg = (b >> 8) & 0xff, bb = b & 0xff;
  const r = Math.round(ar + (br - ar) * t), g = Math.round(ag + (bg - ag) * t), bl = Math.round(ab + (bb - ab) * t);
  return "#" + [r, g, bl].map(v => clamp(v).toString(16).padStart(2, "0")).join("");
}
// Simple deterministic hash -> [0,1), so fluffy tufts vary per cat without being random between runs
function seeded(seedStr) {
  let h = 2166136261;
  for (let i = 0; i < seedStr.length; i++) { h ^= seedStr.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (i) => {
    h = Math.imul(h ^ i, 2654435761);
    return ((h >>> 0) % 1000) / 1000;
  };
}

// Local-space ear silhouettes (outer + inner), base near y≈20, tip pointing toward negative y.
// Rounded with quadratic curves (instead of sharp straight edges) for a softer, cuter cut.
// Positioned later with translate + optional horizontal mirror for the right ear.
const EARS = {
  // normal: upright rounded point
  n: {
    outer: "M1,22 Q-7,-6 11,-36 Q16,-46 20,-46 Q24,-46 29,-36 Q47,-6 39,22 Q29,10 20,10 Q11,10 1,22 Z",
    inner: "M10,14 Q5,-3 15,-22 Q17,-27 20,-27 Q23,-27 25,-22 Q35,-3 30,14 Q25,7 20,7 Q15,7 10,14 Z"
  },
  // big: wider and taller
  b: {
    outer: "M-5,24 Q-16,-12 7,-50 Q14,-62 20,-62 Q26,-62 33,-50 Q56,-12 45,24 Q32,10 20,10 Q8,10 -5,24 Z",
    inner: "M6,15 Q-2,-9 14,-34 Q17,-40 20,-40 Q23,-40 26,-34 Q42,-9 34,15 Q27,7 20,7 Q13,7 6,15 Z"
  },
  // small: compact and rounder
  s: {
    outer: "M7,17 Q2,-1 13,-18 Q16,-23 20,-23 Q24,-23 27,-18 Q38,-1 33,17 Q27,10 20,10 Q13,10 7,17 Z",
    inner: "M12,10 Q9,-1 16,-11 Q18,-14 20,-14 Q22,-14 24,-11 Q31,-1 28,10 Q24,6 20,6 Q16,6 12,10 Z"
  },
  // fold: tip folds forward and down
  f: {
    outer: "M1,20 Q4,-6 13,-24 Q20,-38 29,-27 Q35,-18 31,-6 Q33,6 39,17 Q27,12 19,16 Q9,19 1,20 Z",
    inner: "M9,13 Q11,-3 17,-15 Q21,-23 26,-16 Q29,-10 26,-3 Q27,5 31,11 Q22,8 16,11 Q11,13 9,13 Z"
  },
  // curl: curls back and in on itself
  c: {
    outer: "M1,21 Q10,-4 16,-20 Q21,-33 32,-40 Q41,-45 36,-34 Q29,-22 33,-13 Q36,-4 28,2 Q22,6 15,13 Q8,18 1,21 Z",
    inner: "M8,14 Q14,-3 18,-13 Q21,-21 28,-27 Q32,-30 29,-23 Q25,-15 28,-9 Q30,-4 24,0 Q19,3 13,9 Q10,12 8,14 Z"
  }
};

function earGroup(side, type, fur, patternColor, pointed) {
  const def = EARS[type] || EARS.n;
  const mirror = side === "right" ? -1 : 1;
  const tx = side === "right" ? 138 : 62;
  const tipColor = pointed ? patternColor : shade(fur, -0.1);
  return `<g transform="translate(${tx},70) scale(${mirror},1)">
    <path d="${def.outer}" fill="${pointed ? tipColor : fur}" stroke="${shade(fur, -0.22)}" stroke-width="2" stroke-linejoin="round"/>
    <path d="${def.inner}" fill="${shade(fur, 0.32)}"/>
  </g>`;
}

// Soft fur silhouette for longhair breeds: tufts of varying size/opacity (seeded per cat
// so it's deterministic, not a uniform polka-dot ring) layered in two passes for depth.
function fluffyHalo(cx, cy, rx, ry, fur, seedKey) {
  const rnd = seeded(seedKey);
  const outer = [];
  const inner = [];
  const count = 22;
  for (let i = 0; i < count; i++) {
    const a = (Math.PI * 2 * i) / count;
    const wobble = 0.97 + rnd(i) * 0.1;
    const x = cx + Math.cos(a) * rx * 1.1 * wobble;
    const y = cy + Math.sin(a) * ry * 1.1 * wobble;
    const r = 8 + rnd(i + 50) * 7;
    outer.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${shade(fur, -0.04)}" opacity="0.9"/>`);
    const ix = cx + Math.cos(a) * rx * 0.98;
    const iy = cy + Math.sin(a) * ry * 0.98;
    inner.push(`<circle cx="${ix.toFixed(1)}" cy="${iy.toFixed(1)}" r="${(r * 0.8).toFixed(1)}" fill="${fur}" opacity="0.95"/>`);
  }
  return `<g>${outer.join("")}${inner.join("")}</g>`;
}

// Pattern markings are kept clear of the eye band (|dy-eyeY|<16 around cx±24) so spots/patches
// never land on top of a pupil.
function patternOverlay(pattern, color, cx, cy, rx, ry) {
  if (!pattern || pattern === "none" || !color) return "";
  switch (pattern) {
    case "stripe": {
      let s = "";
      const offsets = [-34, -14, 10, 30];
      offsets.forEach((dx, i) => {
        const x = cx + dx;
        const y = cy - ry * 0.78 + (i % 2) * 5;
        s += `<path d="M${x},${y} Q${x + 7},${y + 15} ${x + 2},${y + 28}" stroke="${color}" stroke-width="5.5" fill="none" stroke-linecap="round" opacity="0.8"/>`;
      });
      return s;
    }
    case "point":
      return `<ellipse cx="${cx}" cy="${cy + ry * 0.56}" rx="${rx * 0.48}" ry="${ry * 0.36}" fill="${color}" opacity="0.85"/>`;
    case "spot": {
      const spots = [[-36, 6], [-18, 26], [12, 28], [34, 10], [0, 34], [-4, -34]];
      return spots.map(([dx, dy]) =>
        `<ellipse cx="${cx + dx}" cy="${cy + dy}" rx="6.5" ry="5.5" fill="${color}" opacity="0.8"/>`).join("");
    }
    case "patch": {
      const patches = [[-rx * 0.62, -ry * 0.62, 24, 18, -18], [rx * 0.58, -ry * 0.1, 28, 22, 10], [-rx * 0.08, ry * 0.68, 20, 15, 6]];
      return patches.map(([dx, dy, w, h, rot]) =>
        `<ellipse cx="${cx + dx}" cy="${cy + dy}" rx="${w}" ry="${h}" fill="${color}" opacity="0.88" transform="rotate(${rot} ${cx + dx} ${cy + dy})"/>`).join("");
    }
    case "tux":
      return `<path d="M${cx - rx * 0.42},${cy + ry * 0.28} Q${cx},${cy + ry * 0.92} ${cx + rx * 0.42},${cy + ry * 0.28} Z" fill="${color}" opacity="0.95"/>`;
    case "mask":
      return `<path d="M${cx - rx * 0.68},${cy - ry * 0.12} Q${cx},${cy - ry * 0.42} ${cx + rx * 0.68},${cy - ry * 0.12} Q${cx + rx * 0.68},${cy + ry * 0.32} ${cx},${cy + ry * 0.2} Q${cx - rx * 0.68},${cy + ry * 0.32} Z" fill="${color}" opacity="0.88"/>`;
    default:
      return "";
  }
}

// Round-lidded eye: iris, slit pupil, a big primary sparkle and a tiny secondary one for shine.
function eye(cx, cy, color) {
  return `<g>
    <ellipse cx="${cx}" cy="${cy + 1}" rx="10" ry="12.5" fill="${color}"/>
    <ellipse cx="${cx}" cy="${cy + 1}" rx="3.4" ry="9.5" fill="#1a1512"/>
    <circle cx="${cx - 3}" cy="${cy - 4.5}" r="2.4" fill="#fff" opacity="0.92"/>
    <circle cx="${cx + 2.5}" cy="${cy + 3}" r="1.1" fill="#fff" opacity="0.65"/>
    <path d="M${cx - 10},${cy - 8} Q${cx},${cy - 13} ${cx + 10},${cy - 8}" stroke="${shade(color, -0.45)}" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.55"/>
  </g>`;
}

function catSvg(cat, seedKey) {
  const { fur, eye: eyeColor, eye2, ear, pattern, patternColor, longHair } = cat;
  const cx = 100, cy = 120, rx = 58, ry = 52;
  const pointed = pattern === "point";
  const earsMarkup = earGroup("left", ear, fur, patternColor, pointed) + earGroup("right", ear, fur, patternColor, pointed);
  const halo = longHair ? fluffyHalo(cx, cy, rx, ry, fur, seedKey) : "";

  // Soft radial backdrop tinted from the fur color instead of a flat opaque square, so the
  // card's own surface color (light or dark theme) still shows through at the corners.
  const backdrop = `<radialGradient id="bg-${seedKey}" cx="50%" cy="42%" r="65%">
      <stop offset="0%" stop-color="${shade(fur, 0.5)}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${shade(fur, 0.5)}" stop-opacity="0"/>
    </radialGradient>`;

  // Subtle volume on the head: a light sheen upper-left, a soft shadow lower-right.
  const shading = `
    <ellipse cx="${cx - rx * 0.32}" cy="${cy - ry * 0.4}" rx="${rx * 0.55}" ry="${ry * 0.42}" fill="${shade(fur, 0.22)}" opacity="0.5"/>
    <ellipse cx="${cx + rx * 0.3}" cy="${cy + ry * 0.48}" rx="${rx * 0.6}" ry="${ry * 0.38}" fill="${shade(fur, -0.18)}" opacity="0.35"/>`;

  const head = `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fur}" stroke="${shade(fur, -0.22)}" stroke-width="2"/>`;
  const pat = patternOverlay(pattern, patternColor, cx, cy, rx, ry);
  const leftEyeColor = eyeColor, rightEyeColor = eye2 || eyeColor;
  const eyes = eye(cx - 23, cy - 4, leftEyeColor) + eye(cx + 23, cy - 4, rightEyeColor);

  const blush = `<ellipse cx="${cx - 34}" cy="${cy + 18}" rx="9" ry="6" fill="#e8897e" opacity="0.28"/>
    <ellipse cx="${cx + 34}" cy="${cy + 18}" rx="9" ry="6" fill="#e8897e" opacity="0.28"/>`;

  const noseColor = mix("#d98f85", fur, 0.18);
  const nose = `<path d="M${cx - 5.5},${cy + 10} Q${cx},${cy + 7} ${cx + 5.5},${cy + 10} Q${cx + 4},${cy + 15} ${cx},${cy + 16} Q${cx - 4},${cy + 15} ${cx - 5.5},${cy + 10} Z" fill="${noseColor}"/>`;
  const mouthColor = shade(fur, -0.4);
  const mouth = `<path d="M${cx},${cy + 16} L${cx},${cy + 19} Q${cx},${cy + 24} ${cx - 10},${cy + 21} M${cx},${cy + 19} Q${cx},${cy + 24} ${cx + 10},${cy + 21}" stroke="${mouthColor}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;

  const whiskers = [-1, 1].map(side => [0, 1, 2].map(i => {
    const y = cy + 9 + i * 6;
    const x1 = cx + side * 32, x2 = cx + side * 60;
    return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y - 2 + i * 2}" stroke="#bdb6ab" stroke-width="1.3" stroke-linecap="round" opacity="0.8"/>`;
  }).join("")).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>${backdrop}</defs>
  <rect width="200" height="200" fill="url(#bg-${seedKey})"/>
  ${halo}
  ${earsMarkup}
  ${head}
  ${shading}
  ${pat}
  ${blush}
  ${eyes}
  ${nose}
  ${mouth}
  ${whiskers}
</svg>
`;
}

const outDir = path.join(ROOT, "images", "cats");
let count = 0;
Object.keys(groups).forEach(key => {
  groups[key].cats.forEach((cat, index) => {
    const seedKey = `${key}-${index + 1}`;
    const svg = catSvg(cat, seedKey);
    const file = path.join(outDir, `${seedKey}.svg`);
    fs.writeFileSync(file, svg, "utf8");
    count++;
  });
});
console.log(`Wrote ${count} SVG files to ${outDir}`);

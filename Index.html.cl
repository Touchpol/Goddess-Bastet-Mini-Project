<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <title>Meow Haven</title>
  <meta name="claude:viewport-fit-sides" content="cover">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600&family=Mitr:wght@400;500;600&display=swap">
  
  <style>
    :root {
      --bg:#17130f; --surface:#221c17; --surface-raised:#2d251f; --line:#3d332b; --line-strong:#7d6e60;
      --ink:#f5ede4; --ink-muted:#b3a596; --brand:#f2a65a; --brand-soft:#3a2a1b; --on-brand:#1d140c;
      --group-thai:#f08a4b; --group-fluffy:#b48ff0; --group-active:#7fd18b; --group-unique:#6cb8f0;
      --shadow-card:0 8px 24px rgba(0,0,0,.35); --shadow-lift:0 14px 36px rgba(0,0,0,.5);
      --font-display:"Mitr","IBM Plex Sans Thai",system-ui,sans-serif;
      --font-body:"IBM Plex Sans Thai",system-ui,sans-serif;
      --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-6:24px; --space-8:32px; --space-12:48px;
      --radius-sm:8px; --radius-md:14px; --radius-lg:22px; --radius-pill:999px;
      color-scheme:dark;
      box-sizing:border-box;
      padding-top:env(safe-area-inset-top,0px);
      padding-bottom:env(safe-area-inset-bottom,0px);
    }
    
    @media (prefers-color-scheme: light) { 
      :root:not([data-theme="dark"]) {
        --bg:#fbf6ef; --surface:#ffffff; --surface-raised:#f3eadf; --line:#e6dacb; --line-strong:#93806a;
        --ink:#2a2019; --ink-muted:#6b5c4e; --brand:#a8520f; --brand-soft:#f8e3cc; --on-brand:#ffffff;
        --group-thai:#c0501a; --group-fluffy:#7a4cc4; --group-active:#2c7f3e; --group-unique:#2a6aa8;
        --shadow-card:0 8px 24px rgba(60,40,20,.10); --shadow-lift:0 14px 36px rgba(60,40,20,.18);
        color-scheme:light; 
      } 
    }
    
    :root[data-theme="light"] {
      --bg:#fbf6ef; --surface:#ffffff; --surface-raised:#f3eadf; --line:#e6dacb; --line-strong:#93806a;
      --ink:#2a2019; --ink-muted:#6b5c4e; --brand:#a8520f; --brand-soft:#f8e3cc; --on-brand:#ffffff;
      --group-thai:#c0501a; --group-fluffy:#7a4cc4; --group-active:#2c7f3e; --group-unique:#2a6aa8;
      --shadow-card:0 8px 24px rgba(60,40,20,.10); --shadow-lift:0 14px 36px rgba(60,40,20,.18);
      color-scheme:light;
    }

    :root[data-theme="dark"] {
      --bg:#17130f; --surface:#221c17; --surface-raised:#2d251f; --line:#3d332b; --line-strong:#7d6e60;
      --ink:#f5ede4; --ink-muted:#b3a596; --brand:#f2a65a; --brand-soft:#3a2a1b; --on-brand:#1d140c;
      --group-thai:#f08a4b; --group-fluffy:#b48ff0; --group-active:#7fd18b; --group-unique:#6cb8f0;
      --shadow-card:0 8px 24px rgba(0,0,0,.35); --shadow-lift:0 14px 36px rgba(0,0,0,.5);
      color-scheme:dark;
    }

    *, *::before, *::after { box-sizing:border-box; }
    html { scroll-padding-top:84px; scroll-behavior:smooth; }
    body { margin:0; padding:0; font-family:var(--font-body); font-size:16px; line-height:26px; background:var(--bg); color:var(--ink); }
    img { max-width:100%; display:block; }
    [hidden]:not([hidden=until-found i]){ display:none!important; }
    h1,h2,h3 { font-family:var(--font-display); text-wrap:balance; margin:0; }
    .wrap { max-width:1040px; margin:0 auto; padding-left:max(16px, env(safe-area-inset-left,0px)); padding-right:max(16px, env(safe-area-inset-right,0px)); }

    /* Nav (card nav) */
    .cn-wrap {
      position: sticky;
      top: 0;
      z-index: 20;
      padding: var(--space-3) var(--space-4) 0;
      display: flex;
      justify-content: center;
      pointer-events: none;
    }

    .cn {
      pointer-events: auto;
      width: 100%;
      max-width: 800px;
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-card);
      height: 60px;
      overflow: hidden;
      transition: height .4s cubic-bezier(.2, .8, .2, 1);
      will-change: height;
    }

    .cn.is-open {
      height: var(--cn-h, 260px);
    }

    .cn__top {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 var(--space-2) 0 var(--space-4);
      position: relative;
    }

    .cn__logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 20px;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: var(--space-2);
      white-space: nowrap;
    }

    .cn__logo svg {
      width: 26px;
      height: 26px;
      fill: var(--brand);
    }

    .cn__burger {
      all: unset;
      cursor: pointer;
      width: 36px;
      height: 36px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
    }

    .cn__burger span {
      display: block;
      height: 2px;
      width: 26px;
      background: var(--ink);
      transition: transform .3s, opacity .3s;
      transform-origin: 50% 50%;
    }

    .cn__burger[aria-expanded="true"] span:first-child {
      transform: translateY(4px) rotate(45deg);
    }

    .cn__burger[aria-expanded="true"] span:last-child {
      transform: translateY(-4px) rotate(-45deg);
    }

    .cn__burger:focus-visible {
      outline: 2px solid var(--brand);
      outline-offset: 3px;
    }

    .cn__cta {
      height: 40px;
    }

    .cn__right {
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }

    .cn__cards {
      display: flex;
      gap: var(--space-2);
      padding: var(--space-2);
    }

    .cn__card {
      flex: 1 1 0;
      min-width: 0;
      background: var(--c);
      border-radius: var(--radius-sm);
      padding: var(--space-4);
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
      opacity: 0;
      transform: translateY(40px);
      transition: opacity .35s ease-out, transform .35s ease-out;
    }

    .cn.is-open .cn__card {
      opacity: 1;
      transform: none;
    }

    .cn.is-open .cn__card:nth-child(2) {
      transition-delay: .07s;
    }

    .cn.is-open .cn__card:nth-child(3) {
      transition-delay: .14s;
    }

    .cn__card h3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: var(--space-2);
      color: var(--ink);
    }

    .cn__card a {
      font-size: 15px;
      line-height: 24px;
      color: var(--ink);
      text-decoration: none;
      opacity: .85;
      transition: opacity .15s, color .15s;
    }

    .cn__card a:hover {
      opacity: 1;
      color: var(--brand);
    }

    .cn:not(.is-open) .cn__card a {
      visibility: hidden;
    }

    @media (max-width:820px) {
      .cn.is-open {
        height: var(--cn-h, 420px);
      }

      .cn__cards {
        flex-direction: column;
      }

      .cn__card {
        flex: none;
      }
    }

    @media (prefers-reduced-motion:reduce) {

      .cn,
      .cn__card,
      .cn__burger span {
        transition: none;
      }
    }

    /* Theme Toggle Button */
    .theme-toggle { background:transparent; border:1px solid var(--line); border-radius:var(--radius-pill); color:var(--ink); padding:6px 12px; cursor:pointer; font-size:14px; display:inline-flex; align-items:center; gap:6px; transition:background .15s; }
    .theme-toggle:hover { background:var(--surface-raised); }

    /* Buttons */
    .mh-btn { font:inherit; font-size:14px; line-height:20px; font-weight:500; height:44px; padding:0 var(--space-6); border-radius:var(--radius-pill); border:1px solid var(--line-strong); background:transparent; color:var(--ink); cursor:pointer; display:inline-flex; align-items:center; gap:var(--space-2); transition:background .15s,transform .15s; text-decoration:none; }
    .mh-btn:hover { background:var(--surface-raised); }
    .mh-btn:active { transform:translateY(1px); }
    .mh-btn--primary { background:var(--brand); border-color:var(--brand); color:var(--on-brand); }
    .mh-btn--primary:hover { filter:brightness(1.08); }
    .mh-btn--lg { height:52px; padding:0 var(--space-8); font-size:16px; }
    :focus-visible { outline:2px solid var(--brand); outline-offset:3px; }

    .mh-chip { display:inline-flex; font-size:12px; line-height:18px; font-weight:500; padding:var(--space-1) var(--space-3); border-radius:var(--radius-pill); background:var(--brand-soft); color:var(--brand); }
    .mh-panel { background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-md); padding:var(--space-6); min-width:0; }
    .muted { color:var(--ink-muted); }

    /* Intro */
    .hero { display:grid; grid-template-columns:1.3fr 1fr; gap:var(--space-8); align-items:center; padding-block:var(--space-12); }
    .hero h1 { font-size:48px; line-height:56px; font-weight:600; margin:var(--space-3) 0; }
    .hero h1 em { font-style:normal; color:var(--brand); }
    .lede { color:var(--ink-muted); margin:0 0 var(--space-6); max-width:440px; }
    .facts { display:flex; gap:var(--space-6); margin-top:var(--space-6); font-size:14px; color:var(--ink-muted); }
    .facts b { display:block; font-family:var(--font-display); font-size:22px; line-height:32px; color:var(--ink); font-weight:500; }
    .mh-panel h2 { font-size:22px; line-height:32px; font-weight:500; margin-bottom:var(--space-1); }
    .mh-panel > p { margin:0 0 var(--space-4); font-size:14px; line-height:22px; color:var(--ink-muted); }

    .breeds { padding-block:0 var(--space-12); }
    .breeds h2 { font-size:32px; line-height:42px; font-weight:500; margin-bottom:var(--space-2); }
    .breeds > p { margin:0 0 var(--space-6); color:var(--ink-muted); }
    .breed-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:var(--space-4); }
    .breed-col h3 { font-size:16px; line-height:24px; font-weight:500; display:flex; align-items:center; gap:var(--space-2); margin-bottom:var(--space-2); }
    .breed-col h3 i { width:10px; height:10px; border-radius:50%; display:inline-block; }
    .breed-col ul { list-style:none; margin:0; padding:0; font-size:14px; line-height:22px; }
    .breed-col li { padding:var(--space-1) 0; border-top:1px solid var(--line); display:flex; justify-content:space-between; gap:var(--space-2); }
    .breed-col li span { color:var(--ink-muted); text-align:right; }

    /* Sections merged from home.html */
    .sec { padding-block:var(--space-12); }
    .sec h2 { font-size:32px; line-height:42px; font-weight:500; margin-bottom:var(--space-2); }
    .sec > .wrap > p { margin:0 0 var(--space-6); color:var(--ink-muted); max-width:620px; }
    .hero__cta { display:flex; flex-wrap:wrap; gap:var(--space-3); }
    .sec .mh-chip { margin-bottom:var(--space-3); }
    .sub { font-size:22px; line-height:32px; font-weight:500; margin:var(--space-8) 0 var(--space-2); color:var(--brand); }
    .sec > .wrap > p.story { color:var(--ink); margin-bottom:var(--space-4); }
    .facts-grid { list-style:none; margin:0; padding:0; display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:var(--space-4); }
    .facts-grid li { background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-md); padding:var(--space-4) var(--space-6); }
    .facts-grid b { display:block; font-family:var(--font-display); font-weight:500; font-size:17px; line-height:28px; margin-bottom:var(--space-1); }
    .facts-grid span { font-size:14px; line-height:24px; color:var(--ink-muted); }
    .summary { margin-top:var(--space-8); }
    .sec > .wrap > .summary p { margin:0 0 var(--space-2); color:var(--ink); max-width:none; }
    .summary small { color:var(--ink-muted); }
    .steps { list-style:none; margin:0; padding:0; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:var(--space-4); counter-reset:step; }
    .steps li { counter-increment:step; background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-md); padding:var(--space-6); }
    .steps li::before { content:counter(step); display:grid; place-items:center; width:36px; height:36px; border-radius:50%; background:var(--brand-soft); color:var(--brand); font-family:var(--font-display); font-weight:500; margin-bottom:var(--space-3); }
    .steps b { display:block; font-family:var(--font-display); font-weight:500; font-size:18px; line-height:28px; margin-bottom:var(--space-1); }
    .steps span { font-size:14px; line-height:24px; color:var(--ink-muted); }
    .group-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:var(--space-4); }
    .group-card { background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--shadow-card); display:flex; flex-direction:column; }
    .group-card img { width:100%; aspect-ratio:1/1; object-fit:cover; display:block; background:var(--surface-raised); }
    .group-card div { padding:var(--space-4); }
    .group-card h3 { font-size:16px; line-height:24px; font-weight:500; display:flex; align-items:center; gap:var(--space-2); margin-bottom:var(--space-2); }
    .group-card h3 i { width:10px; height:10px; border-radius:50%; flex:none; }
    .group-card p { margin:0; font-size:14px; line-height:22px; color:var(--ink-muted); }
    .cta { text-align:center; }
    .cta .mh-panel { padding:var(--space-12) var(--space-6); }
    .cta h2 { margin-bottom:var(--space-3); }
    .cta p { margin:0 auto var(--space-6); max-width:480px; color:var(--ink-muted); }

    /* Test */
    .test { padding-block:var(--space-8) var(--space-12); display:flex; flex-direction:column; align-items:center; gap:var(--space-8); }
    .mh-progress { display:flex; flex-direction:column; gap:var(--space-2); width:100%; max-width:640px; }
    .mh-progress__meta { display:flex; justify-content:space-between; font-size:12px; font-weight:500; color:var(--ink-muted); font-variant-numeric:tabular-nums; }
    .mh-progress__track { height:8px; border-radius:var(--radius-sm); background:var(--surface-raised); overflow:hidden; }
    .mh-progress__fill { height:100%; width:0; border-radius:var(--radius-sm); background:var(--brand); transition:width .25s ease-out; }
    .test h2 { font-size:22px; font-weight:500; text-align:center; }
    .mh-vs { display:flex; gap:var(--space-6); align-items:center; justify-content:center; width:100%; }
    .mh-vs__or { font-family:var(--font-display); font-size:14px; color:var(--ink-muted); }
    .mh-card { all:unset; box-sizing:border-box; display:flex; flex-direction:column; width:100%; max-width:300px; background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-lg); box-shadow:var(--shadow-card); overflow:hidden; cursor:pointer; transition:transform .2s,box-shadow .2s,border-color .2s; }
    .mh-card:hover { transform:translateY(-4px); box-shadow:var(--shadow-lift); }
    .mh-card.is-chosen { animation:mh-pop .3s ease-out; border-color:var(--brand); }
    .mh-card__photo { aspect-ratio:1/1; width:100%; background:var(--surface-raised); object-fit:cover; display:block; }
    .mh-card__body { padding:var(--space-4); display:flex; flex-direction:column; gap:var(--space-1); }
    .mh-card__name { font-family:var(--font-display); font-size:22px; font-weight:500; }
    .mh-card__trait { font-size:14px; color:var(--ink-muted); }
    @keyframes mh-pop { 0%,100%{transform:scale(1)} 40%{transform:scale(1.04)} }

    /* Result */
    .result { padding-block:var(--space-12); display:grid; grid-template-columns:1fr 1fr; gap:var(--space-8); align-items:start; }
    .result h1 { font-size:48px; font-weight:600; margin:var(--space-3) 0; }
    .result .desc { color:var(--ink-muted); margin:0 0 var(--space-6); max-width:460px; }
    .actions { display:flex; gap:var(--space-3); flex-wrap:wrap; }
    .scores { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; }
    .mh-score { display:grid; grid-template-columns:28px minmax(0,1fr) auto; align-items:center; gap:var(--space-3); padding:var(--space-2) 0; border-top:1px solid var(--line); font-size:14px; font-weight:500; color:var(--ink-muted); }
    .mh-score:first-child { border-top:0; }
    .mh-score__rank { font-family:var(--font-display); font-size:16px; font-variant-numeric:tabular-nums; }
    .mh-score__value b { font-family:var(--font-display); font-size:18px; font-weight:500; }
    .mh-score.is-winner { color:var(--ink); }
    .mh-score.is-winner .mh-score__rank { color:var(--brand); }
    .mh-score.is-winner .mh-score__name { font-weight:600; }
    .picked { grid-column:1/-1; }
    .picked h2 { font-size:22px; font-weight:500; margin-bottom:var(--space-4); }
    .mini-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(140px,1fr)); gap:var(--space-4); }
    .mini { background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-md); overflow:hidden; }
    .mini div:last-child { padding:var(--space-2) var(--space-3); font-size:14px; }
    .mini small { display:block; color:var(--ink-muted); font-size:12px; }

    /* --- OPTIMIZED BASTET FOOTER WITH IMAGE --- */
    .bastet-footer { background:#120e0a; border-top:2px solid rgba(242,166,90,.3); color:var(--ink-muted); padding:32px 0 16px; margin-top:48px; font-size:13px; }
    .bastet-grid { display:grid; grid-template-columns:1.2fr 1fr; gap:20px; margin-bottom:20px; }
    .bastet-box { background:#1c1611; border:1px solid rgba(242,166,90,.2); border-radius:var(--radius-md); padding:18px 20px; display:flex; flex-direction:column; justify-content:space-between; box-shadow:var(--shadow-card); }
    .bastet-story { display:flex; gap:16px; align-items:flex-start; margin-bottom:12px; }
    .bastet-img { width:70px; height:85px; object-fit:cover; border-radius:var(--radius-sm); border:1px solid rgba(242,166,90,.4); flex-shrink:0; filter:sepia(30%) contrast(110%); }
    .bastet-box h3 { font-size:16px; color:var(--brand); font-weight:600; display:flex; align-items:center; gap:6px; margin-bottom:6px; }
    .bastet-box p { margin:0; line-height:20px; font-size:13px; }
    .bastet-links { display:flex; gap:6px; list-style:none; margin:0; padding:0; flex-wrap:wrap; }
    .bastet-links a { color:var(--brand); text-decoration:none; font-size:12px; font-weight:500; border:1px solid rgba(242,166,90,.3); padding:3px 8px; border-radius:var(--radius-pill); background:rgba(242,166,90,.08); transition:background .15s; }
    .bastet-links a:hover { background:rgba(242,166,90,.2); }
    .bastet-map { background:#261f18; border:1px dashed rgba(242,166,90,.4); border-radius:var(--radius-sm); padding:10px; text-align:center; margin-bottom:12px; display:flex; flex-direction:column; gap:2px; }
    .bastet-map span { animation:bounce 2s infinite ease-in-out; display:inline-block; }
    .bastet-bottom { border-top:1px solid var(--line); padding-top:12px; text-align:center; font-size:12px; display:flex; flex-direction:column; gap:2px; }

    @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }

    @media (max-width:760px) {
      .hero, .result, .bastet-grid, .steps { grid-template-columns:1fr; }
      .group-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
      .breed-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
    }
    @media (max-width:600px) {
      .hero h1, .result h1 { font-size:36px; line-height:44px; }
      .mh-vs { flex-direction:column; gap:var(--space-3); }
      .mh-card { max-width:none; flex-direction:row; }
      .mh-card__photo { width:120px; flex:none; }
      .breed-grid { grid-template-columns:1fr; }
      .bastet-story { flex-direction:column; }
      .bastet-img { width:100%; height:120px; }
    }
    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition:none !important; animation:none !important; } }
  </style>
</head>
<body>

<div class="cn-wrap">
  <nav class="cn" id="cardNav" aria-label="หลัก">
    <div class="cn__top">
      <button class="cn__burger" id="cnBurger" type="button" aria-label="เปิดเมนู" aria-expanded="false" aria-controls="cnCards"><span></span><span></span></button>
      <a class="cn__logo" href="#intro" data-go="intro"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11 L5.5 3 L10 7.5 h4 L18.5 3 L20 11 a8 8 0 1 1 -16 0Z" /></svg>Meow Haven</a>
      <div class="cn__right">
        <button type="button" class="theme-toggle" id="themeToggleBtn" aria-label="สลับธีม"><span id="themeIcon">🌙</span></button>
        <a class="mh-btn mh-btn--primary cn__cta" href="#test" data-go="test">เริ่มเล่น</a>
      </div>
    </div>
    <div class="cn__cards" id="cnCards">
      <div class="cn__card" style="--c:var(--brand-soft)">
        <h3>สำรวจ</h3>
        <a href="#about" data-go="intro">↗ สายมูแมว</a>
        <a href="#how" data-go="intro">↗ เล่นยังไง</a>
      </div>
      <div class="cn__card" style="--c:var(--surface-raised)">
        <h3>กลุ่มแมว</h3>
        <a href="#groups" data-go="intro">↗ 4 กลุ่มแมว</a>
        <a href="#breeds" data-go="intro">↗ 40 สายพันธุ์</a>
      </div>
      <div class="cn__card" style="--c:var(--surface)">
        <h3>เล่นเลย</h3>
        <a href="#test" data-go="test">↗ A/B Test</a>
        <a href="#about" data-go="intro">↗ ตำนาน Bastet</a>
      </div>
    </div>
  </nav>
</div>

<main>
  <!-- INTRO -->
  <section id="intro" class="screen">
    <div class="wrap hero">
      <div>
        <span class="mh-chip">สำหรับคนรักแมว</span>
        <h1>หาแมว<em>ที่ใช่</em><br>สำหรับคุณ</h1>
        <p class="lede">เลือกแมวที่ชอบทีละคู่ ครบ 20 คู่แล้วมาดูกันว่าคุณเหมาะกับแมวกลุ่มไหนที่สุด</p>
        <div class="hero__cta">
          <button class="mh-btn mh-btn--primary mh-btn--lg" id="startBtn" type="button">เริ่มเลย →</button>
          <a class="mh-btn mh-btn--lg" href="#how">เล่นยังไง</a>
        </div>
        <div class="facts"><span><b>40</b>สายพันธุ์</span><span><b>4</b>กลุ่ม</span><span><b>20</b>คู่</span></div>
      </div>
      <div class="mh-panel" id="lastPanel"></div>
    </div>

    <!-- ABOUT -->
    <section class="sec" id="about">
      <div class="wrap">
        <span class="mh-chip">🐱 สายมูแมว</span>
        <h2>จากเทพีอียิปต์ ถึงแมวมงคลสยาม</h2>
        <p>ทำไมมนุษย์ถึงยกแมวให้เป็น “ผู้คุ้มครองบ้าน” มาตั้งแต่โบราณ</p>

        <h3 class="sub">ต้นตำรับ: บาสเต็ต เทพีแมวแห่งอียิปต์</h3>
        <p class="story">บาสเต็ตเป็นเทพีของอียิปต์โบราณ ซึ่งอาจมีต้นกำเนิดจากนูเบีย และมีผู้บูชามาตั้งแต่ราชวงศ์ที่ 2
          (ราว 2890 ปีก่อนคริสตกาล) หรือเกือบ 5,000 ปีที่แล้ว</p>
        <ul class="facts-grid">
          <li><b>จากสิงโตสู่แมว</b><span>เดิมเธอเป็นเทพีสิงโตสายนักรบแห่งดวงอาทิตย์
              ก่อนจะกลายเป็นเทพีแมวอย่างที่รู้จักกันในปัจจุบัน</span></li>
          <li><b>พลังคุ้มครอง</b><span>นับถือกันว่าเป็นเทพีผู้ปกป้องจากโรคติดต่อและวิญญาณชั่วร้าย
              และเป็นเทพีแห่งการตั้งครรภ์และการคลอดบุตร อาจเพราะแมวบ้านขยายพันธุ์เก่ง</span></li>
          <li><b>แมว = ของสูง</b><span>แมวหลวงบางตัวได้สวมเครื่องประดับทองคำ และได้กินอาหารจานเดียวกับคนในบ้าน</span></li>
          <li><b>สายมูตัวจริง</b><span>เมื่อขุดค้นวิหารของบาสเต็ต พบมัมมี่แมวมากกว่า 300,000 ตัว และถ้าแมวตาย
              ทั้งครอบครัวจะไว้ทุกข์อย่างหนัก</span></li>
          <li><b>เทศกาลใหญ่</b><span>เทศกาลของเทพีองค์นี้มีผู้มาร่วมราว 700,000 คนในแต่ละปี มีทั้งร้อง เต้น
              ดื่มไวน์กันเต็มที่</span></li>
        </ul>

        <h3 class="sub">มาถึงสยาม: แมวไทยก็มีของ</h3>
        <p class="story">แม้ไม่มีหลักฐานว่าลัทธิบาสเต็ตส่งต่อมาถึงไทยโดยตรง แต่ความเชื่อว่า “แมวคือผู้พิทักษ์ ผู้นำโชค”
          มีอยู่ในบ้านเราเช่นกัน</p>
        <ul class="facts-grid">
          <li><b>ตำราแมวไทย</b><span>ในสมุดข่อยโบราณ แยกแมวมงคล เช่น วิเชียรมาศ ศุภลักษณ์ โกนจา
              ว่าตัวไหนเลี้ยงแล้วรวย</span></li>
          <li><b>แห่นางแมว</b><span>อุ้มแมวแห่ไปขอฝนให้พืชผล</span></li>
          <li><b>อุ้มแมวขึ้นบ้านใหม่</b><span>ความเชื่อว่าแมวช่วยเสริมความร่มเย็นให้บ้าน</span></li>
        </ul>

        <div class="mh-panel summary">
          <p><b>สรุป:</b> ห่างกันหลายพันปี ห่างกันหลายพันกิโลเมตร แต่มนุษย์ยกแมวเป็น “ผู้คุ้มครองบ้าน” เหมือนกัน 🐈‍⬛✨</p>
          <small>ที่มา: Bastet – Wikipedia</small>
        </div>
      </div>
    </section>

    <!-- HOW -->
    <section class="sec" id="how">
      <div class="wrap">
        <h2>เล่นยังไง</h2>
        <p>ใช้เวลาประมาณ 1 นาที เล่นได้ทั้งมือถือและคอมพิวเตอร์</p>
        <ol class="steps">
          <li><b>เลือกตัวที่ชอบ</b><span>แมวขึ้นมาทีละคู่ คลิกการ์ด หรือกด A / B หรือ ← → บนคีย์บอร์ด</span></li>
          <li><b>ครบ 20 คู่</b><span>ทุกตัวโผล่มาแค่ครั้งเดียว และจะเจอกับแมวต่างกลุ่มเสมอ</span></li>
          <li><b>ดูผลลัพธ์</b><span>รู้ทันทีว่าคุณชอบแมวกลุ่มไหนที่สุด พร้อมคะแนนและตัวที่คุณเลือก</span></li>
        </ol>
      </div>
    </section>

    <!-- GROUPS (rendered from groups.js) -->
    <section class="sec" id="groups">
      <div class="wrap">
        <h2>แมว 4 กลุ่ม</h2>
        <p>คุณจะเป็นสายไหน? ลองเล่นเพื่อหาคำตอบ</p>
        <div class="group-grid" id="groupGrid"></div>
      </div>
    </section>

    <div class="wrap breeds" id="breeds">
      <h2>แมว 4 กลุ่ม 40 สายพันธุ์</h2>
      <p>ทุกตัวจะโผล่มาในเกมครั้งเดียว และจะเจอกับแมวต่างกลุ่มเสมอ</p>
      <div class="breed-grid" id="breedGrid"></div>
    </div>

    <!-- CTA -->
    <section class="sec cta">
      <div class="wrap">
        <div class="mh-panel">
          <h2>พร้อมหาแมวที่ใช่หรือยัง?</h2>
          <p>เลือกไปตามใจชอบ ไม่มีถูกไม่มีผิด แล้วให้เทพี Bastet เป็นคนชี้ทาง</p>
          <a class="mh-btn mh-btn--primary mh-btn--lg" href="#test" data-go="test">เริ่มเลย →</a>
        </div>
      </div>
    </section>
  </section>

  <!-- TEST -->
  <section id="test" class="screen" hidden>
    <div class="wrap test">
      <div class="mh-progress">
        <div class="mh-progress__meta"><span id="pairLabel">คู่ที่ 1 / 20</span><span>กด A / B หรือ ← →</span></div>
        <div class="mh-progress__track" role="progressbar" aria-valuemin="0" aria-valuemax="20" aria-valuenow="0" id="progTrack">
          <div class="mh-progress__fill" id="progFill"></div>
        </div>
      </div>
      <h2>ชอบตัวไหนมากกว่า?</h2>
      <div class="mh-vs">
        <button class="mh-card" id="cardA" type="button"></button>
        <span class="mh-vs__or">หรือ</span>
        <button class="mh-card" id="cardB" type="button"></button>
      </div>
    </div>
  </section>

  <!-- RESULT -->
  <section id="result" class="screen" hidden>
    <div class="wrap result">
      <div>
        <span class="mh-chip">ผลของคุณ</span>
        <h1 id="winTitle"></h1>
        <p class="desc" id="winDesc"></p>
        <div class="actions">
          <button class="mh-btn mh-btn--primary" id="againBtn" type="button">เล่นอีกครั้ง</button>
          <button class="mh-btn" data-go="intro" type="button">กลับหน้าแรก</button>
        </div>
      </div>
      <div class="mh-panel">
        <h2>คะแนนแต่ละกลุ่ม</h2>
        <p>จาก 20 ครั้งที่คุณเลือก</p>
        <ol class="scores" id="scores"></ol>
      </div>
      <div class="picked">
        <h2 id="pickedTitle">แมวที่คุณเลือกในกลุ่มนี้</h2>
        <div class="mini-grid" id="picked"></div>
      </div>
    </div>
  </section>
</main>

<!-- BASTET FOOTER -->
<footer class="bastet-footer">
  <div class="wrap">
    <div class="bastet-grid">
      <div class="bastet-box">
        <div class="bastet-story">
          <!-- รูปปั้นรูปเคารพเทพีบาสเตต (Goddess Bastet) พร้อมรูปสำรองถ้าโหลดไม่ขึ้น -->
          <img src="images/Gemini_Generated_Image_8x1o2o8x1o2o8x1o.jpeg" 
               onerror="this.src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&auto=format&fit=crop';" 
               alt="Goddess Bastet" 
               class="bastet-img">
          <div>
            <h3><span>𓃠</span> THE CULT OF BASTET (GIZA)</h3>
            <p>สืบทอดจิตวิญญาณจากลัทธิบูชาเทพีบาสเตตแห่งอียิปต์โบราณตั้งแต่ 3100 ปีก่อนคริสตกาล หน้าที่แท้จริงของมนุษย์คือการเป็นทาสรับใช้ เปิดกระป๋อง และกราบไหว้เจ้านาย</p>
          </div>
        </div>
        <ul class="bastet-links">
          <li><a href="javascript:void(0)">𓏬 วิธีได้ยันต์ 5 แถว</a></li>
          <li><a href="javascript:void(0)">𓏬 บัญชาปลาทู</a></li>
          <li><a href="javascript:void(0)">𓏬 สมาคมทาส</a></li>
          <li><a href="javascript:void(0)">𓏬 หมดตัวเพราะกลัวเจ้านาย</a></li>
          <li><a href="javascript:void(0)" title="The sacred duty">𓏬 คัมภีร์ตักทราย (The Holy Litter Box)</a></li>
          <li><a href="javascript:void(0)" title="If it fits, I sits">𓏬 ทฤษฎีกล่องลัง (If It Fits, I Sits)</a></li>
          <li><a href="javascript:void(0)" title="Gravity test">𓏬 กฏแรงโน้มถ่วง (Pushing Things Off Tables)</a></li>
          <li><a href="javascript:void(0)" title="3 AM Zoomies">𓏬 วิ่งมาราธอนตี 3 (3 AM Zoomies Support)</a></li>
          <li><a href="javascript:void(0)" title="I am your master">𓏬 ใบรับรองการเป็นทาส (Certified Cat Servant)</a></li>
        </ul>
      </div>
      
      <div class="bastet-box">
        <div>
          <h3><span>🔺</span> SACRED TEMPLE LOCATION</h3>
          <p style="margin-bottom:8px;">ศูนย์บัญชาการหลักใต้เงื้อมเงาของมหาพีระมิดแห่งกิซ่า ต้นกำเนิดจักรวาลแมว</p>
          <div class="bastet-map">
            <span>📍</span>
            <strong style="color:var(--ink); font-size:12px;">The Great Pyramid of Giza, Egypt</strong>
            <small style="color:var(--ink-muted);">GPS: 29.9792° N, 31.1342° E</small>
          </div>
        </div>
        <a href="https://maps.google.com/?q=Giza+Pyramids" target="_blank" rel="noopener noreferrer" class="mh-btn" style="width:100%; justify-content:center; font-size:12px; height:34px;">เปิดแผนที่นำทางสู่พีระมิด 🗺️</a>
      </div>
    </div>

    <div class="bastet-bottom">
      <p>© 3100 BC - 2026 Meow Haven & The Order of Bastet. Managed by Cat Servants.</p>
      <p style="font-style:italic;">"ขอให้กระบะทรายสะอาดสะอ้านและขนมเลียไม่ขาดแคลน 🐾"</p>
    </div>
  </div>
</footer>

<script>
  // Script สำหรับสลับ Theme Light / Dark
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  
  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeIcon.textContent = '☀️';
    }
  });

  // Card nav open/close
  (function () {
    var nav = document.getElementById('cardNav'), btn = document.getElementById('cnBurger'), cards = document.getElementById('cnCards');
    function size() { nav.style.setProperty('--cn-h', (60 + cards.scrollHeight) + 'px'); }
    function set(o) { if (o) size(); nav.classList.toggle('is-open', o); btn.setAttribute('aria-expanded', o); btn.setAttribute('aria-label', o ? 'ปิดเมนู' : 'เปิดเมนู'); }
    btn.addEventListener('click', function () { set(!nav.classList.contains('is-open')); });
    cards.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    window.addEventListener('resize', function () { if (nav.classList.contains('is-open')) size(); });
  })();
</script>
<script src="groups.js"></script>
<script src="script.js"></script>
</body>
</html>

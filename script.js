/* =====================================================
   EDIT THIS PART: all the content lives here
   ===================================================== */

const CONFIG = {
  title: "TITLE",
  subtitle: "SUBTITLE",

  // true = shows the secret nose hit area as a red dashed box (turn off before presenting)
  debug: true,

  // Image for the menu character (leave "" to show the placeholder box)
  menuCharacterImage: "",

  // Shown on the conclusion screen if no topic was visited
  endFallback: "Placeholder conclusion text: a brief explanation of what was learned.",
};

/* Each topic = one menu button.
   Each page = a title, some lines (revealed one at a time), and an optional image for the oval.
   Images go in the assets/ folder, e.g. image: "assets/math1.png" */
const TOPICS = [
  {
    code: "MAT",
    name: "Math",
    summary: "Placeholder: what was learned about Math.",
    pages: [
      { title: "MATH 1", image: "", lines: ["Placeholder line 1", "Placeholder line 2", "Placeholder line 3"] },
      { title: "MATH 2", image: "", lines: ["Placeholder line 1", "Placeholder line 2", "Placeholder line 3"] },
    ],
  },
  {
    code: "BIO",
    name: "Biology",
    summary: "Placeholder: what was learned about Biology.",
    pages: [
      { title: "BIO 1", image: "", lines: ["Placeholder line 1", "Placeholder line 2", "Placeholder line 3"] },
      { title: "BIO 2", image: "", lines: ["Placeholder line 1", "Placeholder line 2", "Placeholder line 3"] },
    ],
  },
  {
    code: "GEO",
    name: "Geography",
    summary: "Placeholder: what was learned about Geography.",
    pages: [
      { title: "GEO 1", image: "", lines: ["Placeholder line 1", "Placeholder line 2", "Placeholder line 3"] },
      { title: "GEO 2", image: "", lines: ["Placeholder line 1", "Placeholder line 2", "Placeholder line 3"] },
    ],
  },
];

/* =====================================================
   LOGIC (you shouldn't need to touch this to change content)
   ===================================================== */

const $ = (id) => document.getElementById(id);

const state = {
  screen: "menu",     // "menu" | "topic" | "end"
  topic: 0,
  page: 0,
  shown: 0,           // how many lines are revealed on the current page
  visited: new Set(), // topic indexes that were opened
};

/* ---- scale the 1280x720 stage to fit the window ---- */
function fit() {
  const s = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
  $("stage").style.transform = `translate(-50%, -50%) scale(${s})`;
}
window.addEventListener("resize", fit);
fit();

/* ---- screens ---- */
function showScreen(name) {
  state.screen = name;
  for (const id of ["menu", "topic", "end"]) {
    $("screen-" + id).classList.toggle("active", id === name);
  }
}

/* ---- menu ---- */
function buildMenu() {
  $("menu-title").textContent = CONFIG.title;
  $("menu-subtitle").textContent = CONFIG.subtitle;

  if (CONFIG.menuCharacterImage) {
    const c = $("menu-char");
    c.style.backgroundImage = `url(${CONFIG.menuCharacterImage})`;
    c.style.backgroundSize = "contain";
    c.style.backgroundRepeat = "no-repeat";
    c.style.backgroundPosition = "center";
    c.style.border = "none";
    c.querySelector(".placeholder-label").style.display = "none";
  }

  const box = $("menu-buttons");
  box.innerHTML = "";
  TOPICS.forEach((t, i) => {
    const item = document.createElement("div");
    item.className = "menu-item";
    item.id = "menu-item-" + i;
    item.style.left = 80 + i * 22 + "px";
    item.style.top = 280 + i * 120 + "px";
    item.innerHTML =
      `<div class="slant"></div>` +
      `<div class="num">0${i + 1}</div>` +
      `<div class="label">${t.code}</div>`;
    item.addEventListener("click", () => openTopic(i, 0));
    box.appendChild(item);
  });
}

function goMenu() {
  state.visited.forEach((i) => $("menu-item-" + i).classList.add("visited"));
  showScreen("menu");
}

/* ---- topic pages ---- */
function openTopic(topicIdx, pageIdx, revealAll = false) {
  state.topic = topicIdx;
  state.page = pageIdx;
  state.visited.add(topicIdx);

  const page = TOPICS[topicIdx].pages[pageIdx];

  $("topic-title").textContent = page.title;

  const scene = $("scene");
  scene.style.backgroundImage = page.image ? `url(${page.image})` : "none";
  $("scene-label").textContent = page.image ? "" : `SCENE: ${page.title}`;

  const lines = $("topic-lines");
  lines.innerHTML = "";
  page.lines.forEach((text) => {
    const d = document.createElement("div");
    d.className = "line";
    d.textContent = text;
    lines.appendChild(d);
  });

  state.shown = 0;
  if (revealAll) {
    page.lines.forEach(() => revealNextLine());
  }

  showScreen("topic");
}

function revealNextLine() {
  const els = $("topic-lines").children;
  if (state.shown < els.length) {
    els[state.shown].classList.add("show");
    state.shown++;
  }
}

function next() {
  if (state.screen !== "topic") return;
  const page = TOPICS[state.topic].pages[state.page];
  if (state.shown < page.lines.length) {
    revealNextLine();
  } else if (state.page < TOPICS[state.topic].pages.length - 1) {
    openTopic(state.topic, state.page + 1);
  } else {
    goMenu();
  }
}

function prev() {
  if (state.screen !== "topic") return;
  if (state.page > 0) {
    openTopic(state.topic, state.page - 1, true);
  } else {
    goMenu();
  }
}

/* ---- conclusion ---- */
function goEnd() {
  const body = $("end-body");
  body.innerHTML = "";

  if (state.visited.size === 0) {
    body.innerHTML = `<p>${CONFIG.endFallback}</p>`;
  } else {
    TOPICS.forEach((t, i) => {
      if (state.visited.has(i)) {
        body.innerHTML += `<h3>${t.name}</h3><p>${t.summary}</p>`;
      }
    });
  }
  showScreen("end");
}

/* ---- events ---- */
$("btn-next").addEventListener("click", next);
$("btn-prev").addEventListener("click", prev);
$("btn-menu").addEventListener("click", goMenu);
$("btn-end-menu").addEventListener("click", goMenu);
$("nose").addEventListener("click", goEnd);

// clicking anywhere on a topic page (not on a button) also advances
$("screen-topic").addEventListener("click", (e) => {
  if (!e.target.closest("button")) next();
});

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
    case " ":
    case "Enter":
      e.preventDefault();
      next();
      break;
    case "ArrowLeft":
      prev();
      break;
    case "Escape":
      goMenu();
      break;
    case "c": // backup shortcut for the secret conclusion, in case the nose click misses
    case "C":
      goEnd();
      break;
    case "1":
    case "2":
    case "3":
      if (state.screen === "menu") openTopic(Number(e.key) - 1, 0);
      break;
  }
});

/* ---- start ---- */
if (CONFIG.debug) document.body.classList.add("debug");
buildMenu();
showScreen("menu");

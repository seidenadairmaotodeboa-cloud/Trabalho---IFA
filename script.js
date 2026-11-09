/* =====================================================
   EDITE AQUI: todo o conteúdo fica neste bloco
   ===================================================== */

const CONFIG = {
  title: "Geometria Espacial, Clima e Alimentação Saudável em SC",
  subtitle: "Equipe 5 — Geografia, Biologia e Matemática",
  info: "Derick Brum, Luiz Menjão, João Pedro  |  Projeto IFA",

  // true = mostra a área secreta do nariz (caixa vermelha tracejada). Coloque false antes de apresentar.
  debug: true,

  // Imagem da personagem do menu (deixe "" para mostrar a caixa placeholder)
  menuCharacterImage: "",
};

// ---- EXEMPLO: troque pelas medidas (cm) das embalagens reais de vocês ----
const fmt = (n, d = 0) => n.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
const box = (a, b, c) => ({ v: a * b * c, s: 2 * (a * b + a * c + b * c) }); // volume e área de superfície
const CEREAL = box(20, 6, 30);     // caixa de cereal 20 x 6 x 30
const SUCO   = box(6, 9, 18.5);    // caixa de suco 6 x 9 x 18,5
const NOVA   = box(15, 15, 16);    // nova embalagem (mesmo volume do cereal)

/* Cada tópico = um botão do menu. Cada página = título + linhas (reveladas uma a uma) + imagem do oval.
   image: arquivo dentro de assets/   |   fit: "cover" (foto) ou "contain" (diagrama) */
const TOPICS = [
  {
    code: "GEO", name: "Geografia",
    summary: "O clima subtropical de SC, com variação de altitude, define o que cada região consegue plantar.",
    pages: [
      { title: "CLIMA DE SANTA CATARINA", image: "assets/geo1.jpg", fit: "cover", lines: [
        "Clima subtropical em quase todo o estado",
        "Altitude muda tudo: Serra fria x Litoral quente",
        "Chuvas bem distribuídas ao longo do ano",
        "Geadas frequentes e neve ocasional na Serra (São Joaquim, Urupema)",
      ]},
      { title: "CULTIVOS POR REGIÃO", image: "assets/geo2_tabela.svg", fit: "contain", lines: [
        "Serra: maçã, que precisa de frio",
        "Litoral e Vale: arroz, com calor e água",
        "Oeste: milho e soja",
        "Planalto Norte: fumo",
      ]},
    ],
  },
  {
    code: "BIO", name: "Biologia",
    summary: "Alimentos saudáveis fortalecem o corpo, e a embalagem certa protege nutrientes e evita desperdício.",
    pages: [
      { title: "ALIMENTAÇÃO SAUDÁVEL", image: "assets/bio1.jpg", fit: "cover", lines: [
        "A produção agrícola de SC abastece uma dieta variada",
        "Frutas e grãos fornecem fibras, vitaminas e energia",
        "Vitaminas e minerais ajudam a imunidade",
        "Comer bem + atividade física = qualidade de vida (Projeto IFA)",
      ]},
      { title: "SEGURANÇA ALIMENTAR", image: "assets/bio2.jpg", fit: "cover", lines: [
        "A embalagem protege os nutrientes da luz, do ar e da umidade",
        "Impede a contaminação por bactérias e fungos",
        "Aumenta a validade e reduz o desperdício",
        "O rótulo informa ingredientes e prazo de validade",
      ]},
    ],
  },
  {
    code: "MAT", name: "Matemática",
    summary: "Volume e área de superfície mostram como criar embalagens que gastam menos material.",
    pages: [
      { title: "PRISMAS E PIRÂMIDES", image: "assets/mat1_solidos.svg", fit: "contain", lines: [
        "Prisma: 2 bases paralelas e iguais, faces laterais em paralelogramos",
        "Pirâmide: 1 base e faces laterais triangulares que se encontram no vértice",
        "Elementos: faces, vértices, arestas, altura (h) e bases",
        "Relação de Euler: V − A + F = 2",
      ]},
      { title: "FÓRMULAS E RELAÇÕES", image: "assets/mat2_formulas.png", fit: "contain", lines: [
        "Volume do prisma: V = Ab × h",
        "Volume da pirâmide: V = (Ab × h) / 3",
        "Pirâmide = 1/3 do prisma de mesma base e altura",
        "Capacidade: 1 L = 1 dm³ = 1000 cm³",
      ]},
      { title: "EMBALAGENS REAIS", image: "assets/mat3_embalagens.jpg", fit: "cover", lines: [
        "Caixa de cereal (prisma retangular): 20 × 6 × 30 cm",
        `V = ${fmt(CEREAL.v)} cm³ (${fmt(CEREAL.v / 1000, 1)} L)  |  Área = ${fmt(CEREAL.s)} cm²`,
        "Caixa de suco (prisma retangular): 6 × 9 × 18,5 cm",
        `V = ${fmt(SUCO.v)} cm³ (${fmt(SUCO.v / 1000, 1)} L)  |  Área = ${fmt(SUCO.s)} cm²`,
        `Área por litro: cereal ${fmt(CEREAL.s / (CEREAL.v / 1000))} cm²/L  x  suco ${fmt(SUCO.s / (SUCO.v / 1000))} cm²/L`,
      ]},
      { title: "NOVA EMBALAGEM", image: "assets/mat4_nova.jpg", fit: "cover", lines: [
        "Desafio: mesmo volume, menos material",
        `Cereal atual: ${fmt(CEREAL.v)} cm³ e ${fmt(CEREAL.s)} cm² de papelão`,
        `Nova caixa 15 × 15 × 16 cm: ${fmt(NOVA.v)} cm³ e ${fmt(NOVA.s)} cm²`,
        `Economia: ${fmt(CEREAL.s - NOVA.s)} cm² (${fmt((1 - NOVA.s / CEREAL.s) * 100, 1)}%) e menos resíduo`,
        "Quanto mais perto de um cubo, menor a área para o mesmo volume",
      ]},
    ],
  },
];

// Texto fixo no fim da conclusão (slide 10)
const END_FINAL = "Clima favorável + alimentação saudável + geometria bem aplicada = produzir, conservar e consumir melhor.";

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
  $("menu-info").textContent = CONFIG.info;

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

  setScene(page);

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

let sceneToken = 0;
function setScene(page) {
  const scene = $("scene");
  const label = $("scene-label");
  const token = ++sceneToken;
  scene.style.backgroundImage = "none";
  label.textContent = "";
  if (!page.image) { label.textContent = "SEM IMAGEM: " + page.title; return; }
  const img = new Image();
  img.onload = () => {
    if (token !== sceneToken) return;
    scene.style.backgroundImage = `url(${page.image})`;
    scene.style.backgroundSize = page.fit || "cover";
    scene.style.backgroundRepeat = "no-repeat";
  };
  img.onerror = () => { if (token === sceneToken) label.textContent = "FALTA: " + page.image; };
  img.src = page.image;
}

function hideLastLine() {
  const els = $("topic-lines").children;
  if (state.shown > 0) {
    state.shown--;
    els[state.shown].classList.remove("show");
  }
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
  if (state.shown > 0) {
    hideLastLine();                                   // desfaz uma linha por vez
  } else if (state.page > 0) {
    openTopic(state.topic, state.page - 1, true);     // página anterior, com tudo já visível
  } else {
    goMenu();
  }
}

/* ---- conclusion ---- */
function goEnd() {
  const body = $("end-body");
  body.innerHTML = "";
  const all = state.visited.size === 0;   // se nada foi visitado, mostra todos
  TOPICS.forEach((t, i) => {
    if (all || state.visited.has(i)) body.innerHTML += `<h3>${t.name}</h3><p>${t.summary}</p>`;
  });
  body.innerHTML += `<h3>Conclusão integrada</h3><p>${END_FINAL}</p>`;
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

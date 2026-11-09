/* =====================================================
   EDITE AQUI: todo o conteúdo fica neste bloco
   ===================================================== */

const CONFIG = {
  title: "Geometria Espacial, Clima e Alimentação Saudável em SC",
  subtitle: "Equipe 5 — Geografia, Biologia e Matemática",
  info: "Derick Brum, Luiz Menjão, João Pedro  |  Projeto IFA",

  // true = mostra a área secreta do nariz (caixa vermelha tracejada). Coloque false antes de apresentar.
  debug: true,

};

// ---- EXEMPLO: troque pelas medidas (cm) das embalagens reais de vocês ----
const fmt = (n, d = 0) => n.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
const box = (a, b, c) => ({ v: a * b * c, s: 2 * (a * b + a * c + b * c) }); // volume e área de superfície
const CEREAL = box(20, 6, 30);     // caixa de cereal 20 x 6 x 30
const SUCO   = box(6, 9, 18.5);    // caixa de suco 6 x 9 x 18,5
const NOVA   = box(15, 15, 16);    // nova embalagem (mesmo volume do cereal)

/* Cada tópico = um botão do menu. Cada página = título + texto + (opcional) imagem no oval.
   text:  lista de parágrafos, todos aparecem de uma vez.
          Use **assim** para destacar em azul. Começar com "> " cria uma caixa de fórmula.
   image: arquivo dentro de assets/. Se não tiver imagem (ou o arquivo não existir), a página
          vira só texto, em largura total.
   fit:   "contain" = imagem inteira, sem cortar (diagramas)  |  "cover" = preenche o oval (fotos) */
const TOPICS = [
  {
    code: "GEO", name: "Geografia",
    summary: "O clima subtropical de SC, com variação de altitude, define o que cada região consegue plantar.",
    pages: [
      { title: "CLIMA DE SANTA CATARINA", image: "assets/geo1.jpg", fit: "cover", text: [
        "Santa Catarina tem clima **subtropical** em quase todo o estado: verões quentes no litoral e invernos bem definidos.",
        "A **altitude** muda tudo: o litoral é mais quente, enquanto a Serra passa de 1.000 m e fica bem mais fria.",
        "As **chuvas** são bem distribuídas ao longo do ano. Na Serra, as **geadas** são frequentes e a **neve** aparece de vez em quando, em cidades como São Joaquim e Urupema.",
      ]},
      { title: "CULTIVOS POR REGIÃO", image: "assets/geo2_tabela.svg", fit: "contain", text: [
        "O clima de cada região define o que ela consegue plantar.",
        "Na **Serra**, o frio favorece a **maçã**. No **Litoral e nos Vales**, o calor e a água permitem o **arroz** irrigado.",
        "No **Oeste** predominam o **milho** e a **soja**, e no **Planalto Norte** se destaca o **fumo**.",
      ]},
    ],
  },
  {
    code: "BIO", name: "Biologia",
    summary: "Alimentos saudáveis fortalecem o corpo, e a embalagem certa protege nutrientes e evita desperdício.",
    pages: [
      { title: "ALIMENTAÇÃO SAUDÁVEL", text: [
        "O que Santa Catarina produz chega à mesa e ajuda a montar uma dieta **variada e equilibrada**: frutas como a maçã, cereais como o arroz e o milho e leguminosas como a soja.",
        "As frutas fornecem **fibras e vitaminas**, os cereais dão a **energia** para o corpo e a soja traz **proteínas**. Vitaminas e minerais ajudam a fortalecer a **imunidade**.",
        "Alimentação equilibrada, junto com **atividade física** regular, melhora a disposição e a **qualidade de vida**.",
      ]},
      { title: "SEGURANÇA ALIMENTAR", text: [
        "Depois de colhido, o alimento precisa **chegar bom** ao consumidor. É aí que a embalagem entra.",
        "Ela **protege os nutrientes** da luz, do ar e da umidade e **impede a contaminação** por bactérias e fungos.",
        "Com isso, o alimento dura mais, o **desperdício diminui** e o rótulo ainda informa os ingredientes e a validade.",
      ]},
    ],
  },
  {
    code: "MAT", name: "Matemática",
    summary: "Volume e área de superfície mostram como criar embalagens que gastam menos material.",
    pages: [
      { title: "PRISMAS E PIRÂMIDES", image: "assets/mat1_solidos.svg", fit: "contain", text: [
        "O **prisma** tem duas bases paralelas e iguais; as faces laterais são paralelogramos (retângulos, no prisma reto).",
        "A **pirâmide** tem uma base e faces laterais triangulares que se encontram em um ponto: o **vértice**.",
        "Os elementos são **faces, vértices, arestas, altura (h) e bases**. Em todo poliedro convexo vale a **relação de Euler**: V − A + F = 2.",
      ]},
      { title: "FÓRMULAS E RELAÇÕES", text: [
        "O volume mede o espaço que o sólido ocupa. Em prismas e pirâmides, ele depende da **área da base (Ab)** e da **altura (h)**.",
        "> Prisma:  V = Ab × h",
        "> Pirâmide:  V = (Ab × h) / 3",
        "Ou seja, uma pirâmide ocupa **1/3** do volume de um prisma com a mesma base e a mesma altura.",
        "Capacidade: **1 L = 1 dm³ = 1000 cm³**.",
      ]},
      { title: "EMBALAGENS REAIS", image: "assets/mat3_embalagens.jpg", fit: "cover", text: [
        "Duas embalagens de alimentos, ambas **prismas retangulares**:",
        `**Cereal** (20 × 6 × 30 cm): ${fmt(CEREAL.v)} cm³ (${fmt(CEREAL.v / 1000, 1)} L) e ${fmt(CEREAL.s)} cm² de área.`,
        `**Suco** (6 × 9 × 18,5 cm): ${fmt(SUCO.v)} cm³ (${fmt(SUCO.v / 1000, 1)} L) e ${fmt(SUCO.s)} cm² de área.`,
        `Por litro, o cereal gasta **${fmt(CEREAL.s / (CEREAL.v / 1000))} cm²** de embalagem e o suco **${fmt(SUCO.s / (SUCO.v / 1000))} cm²**. Quanto menor, mais eficiente é a embalagem.`,
      ]},
      { title: "NOVA EMBALAGEM", text: [
        "**Desafio:** guardar o mesmo volume gastando menos material.",
        `A caixa de cereal tem ${fmt(CEREAL.v)} cm³ e usa ${fmt(CEREAL.s)} cm² de papelão. Uma caixa de **15 × 15 × 16 cm** guarda os mesmos ${fmt(NOVA.v)} cm³ usando só ${fmt(NOVA.s)} cm².`,
        `> Economia: ${fmt(CEREAL.s - NOVA.s)} cm² (${fmt((1 - NOVA.s / CEREAL.s) * 100, 1)}%)`,
        "Quanto mais **parecida com um cubo** a caixa, menor a área para o mesmo volume, o que significa menos resíduo e menos custo.",
      ]},
    ],
  },
];

// Texto fixo no fim da conclusão (slide 10)
const END_FINAL = "Clima favorável + alimentação saudável + geometria bem aplicada = produzir, conservar e consumir melhor.";

/* =====================================================
   LÓGICA (não precisa mexer aqui para mudar o conteúdo)
   ===================================================== */

const $ = (id) => document.getElementById(id);

const state = {
  screen: "menu",     // "menu" | "topic" | "end"
  topic: 0,
  page: 0,
  visited: new Set(), // tópicos que já foram abertos
};

/* ---- ajusta o palco 1280x720 ao tamanho da janela ---- */
function fit() {
  const s = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
  $("stage").style.transform = `translate(-50%, -50%) scale(${s})`;
}
window.addEventListener("resize", fit);
fit();

/* ---- telas ---- */
function showScreen(name) {
  state.screen = name;
  for (const id of ["menu", "topic", "end"]) {
    $("screen-" + id).classList.toggle("active", id === name);
  }
}

/* ---- olho que segue o botão ----
   Medidas em pixels da imagem original (2153 x 1865). Se mudar a arte, ajuste aqui. */
const EYE = {
  W: 2153,
  rest: [742, 944],             // centro da íris como foi desenhada (posição de repouso)
  center: [795, 951],           // centro da área onde a íris pode andar
  range: [60, 21],              // quanto pode andar (x, y) a partir do centro
  look: [796, 971],             // ponto do olho usado para calcular a direção do olhar
};

function lookAt(el) {
  const char = $("menu-char");
  const iris = $("iris");
  if (!el) {
    iris.style.transform = "translate(0px, 0px)";
    char.classList.remove("look");
    return;
  }
  const cr = char.getBoundingClientRect();
  const k = cr.width / EYE.W;                         // pixels de tela por pixel da imagem
  const ex = cr.left + EYE.look[0] * k;
  const ey = cr.top + EYE.look[1] * k;
  const br = el.getBoundingClientRect();
  let dx = br.left + br.width / 2 - ex;
  let dy = br.top + br.height / 2 - ey;
  const d = Math.hypot(dx, dy) || 1;
  dx /= d;
  dy = Math.max(-1, Math.min(1, (dy / d) * 2.2));     // exagera o vertical (o olho é pequeno)
  const tx = EYE.center[0] + dx * EYE.range[0];
  const ty = EYE.center[1] + dy * EYE.range[1];
  const lay = char.offsetWidth / EYE.W;               // pixels de layout por pixel da imagem
  iris.style.transform = `translate(${(tx - EYE.rest[0]) * lay}px, ${(ty - EYE.rest[1]) * lay}px)`;
  char.classList.add("look");
}

/* ---- menu ---- */
function buildMenu() {
  $("menu-title").textContent = CONFIG.title;
  $("menu-subtitle").textContent = CONFIG.subtitle;
  $("menu-info").textContent = CONFIG.info;

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
    const slant = item.querySelector(".slant");
    item.addEventListener("mouseenter", () => lookAt(slant));
    item.addEventListener("mouseleave", () => lookAt(null));
    item.addEventListener("click", () => { lookAt(null); openTopic(i, 0); });
    box.appendChild(item);
  });
}

function goMenu() {
  state.visited.forEach((i) => $("menu-item-" + i).classList.add("visited"));
  showScreen("menu");
}

/* ---- páginas de conteúdo ---- */
function replay(el) {            // reinicia a animação de entrada de um elemento
  el.style.animation = "none";
  void el.offsetWidth;
  el.style.animation = "";
}

const md = (s) => s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

function openTopic(topicIdx, pageIdx) {
  state.topic = topicIdx;
  state.page = pageIdx;
  state.visited.add(topicIdx);

  const topic = TOPICS[topicIdx];
  const page = topic.pages[pageIdx];

  $("topic-title").textContent = page.title;
  $("topic-bigcode").textContent = topic.code;
  $("topic-tag").textContent = `${topic.code}  ${pageIdx + 1}/${topic.pages.length}`;
  $("topic-body").innerHTML = page.text
    .map((p) => (p.startsWith("> ") ? `<div class="formula">${md(p.slice(2))}</div>` : `<p>${md(p)}</p>`))
    .join("");

  setScene(page);
  showScreen("topic");
  fitText();

  ["topic-title", "topic-divider", "topic-vline", "topic-body", "topic-band"].forEach((id) => replay($(id)));
  replay($("screen-topic").querySelector(".oval"));
}

// com imagem: oval + texto estreito. Sem imagem (ou arquivo faltando): página só de texto.
let sceneToken = 0;
function setScene(page) {
  const screen = $("screen-topic");
  const scene = $("scene");
  const note = $("img-note");
  const token = ++sceneToken;
  note.textContent = "";
  scene.style.backgroundImage = "none";
  scene.classList.toggle("safe", page.fit === "contain");
  screen.classList.toggle("full", !page.image);
  if (!page.image) return;
  const img = new Image();
  img.onload = () => {
    if (token !== sceneToken) return;
    scene.style.backgroundImage = `url(${page.image})`;
    scene.style.backgroundSize = page.fit || "cover";
    scene.style.backgroundRepeat = "no-repeat";
  };
  img.onerror = () => {
    if (token !== sceneToken) return;
    screen.classList.add("full");
    note.textContent = "FALTA: " + page.image;   // só aparece com debug: true
    fitText();
  };
  img.src = page.image;
}

// diminui a fonte se o texto não couber na página
function fitText() {
  const body = $("topic-body");
  const full = $("screen-topic").classList.contains("full");
  const max = full ? 480 : 460;
  let size = full ? 32 : 28;
  body.style.fontSize = size + "px";
  while (body.offsetHeight > max && size > 18) {
    size -= 1;
    body.style.fontSize = size + "px";
  }
}
if (document.fonts) document.fonts.ready.then(() => { if (state.screen === "topic") fitText(); });

function next() {
  if (state.screen !== "topic") return;
  if (state.page < TOPICS[state.topic].pages.length - 1) openTopic(state.topic, state.page + 1);
  else goMenu();
}

function prev() {
  if (state.screen !== "topic") return;
  if (state.page > 0) openTopic(state.topic, state.page - 1);
  else goMenu();
}

/* ---- conclusão ---- */
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

/* ---- transição: cortina inclinada entre telas/páginas ---- */
let busy = false;
function withWipe(fn) {
  if (busy) return;
  busy = true;
  const w = $("wipe");
  w.className = "in";
  setTimeout(() => {
    fn();
    w.className = "out";
    setTimeout(() => { w.className = ""; busy = false; }, 420);
  }, 380);
}
{
  const _open = openTopic, _menu = goMenu, _end = goEnd;
  openTopic = (...a) => withWipe(() => _open(...a));
  goMenu = () => withWipe(() => _menu());
  goEnd = () => withWipe(() => _end());
}

/* ---- eventos ---- */
$("btn-next").addEventListener("click", next);
$("btn-prev").addEventListener("click", prev);
$("btn-menu").addEventListener("click", goMenu);
$("btn-end-menu").addEventListener("click", goMenu);
$("nose").addEventListener("click", goEnd);
$("nose").addEventListener("mouseenter", () => $("menu-char").classList.add("annoyed"));
$("nose").addEventListener("mouseleave", () => $("menu-char").classList.remove("annoyed"));

// clicar em qualquer lugar da página (fora dos botões) também avança
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

/* ---- início ---- */
if (CONFIG.debug) document.body.classList.add("debug");
buildMenu();
showScreen("menu");

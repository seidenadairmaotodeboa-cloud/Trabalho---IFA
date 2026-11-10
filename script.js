/* =====================================================
   EDITE AQUI: todo o conteúdo fica neste bloco
   ===================================================== */

const CONFIG = {
  title: "Prismas e Pirâmides: Área, Volume e Capacidade",
  subtitle: "Embalagens de alimentos: capacidade e eficiência geométrica",
  info: "Equipe 5: Derick Brum, Luiz Menjão, João Pedro",

  // true = mostra a área secreta do nariz (caixa vermelha tracejada). Coloque false antes de apresentar.
  debug: false,

  // Tema inicial (brilho/cor geral): "normal", "suave" ou "noite". Durante a apresentação, a tecla T troca.
  theme: "suave",

};

/* Temas = filtros aplicados na tela inteira. Para criar outro, copie uma linha e mexa nos números:
   brightness (brilho), saturate (intensidade das cores), sepia (tom quente, menos luz azul), hue-rotate (gira as cores). */
const THEMES = {
  normal: { nome: "Normal", filter: "none" },
  suave:  { nome: "Suave",  filter: "brightness(.82) saturate(.88)" },
  noite:  { nome: "Noite",  filter: "brightness(.62) saturate(.75) sepia(.22)" },
};

// ---- EXEMPLO: troque pelas medidas (cm) das embalagens reais de vocês ----
const fmt = (n, d = 0) => n.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
const box = (a, b, c) => ({ v: a * b * c, s: 2 * (a * b + a * c + b * c) }); // volume e área de superfície
const CEREAL = box(20, 6, 30);     // caixa de cereal 20 x 6 x 30
const SUCO   = box(6, 9, 18.5);    // caixa de suco 6 x 9 x 18,5
const NOVA   = box(15, 15, 16);    // nova embalagem (mesmo volume do cereal)

/* Cada tópico = um botão do menu. Cada página = título + texto + (opcional) imagem no oval.
   text:   lista de parágrafos, todos aparecem de uma vez.
           Use **assim** para destacar em azul. Começar com "> " cria uma caixa de fórmula.
   table:  (opcional) tabela feita em HTML: { head: ["Col 1", "Col 2"], rows: [["a", "b"], ...] }
   image:  um arquivo dentro de assets/  |  images: duas ou mais fotos, uma em cima da outra no oval
           Sem imagem (ou arquivo faltando), a página vira só texto, em largura total.
   fit:    "cover" = preenche o oval (fotos)
           "contain" = imagem inteira no oval todo (use em desenhos pensados para o oval; os cantos podem ser cortados)
           "safe" = imagem inteira num retângulo menor, que nunca é cortado */
const TOPICS = [
  {
    code: "GEO", name: "Geografia",
    pages: [
      { title: "CLIMA DE SANTA CATARINA", images: ["assets/geo1_serra.jpg", "assets/geo1_litoral.jpg"], text: [
        "O clima predominante é o **subtropical**: verões geralmente quentes, invernos frios (principalmente nas regiões serranas) e **chuvas distribuídas** durante o ano.",
        "As temperaturas variam com a **altitude** e a localização: o **litoral** costuma ter invernos mais amenos, enquanto a **Serra Catarinense** tem as temperaturas mais baixas.",
        "Nas áreas mais altas, como em São Joaquim e Urupema, há possibilidade de **geadas** e até de **neve**.",
      ]},
      { title: "AGRICULTURA E PLANTIO", text: [
        "A agricultura é muito importante para a economia catarinense. Entre os principais produtos cultivados estão:",
        "**Milho:** usado na alimentação animal e na produção de alimentos.",
        "**Soja:** usada na produção de óleo e de ração.",
        "**Arroz:** cultivado principalmente em várzeas e terrenos irrigados.",
        "**Maçã:** muito produzida na região de São Joaquim e Fraiburgo.",
        "**Fumo:** importante em algumas regiões do estado.",
        "**Feijão:** cultivado em diferentes municípios.",
      ]},
      { title: "AGRICULTURA EM CADA REGIÃO", text: [
        "Cada região planta o que o seu clima e o seu solo favorecem.",
      ], table: {
        head: ["Região", "Principais cultivos"],
        rows: [
          ["Oeste", "Milho, soja e feijão"],
          ["Meio-Oeste", "Maçã, milho e soja"],
          ["Serra Catarinense", "Maçã, uva e hortaliças"],
          ["Litoral", "Banana, arroz e mandioca"],
          ["Vale do Itajaí", "Arroz, banana e hortaliças"],
          ["Planalto Norte", "Fumo, milho e soja"],
        ],
      }},
      { title: "O CLIMA E O PLANTIO", text: [
        "O clima influencia diretamente o crescimento das plantas:",
        "**Chuva:** fornece água para as plantações.",
        "**Frio:** favorece algumas frutas, como a maçã.",
        "**Calor:** favorece culturas adaptadas a temperaturas elevadas.",
        "**Geadas:** podem prejudicar plantações mais sensíveis.",
        "Por isso, a **Epagri**, empresa de pesquisa agropecuária de SC, usa estudos de clima e solo para orientar os agricultores sobre os melhores locais e períodos de plantio.",
      ]},
      { title: "SC EM DESTAQUE", text: [
        "Santa Catarina tem grande destaque nacional na produção de **maçãs, cebolas, arroz e fumo**.",
        "A agricultura também tem grande importância **econômica e social** para o estado.",
        "**Resumindo:** o clima subtropical, com verões quentes e invernos frios, favorece o cultivo de diversos produtos, como milho, soja, arroz, maçã, banana e cebola.",
      ]},
    ],
  },
  {
    code: "BIO", name: "Biologia",
    pages: [
      { title: "ALIMENTAÇÃO SAUDÁVEL", text: [
        "O que Santa Catarina produz chega à mesa e ajuda a montar uma dieta **variada e equilibrada**: frutas como a maçã, cereais como o arroz e o milho e leguminosas como o feijão e a soja.",
        "Esses alimentos fornecem **fibras e vitaminas**, a **energia** para o corpo e **proteínas**. Vitaminas e minerais ajudam a fortalecer a **imunidade**.",
        "Comer bem é cuidar da **saúde** todos os dias, com variedade e sem exageros.",
      ]},
      { title: "NUTRIENTES E O CORPO", text: [
        "Cada nutriente tem uma função, e os alimentos de Santa Catarina trazem vários deles:",
      ], table: {
        head: ["Nutriente", "Função no corpo", "Onde encontrar"],
        rows: [
          ["Carboidratos", "Dão energia", "Arroz, milho, mandioca"],
          ["Proteínas", "Constroem tecidos", "Feijão, soja"],
          ["Vitaminas e minerais", "Reforçam a imunidade", "Maçã, banana, hortaliças"],
          ["Fibras", "Ajudam a digestão", "Maçã, feijão, hortaliças"],
        ],
      }},
      { title: "ATIVIDADE FÍSICA E BEM-ESTAR", text: [
        "A **atividade física** regular fortalece o **coração, os músculos e os ossos** e ajuda a melhorar o **sono** e o **humor**.",
        "A **alimentação equilibrada** dá ao corpo a energia para se movimentar e os nutrientes para se recuperar. Beber **água** também faz parte.",
        "Juntas, alimentação e atividade física promovem **saúde, disposição e bem-estar**: a **qualidade de vida**.",
      ]},
      { title: "SEGURANÇA ALIMENTAR", text: [
        "Depois de colhido, o alimento precisa **chegar bom** ao consumidor. É aí que a embalagem entra.",
        "Ela **protege os nutrientes** da luz, do ar e da umidade e **impede a contaminação** por bactérias e fungos.",
        "Com a **conservação** correta, o alimento dura mais, o **desperdício diminui** e o rótulo ainda informa os ingredientes e a validade.",
        "Uma boa embalagem protege o alimento **e** gasta pouco material: é isso que a Matemática vai calcular.",
      ]},
    ],
  },
  {
    code: "MAT", name: "Matemática",
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
      { title: "O FATOR 1/3", demo: "pour", text: [
        "Uma pirâmide e um prisma com a **mesma base** e a **mesma altura**.",
        "Ao despejar a pirâmide cheia no prisma vazio, o nível sobe só **1/3**.",
        "São necessárias **3 pirâmides** para encher o prisma:",
        "> V = (Ab × h) / 3",
      ]},
      { title: "EXEMPLO RESOLVIDO", text: [
        "Um prisma e uma pirâmide com a mesma base quadrada de **4 cm × 4 cm** e a mesma altura de **6 cm**.",
        "Área da base: Ab = 4 × 4 = **16 cm²**",
        "> Prisma:  V = 16 × 6 = 96 cm³",
        "> Pirâmide:  V = (16 × 6) / 3 = 32 cm³",
        "A pirâmide tem **1/3** do volume do prisma (96 ÷ 3 = 32). Em capacidade: 96 cm³ = **0,096 L** e 32 cm³ = **0,032 L**.",
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

// Conclusão (aparece ao clicar no nariz): um título e um texto só. Mesmas regras de formatação das páginas.
const END_TEXT = [
  "O **clima** de Santa Catarina, com variação de altitude, define o que cada região cultiva e coloca na mesa uma grande variedade de **alimentos saudáveis**.",
  "Esses alimentos fortalecem o corpo e a qualidade de vida, mas só chegam bem ao consumidor quando estão **bem embalados**.",
  "É aí que entra a **Matemática**: com volume e área de superfície, dá para guardar a **mesma quantidade** de alimento usando **menos material**.",
  "> Produzir, conservar e consumir melhor.",
];

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

/* ---- tema (brilho e cor geral) ---- */
let toastTimer;
function setTheme(name, aviso = true) {
  if (!THEMES[name]) name = "suave";
  state.theme = name;
  $("stage").style.filter = THEMES[name].filter;
  try { localStorage.setItem("tema", name); } catch (e) {}
  if (aviso) {
    const t = $("toast");
    t.textContent = `Tema: ${THEMES[name].nome}  (T troca)`;
    t.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("on"), 1500);
  }
}
function nextTheme() {
  const names = Object.keys(THEMES);
  setTheme(names[(names.indexOf(state.theme) + 1) % names.length]);
}

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
  center: [795, 957],           // centro da área onde a íris pode andar
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
    item.dataset.topic = t.code;
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
const blockHtml = (p) => (p.startsWith("> ") ? `<div class="formula">${md(p.slice(2))}</div>` : `<p>${md(p)}</p>`);

function openTopic(topicIdx, pageIdx) {
  state.topic = topicIdx;
  state.page = pageIdx;
  state.visited.add(topicIdx);

  const topic = TOPICS[topicIdx];
  const page = topic.pages[pageIdx];
  $("screen-topic").dataset.topic = topic.code;

  $("topic-title").textContent = page.title;
  $("topic-bigcode").textContent = topic.code;
  $("topic-tag").textContent = `${topic.code}  ${pageIdx + 1}/${topic.pages.length}`;
  const tabela = page.table
    ? `<table class="tabela"><thead><tr>${page.table.head.map((t) => `<th>${t}</th>`).join("")}</tr></thead><tbody>` +
      page.table.rows.map((r) => `<tr>${r.map((c) => `<td>${md(c)}</td>`).join("")}</tr>`).join("") +
      `</tbody></table>`
    : "";
  $("topic-body").innerHTML =
    page.text.map((p) => (p.startsWith("> ") ? `<div class="formula">${md(p.slice(2))}</div>` : `<p>${md(p)}</p>`)).join("") + tabela;

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
  const list = page.images || (page.image ? [page.image] : []);
  note.textContent = "";
  scene.innerHTML = "";
  scene.style.backgroundImage = "none";
  scene.classList.toggle("multi", list.length > 1);
  scene.classList.toggle("safe", page.fit === "safe");
  scene.classList.toggle("demo", !!page.demo);
  screen.classList.toggle("full", list.length === 0 && !page.demo);
  if (page.demo) { scene.innerHTML = DEMO_POUR; startDemo(token); return; }
  list.forEach((src) => {
    if (list.length > 1) {              // várias fotos: uma em cima da outra, dividindo o oval
      const d = document.createElement("div");
      d.className = "pic";
      d.style.backgroundImage = `url(${src})`;
      scene.appendChild(d);
    }
    const img = new Image();
    img.onload = () => {
      if (token !== sceneToken || list.length > 1) return;
      scene.style.backgroundImage = `url(${src})`;
      scene.style.backgroundSize = page.fit === "safe" ? "contain" : (page.fit || "cover");
      scene.style.backgroundRepeat = "no-repeat";
    };
    img.onerror = () => {
      if (token !== sceneToken) return;
      screen.classList.add("full");
      note.textContent += "FALTA: " + src + "  ";   // só aparece com debug: true
      fitText();
    };
    img.src = src;
  });
}

// diminui a fonte se o texto não couber
function fitBox(el, max, size) {
  el.style.fontSize = size + "px";
  while (el.offsetHeight > max && size > 18) {
    size -= 1;
    el.style.fontSize = size + "px";
  }
}
function fitText() {
  const full = $("screen-topic").classList.contains("full");
  fitBox($("topic-body"), full ? 480 : 460, full ? 32 : 28);
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

/* ---- demo: a pirâmide enche 1/3 do prisma (3 despejos enchem o prisma) ---- */
const DEMO_POUR = `<svg viewBox="0 0 540 700" font-family="Arial" text-anchor="middle" fill="#111">
<defs><clipPath id="dem-clip"><rect x="170" y="380" width="200" height="180"/></clipPath></defs>
<text x="270" y="72" font-size="20">mesma base · mesma altura</text>
<rect id="dem-water" x="170" y="380" width="200" height="180" fill="#4aa8f0" clip-path="url(#dem-clip)"
  style="transform-box:fill-box;transform-origin:bottom;transform:scaleY(0);transition:transform .9s ease-in-out"/>
<g stroke="#999" stroke-width="2" stroke-dasharray="5 5"><path d="M170 500 H370 M170 440 H370"/></g>
<g font-size="18" fill="#777" text-anchor="start"><text x="378" y="505">1/3</text><text x="378" y="445">2/3</text><text x="378" y="385">3/3</text></g>
<path d="M170 380 V560 H370 V380" fill="none" stroke="#111" stroke-width="5" stroke-linejoin="round"/>
<g id="dem-pyr" style="transform-box:fill-box;transform-origin:center;transition:transform .7s ease-in-out">
<polygon id="dem-fill" points="170,290 370,290 270,110" fill="#4aa8f0" stroke="#111" stroke-width="4" stroke-linejoin="round" style="transition:fill-opacity .6s"/></g>
<text id="dem-label" x="270" y="618" font-size="26" font-weight="bold"></text>
</svg>`;

function startDemo(token) {
  const water = $("dem-water"), pyr = $("dem-pyr"), fill = $("dem-fill"), label = $("dem-label");
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  (async () => {
    water.style.transform = "scaleY(0)";
    pyr.style.transform = "";
    fill.style.fillOpacity = 1;
    label.textContent = "Pirâmide cheia → prisma vazio";
    await wait(1300);
    for (let k = 1; k <= 3; k++) {
      if (token !== sceneToken) return;
      pyr.style.transform = "translateY(170px) rotate(180deg)";
      await wait(800);
      if (token !== sceneToken) return;
      water.style.transform = `scaleY(${k / 3})`;
      fill.style.fillOpacity = 0.12;
      label.textContent = `Despejo ${k}: ${k}/3 do prisma`;
      await wait(1300);
      pyr.style.transform = "";
      await wait(700);
      fill.style.fillOpacity = 1;
      await wait(500);
    }
    if (token === sceneToken) label.textContent = "3 pirâmides enchem 1 prisma!";
  })();
}
const replayDemo = () => { if (state.screen === "topic" && $("scene").classList.contains("demo")) startDemo(++sceneToken); };

/* ---- conclusão ---- */
const SOURCES = [
  "**Clima e agricultura de SC:** ndmais.com.br",
];

let endView = "end";
function showEnd(view) {
  endView = view;
  const src = view === "src";
  $("end-title").textContent = src ? "FONTES" : "CONCLUSÃO";
  $("end-body").innerHTML = (src ? SOURCES : END_TEXT).map(blockHtml).join("");
  $("btn-end-src").textContent = src ? "CONCLUSÃO" : "FONTES";
  fitBox($("end-body"), 480, 32);
  replay($("end-body"));
}
function goEnd() {
  showScreen("end");
  showEnd("end");
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
$("btn-end-src").addEventListener("click", () => showEnd(endView === "src" ? "end" : "src"));
$("scene").addEventListener("click", replayDemo);
$("nose").addEventListener("click", goEnd);
$("nose").addEventListener("mouseenter", () => $("menu-char").classList.add("annoyed"));
$("nose").addEventListener("mouseleave", () => $("menu-char").classList.remove("annoyed"));

// clicar em qualquer lugar da página (fora dos botões) também avança
$("screen-topic").addEventListener("click", (e) => {
  if (!e.target.closest("button, #scene.demo")) next();
});

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "PageDown":   // passador de slides
    case "ArrowRight":
    case " ":
    case "Enter":
      e.preventDefault();
      next();
      break;
    case "PageUp":
    case "ArrowLeft":
      prev();
      break;
    case "t":
    case "T":
      nextTheme();
      break;
    case "f":
    case "F":
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen();
      break;
    case "r":
    case "R":
      replayDemo();
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

/* ---- pré-carrega as imagens para nunca aparecerem atrasadas ---- */
TOPICS.forEach((t) => t.pages.forEach((p) => (p.images || (p.image ? [p.image] : [])).forEach((s) => { new Image().src = s; })));

/* ---- esconde o cursor depois de 3 s parado ---- */
let idleTimer;
document.addEventListener("mousemove", () => {
  document.body.classList.remove("idle");
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => document.body.classList.add("idle"), 3000);
});

/* ---- início ---- */
if (CONFIG.debug) document.body.classList.add("debug");
let savedTheme = null;
try { savedTheme = localStorage.getItem("tema"); } catch (e) {}
setTheme(savedTheme || CONFIG.theme, false);
buildMenu();
showScreen("menu");

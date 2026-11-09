# Apresentação

HTML/CSS/JS puro, sem instalação e sem dependências.

## Arquivos
- `index.html`: estrutura das telas (quase nunca precisa mexer)
- `style.css`: visual, posições e animações (a área do nariz é `#nose`)
- `script.js`: TODO o conteúdo fica no começo (título, tópicos, páginas, linhas, resumos)
- `assets/`: imagens

## Controles
- Seta direita / Espaço / Enter / clique: próxima página
- Seta esquerda: página anterior
- Esc: volta ao menu
- Clique no nariz (ou tecla `C`): tela de conclusão
- `1`, `2`, `3` no menu: abre o tópico

## Escrever o conteúdo
Tudo no `script.js`: `TOPICS` (páginas) e `END_TEXT` (conclusão). Cada página tem `title`, `text` (parágrafos que aparecem juntos) e, se quiser, `image`.
- `**assim**` destaca em azul
- parágrafo começando com `> ` vira caixa de fórmula
- `images: ["a.jpg", "b.jpg"]` coloca duas fotos, uma em cima da outra, no oval (usado no clima: Serra x Litoral)
- sem `image` (ou arquivo faltando) a página vira só texto, em largura total
- `table: { head: [...], rows: [[...], ...] }` cria uma tabela em HTML (exemplo: página de cultivos)

## Rodar no computador
Abra o `index.html` no navegador.

## Colocar online (GitHub Pages)
1. Envie estes arquivos para a raiz do repositório.
2. Settings > Pages > Deploy from a branch > `main` / `(root)`.
3. Abra o link que o GitHub mostrar.

Antes de apresentar: troque `debug: true` por `debug: false` no `script.js`.

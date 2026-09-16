# MESTRE TV — Loja estática

Versão reduzida para GitHub + Cloudflare Pages + V8 Loader + Worker/KV.

## Arquivos
- `index.html`
- `css/style.css`
- `js/app.js`
- `README.md`

## V8 Loader
O HTML já usa `data-v8-project-id="mestre-tv"` e carrega `js/v8-loader.js` com `data-project-id="mestre-tv"`.
O arquivo do Loader não foi alterado nem recriado: coloque a versão oficial que você já utiliza em `js/v8-loader.js`.

O app aceita, quando o Loader fornecer:
`window.V8_API_URL`, `window.V8_CATALOG_URL`, `window.V8_STORE_TOKEN` e `window.V8_WHATSAPP`.

Sem endpoint V8 disponível, o catálogo local de fallback mantém a loja funcional.

## Removido
React, Vite, TypeScript, npm/package.json, componentes duplicados, painel admin local, chamadas API duplicadas, `.env`, arquivos ZIP internos e código não utilizado.

Sem build: publique a pasta diretamente no Cloudflare Pages.

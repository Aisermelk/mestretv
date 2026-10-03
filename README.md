# MESTRE TV — loja ligada ao V8 Admin Universal (etapa 1)

Loja estática (sem build): publique a pasta direto no Cloudflare Pages.

## Como colocar no ar
1. Faça o deploy do Worker e do painel (zip `v8adminuniversal-atualizacao-completa`).
2. No painel, crie o projeto **MESTRE TV** e copie o ID dele.
3. Em `index.html`, troque `ID_DO_PROJETO` pelo ID do projeto (está na última linha, no `<script>` do loader).
4. No painel › Catálogo › **Importar**, escolha `mestre-tv-catalogo.json` (cria categorias e os 8 produtos de exemplo, com variações). Depois troque fotos, preços e estoque pelos reais.
5. No painel › Loja › Configuração › **Exibição de preços**: defina parcelas e desconto no Pix.
6. No painel › projeto: preencha WhatsApp, Instagram, nome e descrição (aparecem sozinhos no topo, no rodapé e no botão flutuante).
7. Pagamentos: configure a InfiniteTag em Pagamentos › Configuração (usado na etapa 2).

## O que já funciona (etapa 1)
- Categorias, produtos, fotos, variações, preço "de/por", parcelas e Pix vêm do painel.
- Produto com variação abre o detalhe para escolher; cada variação é uma linha no carrinho.
- Esgotado fica bloqueado. Carrinho salvo no navegador.
- Finalizar abre o WhatsApp com o pedido. Preços e frete são confirmados no atendimento.

## Etapa 2 (próxima)
Pedido online criado no servidor (preço e estoque recalculados), frete por CEP, pagamento Pix/cartão e aba Pedidos no painel.

## Observações
- `js/v8-loader.js` é o loader universal (versão atual). Em outros sites, use o mesmo arquivo.
- O loader precisa vir antes do `app.js` no HTML (já está).
- Imagens são por URL (o painel ainda não tem upload).

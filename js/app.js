/* MESTRE TV — JS vanilla, sem framework */
(() => {
  "use strict";
  const FALLBACK = [{"id":"prod-tvbox-4k-pro","sku":"MTV-BX4K-PRO","name":"TV Box 4K Ultra HD Mestre Pro - Android 12","category":"tv-box","categoryLabel":"TV Box","price":299.9,"originalPrice":399.9,"installments":{"count":12,"value":29.99,"hasInterest":false},"pixDiscountPercentage":5,"rating":4.9,"reviewCount":148,"images":["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80"],"stock":24,"shortDescription":"Transforme qualquer televisor em uma central moderna de entretenimento com resolução 4K fluida e Wi-Fi Dual Band.","isFeatured":true,"isOffer":true,"variations":[{"id":"var-2-16","name":"2GB RAM + 16GB Armazenamento","price":299.9,"originalPrice":399.9,"sku":"MTV-BX4K-2-16","stock":14},{"id":"var-4-64","name":"4GB RAM + 64GB Armazenamento (Recomendado)","price":369.9,"originalPrice":479.9,"sku":"MTV-BX4K-4-64","stock":10}]},{"id":"prod-tvbox-8k-elite","sku":"MTV-BX8K-ELITE","name":"TV Box 8K Mestre Elite HDR - 4GB RAM + 64GB","category":"tv-box","categoryLabel":"TV Box","price":459.9,"originalPrice":599.9,"installments":{"count":12,"value":45.99,"hasInterest":false},"pixDiscountPercentage":5,"rating":5,"reviewCount":92,"images":["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"],"stock":18,"shortDescription":"Edição Premium para quem busca o ápice em velocidade gráfica, resposta instantânea e suporte a telas 8K.","isFeatured":true,"isOffer":false,"variations":[{"id":"var-elite-64","name":"4GB RAM + 64GB SSD EMMC","price":459.9,"originalPrice":599.9,"sku":"MTV-BX8K-4-64","stock":12},{"id":"var-elite-128","name":"4GB RAM + 128GB Armazenamento Pro","price":529.9,"originalPrice":669.9,"sku":"MTV-BX8K-4-128","stock":6}]},{"id":"prod-stick-streaming-4k","sku":"MTV-STK-4K","name":"Dispositivo Streaming Dongle Stick 4K Portátil","category":"streaming","categoryLabel":"Streaming","price":249.9,"originalPrice":329.9,"installments":{"count":12,"value":24.99,"hasInterest":false},"pixDiscountPercentage":5,"rating":4.8,"reviewCount":115,"images":["https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=80"],"stock":35,"shortDescription":"Design compacto tipo pendrive HDMI. Conecte direto atrás da sua TV e tenha acesso rápido aos seus conteúdos.","isFeatured":true,"isOffer":true,"variations":[]},{"id":"prod-controle-voz-airmouse","sku":"MTV-CTRL-VOICE","name":"Controle Remoto Inteligente Air Mouse com Comando de Voz","category":"controles","categoryLabel":"Controles","price":89.9,"originalPrice":129.9,"installments":{"count":6,"value":14.98,"hasInterest":false},"pixDiscountPercentage":5,"rating":4.9,"reviewCount":87,"images":["https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&auto=format&fit=crop&q=80"],"stock":50,"shortDescription":"Giroscópio 6 eixos, microfone integrado para buscas por voz e receptor USB 2.4GHz compatível com todas as marcas.","isFeatured":true,"isOffer":true,"variations":[]},{"id":"prod-cabo-hdmi-21-8k","sku":"MTV-CABO-HDMI21","name":"Cabo HDMI 2.1 Ultra High Speed 8K / 4K 120Hz Blindado 2m","category":"cabos","categoryLabel":"Cabos e Conexões","price":59.9,"originalPrice":89.9,"installments":{"count":3,"value":19.96,"hasInterest":false},"pixDiscountPercentage":5,"rating":4.9,"reviewCount":64,"images":["https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=800&auto=format&fit=crop&q=80"],"stock":80,"shortDescription":"Transmissão ultra veloz de 48 Gbps com conectores banhados a ouro 24k e malha trançada reforçada de alta durabilidade.","isFeatured":false,"isOffer":true,"variations":[{"id":"cabo-15m","name":"Comprimento 1.5 Metros","price":49.9,"originalPrice":75,"sku":"MTV-CABO-15M","stock":35},{"id":"cabo-20m","name":"Comprimento 2.0 Metros (Padrão)","price":59.9,"originalPrice":89.9,"sku":"MTV-CABO-20M","stock":45},{"id":"cabo-30m","name":"Comprimento 3.0 Metros Reforçado","price":79.9,"originalPrice":110,"sku":"MTV-CABO-30M","stock":20}]},{"id":"prod-mini-teclado-touchpad","sku":"MTV-MINI-KEYB","name":"Mini Teclado Sem Fio com Touchpad Iluminado LED RGB","category":"acessorios","categoryLabel":"Acessórios","price":69.9,"originalPrice":99.9,"installments":{"count":3,"value":23.3,"hasInterest":false},"pixDiscountPercentage":5,"rating":4.7,"reviewCount":78,"images":["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"],"stock":42,"shortDescription":"Facilite digitação de senhas e buscas em apps. Bateria recarregável e iluminação de fundo personalizável.","isFeatured":true,"isOffer":false,"variations":[]},{"id":"prod-adaptador-ethernet-usb","sku":"MTV-ADAPT-GIGA","name":"Adaptador de Rede RJ45 Gigabit Ethernet USB 3.0","category":"acessorios","categoryLabel":"Acessórios","price":79.9,"originalPrice":119.9,"installments":{"count":4,"value":19.97,"hasInterest":false},"pixDiscountPercentage":5,"rating":4.8,"reviewCount":39,"images":["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80"],"stock":28,"shortDescription":"Garanta 100% de estabilidade de sinal com conexão via cabo direto na sua TV Box ou dispositivo streaming.","isFeatured":false,"isOffer":true,"variations":[]},{"id":"prod-fonte-bivolt-5v","sku":"MTV-FONTE-5V2A","name":"Fonte de Alimentação Estabilizada Bivolt 5V 2A / 3A Pino Padrão","category":"acessorios","categoryLabel":"Acessórios","price":49.9,"originalPrice":69.9,"installments":{"count":2,"value":24.95,"hasInterest":false},"pixDiscountPercentage":5,"rating":4.9,"reviewCount":51,"images":["https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&auto=format&fit=crop&q=80"],"stock":65,"shortDescription":"Fonte de reposição reforçada com proteção contra sobretensão, curto-circuito e superaquecimento.","isFeatured":false,"isOffer":false,"variations":[]}];
  const state = { products: FALLBACK, category: "all", search: "", cart: loadCart() };
  const $ = s => document.querySelector(s);
  const money = n => new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(n)||0);
  const esc = s => String(s ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
  function loadCart(){try{return JSON.parse(localStorage.getItem("mestre_tv_cart"))||[]}catch{return[]}}
  function saveCart(){localStorage.setItem("mestre_tv_cart",JSON.stringify(state.cart))}
  function cfg(){return {api:window.V8_CATALOG_URL||window.V8_API_URL||"",token:window.V8_STORE_TOKEN||"",whatsapp:window.V8_WHATSAPP||""}}
  async function loadCatalog(){
    const c=cfg(), urls=[];
    if(c.api) urls.push(c.api.replace(/\/$/,"")+"/api/v8/products");
    for(const url of urls){try{const r=await fetch(url,{headers:c.token?{"X-V8-Store-Token":c.token}:{}});if(r.ok){const d=await r.json();if(Array.isArray(d)&&d.length){state.products=d;break}}}catch(e){console.warn("V8 catálogo:",e)}}
    renderCategories();renderProducts();updateCart();
  }
  function renderCategories(){
    const cats=[["all","TODOS"],["tv-box","TV BOX"],["streaming","STREAMING"],["acessorios","ACESSÓRIOS"],["controles","CONTROLES"],["cabos","CABOS E CONEXÕES"],["ofertas","OFERTAS"]];
    $("#categories").innerHTML=cats.map(([id,n])=>`<button class="${state.category===id?"active":""}" data-cat="${id}">${n}</button>`).join("");
  }
  function filtered(){const q=state.search.trim().toLowerCase();return state.products.filter(p=>(state.category==="all"||p.category===state.category||(state.category==="ofertas"&&p.isOffer))&&(!q||p.name.toLowerCase().includes(q)||(p.categoryLabel||"").toLowerCase().includes(q)))}
  function renderProducts(){
    const list=filtered();$("#resultCount").textContent=`${list.length} produto${list.length===1?"":"s"}`;
    $("#products").innerHTML=list.length?list.map(p=>{
      const v=p.variations?.[0],price=v?.price??p.price,old=v?.originalPrice??p.originalPrice;
      return `<article class="product"><img class="product-img" src="${esc(p.images?.[0]||"")}" alt="${esc(p.name)}" loading="lazy"><div class="product-body">
      ${p.isOffer?'<span class="tag">OFERTA</span>':""}<h3>${esc(p.name)}</h3><p class="desc">${esc(p.shortDescription||"")}</p>
      ${old?`<span class="old">${money(old)}</span>`:""}<div class="price">${money(price)}</div>
      ${p.installments?`<div class="install">${p.installments.count}x de ${money(p.installments.value)}${p.installments.hasInterest?"":" sem juros"}</div>`:""}
      <div class="product-actions"><button data-detail="${esc(p.id)}">Detalhes</button><button class="buy" data-add="${esc(p.id)}">Comprar</button></div></div></article>`
    }).join(""):`<div class="empty" style="grid-column:1/-1">Nenhum produto encontrado.</div>`;
  }
  function product(id){return state.products.find(p=>p.id===id)}
  function add(id){
    const p=product(id);if(!p)return;const v=p.variations?.[0],key=p.id+(v?.id||""),item=state.cart.find(i=>i.key===key);
    if(item)item.qty++;else state.cart.push({key,id:p.id,variationId:v?.id||"",qty:1});saveCart();updateCart();openCart();
  }
  function updateQty(key,delta){const i=state.cart.find(x=>x.key===key);if(!i)return;i.qty+=delta;if(i.qty<1)state.cart=state.cart.filter(x=>x!==i);saveCart();updateCart()}
  function cartDetails(){return state.cart.map(i=>{const p=product(i.id),v=p?.variations?.find(x=>x.id===i.variationId);return{i,p,v,price:v?.price??p?.price}})}
  function updateCart(){
    const items=cartDetails().filter(x=>x.p),total=items.reduce((s,x)=>s+x.price*x.i.qty,0);
    $("#cartCount").textContent=state.cart.reduce((s,i)=>s+i.qty,0);$("#cartTotal").textContent=money(total);
    $("#cartItems").innerHTML=items.length?items.map(x=>`<div class="cart-item"><img src="${esc(x.p.images?.[0]||"")}" alt=""><div><h4>${esc(x.p.name)}</h4><p>${money(x.price)} · ${x.i.qty} un.</p><div class="qty"><button data-qty="${x.i.key}" data-d="-1">−</button><span>${x.i.qty}</span><button data-qty="${x.i.key}" data-d="1">+</button></div></div><strong>${money(x.price*x.i.qty)}</strong></div>`).join(""):`<div class="empty">Seu carrinho está vazio.</div>`;
  }
  function openCart(){$("#overlay").hidden=false;$("#cartDrawer").hidden=false}
  function closeCart(){$("#overlay").hidden=true;$("#cartDrawer").hidden=true}
  function openDetail(id){
    const p=product(id);if(!p)return;const v=p.variations?.[0],price=v?.price??p.price;
    $("#productDetail").innerHTML=`<div class="detail"><img src="${esc(p.images?.[0]||"")}" alt="${esc(p.name)}"><div class="detail-body"><span class="eyebrow">${esc(p.categoryLabel)}</span><h2>${esc(p.name)}</h2><p>${esc(p.shortDescription||"")}</p><div class="price">${money(price)}</div><button class="btn primary" data-add="${esc(p.id)}">Adicionar ao carrinho</button></div></div>`;
    $("#productDialog").showModal();
  }
  function checkout(){
    if(!state.cart.length)return;const phone=(cfg().whatsapp||"").replace(/\D/g,"");
    if(!phone){alert("Configure o WhatsApp da loja no V8 Loader.");return}
    const lines=cartDetails().map(x=>`• ${x.p.name} x${x.i.qty} — ${money(x.price*x.i.qty)}`),total=cartDetails().reduce((s,x)=>s+x.price*x.i.qty,0);
    const text=encodeURIComponent(`Olá! Quero fazer um pedido na MESTRE TV:\n\n${lines.join("\n")}\n\nTotal: ${money(total)}`);
    window.open(`https://wa.me/${phone}?text=${text}`,"_blank","noopener");
  }
  document.addEventListener("click",e=>{
    const cat=e.target.closest("[data-cat]");if(cat){state.category=cat.dataset.cat;renderCategories();renderProducts();return}
    const addBtn=e.target.closest("[data-add]");if(addBtn){add(addBtn.dataset.add);if($("#productDialog").open)$("#productDialog").close();return}
    const det=e.target.closest("[data-detail]");if(det){openDetail(det.dataset.detail);return}
    const qty=e.target.closest("[data-qty]");if(qty)updateQty(qty.dataset.qty,Number(qty.dataset.d));
  });
  $("#search").addEventListener("input",e=>{state.search=e.target.value;renderProducts()});
  $("#searchBtn").addEventListener("click",()=>$("#search").focus());
  $("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#overlay").addEventListener("click",closeCart);
  $("#closeProduct").addEventListener("click",()=>$("#productDialog").close());$("#checkout").addEventListener("click",checkout);
  $("#year").textContent=new Date().getFullYear();loadCatalog();
})();
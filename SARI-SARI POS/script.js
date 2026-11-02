const groceryItems = [
  { product_id: 1, product_name: "Dried Mangoes (200g)", product_price: 180, icon:"🥭" },
  { product_id: 2, product_name: "Banana Chips (200g)", product_price: 120, icon:"🍌" },
  { product_id: 3, product_name: "Tablea Chocolate (250g)", product_price: 200, icon:"🍫" },
  { product_id: 4, product_name: "Coconut Oil (500ml)", product_price: 180, icon:"🥥" },
  { product_id: 5, product_name: "Mango Jam (250g)", product_price: 160, icon:"🍯" },
  { product_id: 6, product_name: "Peanut Brittle (200g)", product_price: 150, icon:"🥜" },
  { product_id: 7, product_name: "Cashew Nuts (250g)", product_price: 280, icon:"🌰" },
  { product_id: 8, product_name: "Philippine Coffee Beans (250g)", product_price: 320, icon:"☕" },
  { product_id: 9, product_name: "Native Vinegar (500ml)", product_price: 120, icon:"🧴" },
  { product_id: 10, product_name: "Philippine Honey (250ml)", product_price: 250, icon:"🍯" },
  { product_id: 11, product_name: "Coconut Sugar (500g)", product_price: 180, icon:"🥥" },
  { product_id: 12, product_name: "Rice Crackers (200g)", product_price: 100, icon:"🍘" },
  { product_id: 13, product_name: "Salted Fish (Danggit, 250g)", product_price: 220, icon:"🐟" },
  { product_id: 14, product_name: "Longganisa (Frozen, 500g)", product_price: 280, icon:"🌭" },
  { product_id: 15, product_name: "Tocino (Frozen, 500g)", product_price: 300, icon:"🥓" },
  { product_id: 16, product_name: "Chicharon (100g)", product_price: 120, icon:"🍖" },
  { product_id: 17, product_name: "Pandesal Pack (12 pcs)", product_price: 80, icon:"🍞" },
  { product_id: 18, product_name: "Native Brown Rice (1kg)", product_price: 90, icon:"🌾" },
  { product_id: 19, product_name: "White Rice (1kg)", product_price: 70, icon:"🍚" },
  { product_id: 20, product_name: "Corn Coffee (250g)", product_price: 150, icon:"☕" },
  { product_id: 21, product_name: "Coconut Water (1L)", product_price: 100, icon:"🥥" },
  { product_id: 22, product_name: "Calamansi Juice (1L)", product_price: 120, icon:"🍋" },
  { product_id: 23, product_name: "Guava Jelly (250g)", product_price: 160, icon:"🍈" },
  { product_id: 24, product_name: "Bagoong (250g)", product_price: 90, icon:"🥫" },
  { product_id: 25, product_name: "Fish Sauce (Patis, 500ml)", product_price: 110, icon:"🧴" },
  { product_id: 26, product_name: "Soy Sauce (500ml)", product_price: 95, icon:"🧴" },
  { product_id: 27, product_name: "Native Salt (250g)", product_price: 50, icon:"🧂" },
  { product_id: 28, product_name: "Coconut Milk Powder (200g)", product_price: 140, icon:"🥥" },
  { product_id: 29, product_name: "Instant Noodles (Pack of 6)", product_price: 75, icon:"🍜" },
  { product_id: 30, product_name: "Native Cheese (Kesong Puti, 250g)", product_price: 180, icon:"🧀" },
  { product_id: 31, product_name: "Eggs (Dozen)", product_price: 90, icon:"🥚" },
  { product_id: 32, product_name: "Fresh Tilapia (1kg)", product_price: 160, icon:"🐟" },
  { product_id: 33, product_name: "Fresh Bangus (Milkfish, 1kg)", product_price: 180, icon:"🐟" },
  { product_id: 34, product_name: "Fresh Chicken (1kg)", product_price: 200, icon:"🍗" },
  { product_id: 35, product_name: "Fresh Pork (1kg)", product_price: 280, icon:"🥩" },
  { product_id: 36, product_name: "Fresh Beef (1kg)", product_price: 350, icon:"🥩" },
  { product_id: 37, product_name: "Native Vegetables Basket", product_price: 250, icon:"🥬" },
  { product_id: 38, product_name: "Bananas (1kg)", product_price: 60, icon:"🍌" },
  { product_id: 39, product_name: "Mangoes (1kg)", product_price: 120, icon:"🥭" },
  { product_id: 40, product_name: "Papaya (1kg)", product_price: 70, icon:"🍈" },
  { product_id: 41, product_name: "Pineapple (Whole)", product_price: 90, icon:"🍍" },
  { product_id: 42, product_name: "Coconut (Whole)", product_price: 50, icon:"🥥" },
  { product_id: 43, product_name: "Native Peanuts (250g)", product_price: 100, icon:"🥜" },
  { product_id: 44, product_name: "Camote (Sweet Potato, 1kg)", product_price: 80, icon:"🍠" },
  { product_id: 45, product_name: "Ube Halaya (250g)", product_price: 180, icon:"🍠" },
  { product_id: 46, product_name: "Leche Flan (Whole)", product_price: 250, icon:"🍮" },
  { product_id: 47, product_name: "Bibingka (Whole)", product_price: 200, icon:"🍰" },
  { product_id: 48, product_name: "Puto (Dozen)", product_price: 120, icon:"🧁" },
  { product_id: 49, product_name: "Kakanin Sampler Pack", product_price: 300, icon:"🍡" },
  { product_id: 50, product_name: "Native Chocolate Drink (Sikwate, 250ml)", product_price: 90, icon:"🍫" }
];

let cart = [];              // {product_id, product_name, product_price, qty}
let transactions = [];      // completed sales
let txCounter = 1;
let currentPage = 1;
const PER_PAGE = 10;
let lastReceipt = null;

/* ---------- Clock ---------- */
function updateClock(){
  const now = new Date();
  document.getElementById('dateNow').textContent = '📅 ' + now.toLocaleDateString('en-PH',{year:'numeric',month:'long',day:'numeric'});
  document.getElementById('timeNow').textContent = '🕒 ' + now.toLocaleTimeString('en-PH',{hour:'2-digit',minute:'2-digit'});
}
updateClock();
setInterval(updateClock, 30000);

/* ---------- Tabs ---------- */
document.querySelectorAll('nav.tabs button').forEach(btn=>{
  btn.addEventListener('click', ()=>switchPage(btn.dataset.page));
});
function switchPage(name){
  document.querySelectorAll('nav.tabs button').forEach(b=>b.classList.toggle('active', b.dataset.page===name));
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  if(name==='transactions') renderAllTransactions();
  if(name==='reports') renderReports();
}

/* ---------- Product catalog ---------- */
function money(n){ return '₱' + Number(n).toLocaleString('en-PH',{minimumFractionDigits:2,maximumFractionDigits:2}); }

function getFilteredProducts(){
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const priceRange = document.getElementById('priceFilter').value;
  return groceryItems.filter(p=>{
    if(q && !p.product_name.toLowerCase().includes(q)) return false;
    if(priceRange!=='all'){
      const [lo,hi] = priceRange.split('-').map(Number);
      if(p.product_price < lo || p.product_price > hi) return false;
    }
    return true;
  });
}

function renderProducts(){
  currentPage = 1;
  paintProducts();
}
function clearFilters(){
  document.getElementById('searchInput').value='';
  document.getElementById('priceFilter').value='all';
  renderProducts();
}

function paintProducts(){
  const filtered = getFilteredProducts();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  if(currentPage > totalPages) currentPage = totalPages;
  const start = (currentPage-1)*PER_PAGE;
  const pageItems = filtered.slice(start, start+PER_PAGE);

  const list = document.getElementById('productList');
  list.innerHTML = pageItems.length ? '' : '<p style="grid-column:1/-1;color:var(--ink-soft);font-size:13px;">No products match your search.</p>';
  pageItems.forEach(p=>{
    const div = document.createElement('div');
    div.className='product-card';
    div.innerHTML = `
      <div class="badge">${p.product_id}</div>
      <div class="thumb">${p.icon}</div>
      <div class="info">
        <div class="name">${p.product_name}</div>
        <div class="price">${money(p.product_price)}</div>
        <button class="add-btn" onclick="addToCart(${p.product_id})">+ Add</button>
      </div>`;
    list.appendChild(div);
  });

  const pag = document.getElementById('pagination');
  pag.innerHTML='';
  if(totalPages>1){
    const prev = document.createElement('button');
    prev.textContent='‹'; prev.onclick=()=>{ if(currentPage>1){currentPage--; paintProducts();} };
    pag.appendChild(prev);
    for(let i=1;i<=totalPages;i++){
      const b=document.createElement('button');
      b.textContent=i;
      if(i===currentPage) b.classList.add('active');
      b.onclick=()=>{currentPage=i; paintProducts();};
      pag.appendChild(b);
    }
    const next=document.createElement('button');
    next.textContent='›'; next.onclick=()=>{ if(currentPage<totalPages){currentPage++; paintProducts();} };
    pag.appendChild(next);
  }
  const showing = document.createElement('span');
  showing.style.marginLeft='8px';
  showing.textContent = filtered.length ? `Showing ${start+1}-${Math.min(start+PER_PAGE,filtered.length)} of ${filtered.length}` : '';
  pag.appendChild(showing);
}

/* ---------- Cart ---------- */
function addToCart(id){
  const product = groceryItems.find(p=>p.product_id===id);
  const existing = cart.find(c=>c.product_id===id);
  if(existing){ existing.qty += 1; }
  else{ cart.push({product_id:product.product_id, product_name:product.product_name, product_price:product.product_price, qty:1}); }
  renderCart();
}
function changeQty(id, delta){
  const item = cart.find(c=>c.product_id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(c=>c.product_id!==id);
  renderCart();
}
function removeFromCart(id){
  cart = cart.filter(c=>c.product_id!==id);
  renderCart();
}
function clearCart(){
  cart=[];
  renderCart();
}
function cartSubtotal(){
  return cart.reduce((s,c)=>s + c.product_price*c.qty, 0);
}
function getDiscount(subtotal){
  return subtotal > 1000 ? subtotal*0.10 : 0;
}
function renderCart(){
  const wrap = document.getElementById('cartTableWrap');
  if(cart.length===0){
    wrap.innerHTML = '<div class="empty-cart">Cart is empty — add a product to start a sale.</div>';
  } else {
    let rows = cart.map(c=>{
      const sub = c.product_price*c.qty;
      return `<tr>
        <td>${c.product_name}</td>
        <td>${money(c.product_price)}</td>
        <td>
          <div class="qty-ctrl">
            <button onclick="changeQty(${c.product_id},-1)">−</button>
            <span>${c.qty}</span>
            <button onclick="changeQty(${c.product_id},1)">+</button>
          </div>
        </td>
        <td>${money(sub)}</td>
        <td><button class="remove-btn" onclick="removeFromCart(${c.product_id})">✕</button></td>
      </tr>`;
    }).join('');
    wrap.innerHTML = `<table class="cart">
      <thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr></thead>
      <tbody>${rows}</tbody></table>`;
  }
  const subtotal = cartSubtotal();
  const discount = getDiscount(subtotal);
  const total = subtotal - discount;
  document.getElementById('totalsBox').innerHTML = `
    <div class="row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
    ${discount>0 ? `<div class="row discount"><span>Discount (10% off)</span><span>-${money(discount)}</span></div>` : ''}
    <div class="row total"><span>TOTAL DUE</span><span>${money(total)}</span></div>
  `;
  updateChange();
}

/* ---------- Payment ---------- */
function updateChange(){
  const subtotal = cartSubtotal();
  const discount = getDiscount(subtotal);
  const total = subtotal - discount;
  const paid = parseFloat(document.getElementById('amountPaid').value) || 0;
  const change = paid - total;
  document.getElementById('changeAmt').textContent = money(change>0?change:0);
  const btn = document.getElementById('completeBtn');
  btn.disabled = !(cart.length>0 && paid >= total && total>0);
}

function completeTransaction(){
  const subtotal = cartSubtotal();
  const discount = getDiscount(subtotal);
  const total = subtotal - discount;
  const paid = parseFloat(document.getElementById('amountPaid').value) || 0;
  if(cart.length===0 || paid < total || total<=0) return;

  const now = new Date();
  const tx = {
    id: 'JMSTORE - ' + String(txCounter++).padStart(4,'0'),
    date: now,
    customer: document.getElementById('customerName').value.trim() || 'Walk-in Customer',
    items: cart.map(c=>({...c, subtotal: c.product_price*c.qty})),
    subtotal, discount, total,
    paid, change: paid-total
  };
  transactions.unshift(tx);
  lastReceipt = tx;

  renderReceipt(tx);
  renderRecentTransactions();
  renderQuickStats();

  // reset for next sale
  cart=[];
  document.getElementById('customerName').value='';
  document.getElementById('amountPaid').value='';
  renderCart();
}

function renderReceipt(tx){
  const itemRows = tx.items.map(i=>`
    <tr><td>${i.product_name}</td><td style="text-align:center;">${i.qty}</td><td style="text-align:right;">${money(i.product_price)}</td><td style="text-align:right;">${money(i.subtotal)}</td></tr>
  `).join('');
  document.getElementById('receiptBox').innerHTML = `
    <h3>JM STORE</h3>
    <div class="tag">BASTA DIRI BRATO!</div>
    <hr>
    <div>Date: ${tx.date.toLocaleDateString('en-PH')} &nbsp; Time: ${tx.date.toLocaleTimeString('en-PH',{hour:'2-digit',minute:'2-digit'})}</div>
    <div>Transaction ID: ${tx.id}</div>
    <div>Customer: ${tx.customer}</div>
    <hr>
    <table>
      <thead><tr><td>Item</td><td style="text-align:center;">Qty</td><td style="text-align:right;">Price</td><td style="text-align:right;">Subtotal</td></tr></thead>
      <tbody>${itemRows}</tbody>
    </table>
    <hr>
    <table>
      <tr><td>Subtotal</td><td style="text-align:right;">${money(tx.subtotal)}</td></tr>
      ${tx.discount>0?`<tr><td>Discount (10%)</td><td style="text-align:right;">-${money(tx.discount)}</td></tr>`:''}
      <tr><td><b>TOTAL</b></td><td style="text-align:right;"><b>${money(tx.total)}</b></td></tr>
      <tr><td>Amount Paid</td><td style="text-align:right;">${money(tx.paid)}</td></tr>
      <tr><td>Change</td><td style="text-align:right;">${money(tx.change)}</td></tr>
    </table>
    <div class="thanks">Thank you! Salamat po!<br>Keep this receipt for your records.</div>
  `;
  document.getElementById('printBtn').style.display='block';
}

function printReceipt(){
  if(!lastReceipt) return;
  const w = window.open('', '_blank', 'width=380,height=600');
  w.document.write(`<html><head><title>${lastReceipt.id}</title></head><body style="font-family:'Courier New',monospace;font-size:12px;">${document.getElementById('receiptBox').innerHTML}</body></html>`);
  w.document.close();
  w.print();
}

/* ---------- Recent transactions on POS page ---------- */
function renderRecentTransactions(){
  const tbody = document.querySelector('#recentTxTable tbody');
  const recent = transactions.slice(0,5);
  tbody.innerHTML = recent.length ? recent.map(tx=>`
    <tr>
      <td>${tx.id}</td>
      <td>${tx.date.toLocaleDateString('en-PH')} ${tx.date.toLocaleTimeString('en-PH',{hour:'2-digit',minute:'2-digit'})}</td>
      <td>${tx.customer}</td>
      <td>${tx.items.reduce((s,i)=>s+i.qty,0)} item(s)</td>
      <td>${money(tx.paid)}</td>
      <td>${money(tx.change)}</td>
    </tr>`).join('') : `<tr><td colspan="6" style="text-align:center;color:var(--ink-soft);">No transactions yet today.</td></tr>`;
}

/* ---------- All transactions page ---------- */
function renderAllTransactions(){
  const tbody = document.querySelector('#allTxTable tbody');
  tbody.innerHTML = transactions.length ? transactions.map(tx=>`
    <tr>
      <td>${tx.id}</td>
      <td>${tx.date.toLocaleDateString('en-PH')} ${tx.date.toLocaleTimeString('en-PH',{hour:'2-digit',minute:'2-digit'})}</td>
      <td>${tx.customer}</td>
      <td>${tx.items.reduce((s,i)=>s+i.qty,0)} item(s)</td>
      <td>${money(tx.paid)}</td>
      <td>${money(tx.change)}</td>
      <td><button class="icon-btn" onclick="viewReceiptFromTx('${tx.id}')">👁</button></td>
    </tr>`).join('') : `<tr><td colspan="7" style="text-align:center;color:var(--ink-soft);">No transactions recorded yet.</td></tr>`;
}
function viewReceiptFromTx(id){
  const tx = transactions.find(t=>t.id===id);
  if(!tx) return;
  lastReceipt = tx;
  switchPage('pos');
  renderReceipt(tx);
}

/* ---------- Quick stats (POS page) ---------- */
function computeStats(){
  const totalSales = transactions.reduce((s,t)=>s+t.total,0);
  const totalTx = transactions.length;
  const avg = totalTx ? totalSales/totalTx : 0;
  const productCount = {};
  transactions.forEach(t=>t.items.forEach(i=>{
    productCount[i.product_name] = (productCount[i.product_name]||0) + i.qty;
  }));
  let mostPurchased = null, mostQty = 0;
  for(const [name,qty] of Object.entries(productCount)){
    if(qty>mostQty){ mostQty=qty; mostPurchased=name; }
  }
  return {totalSales, totalTx, avg, mostPurchased, mostQty, productCount};
}
function renderQuickStats(){
  const s = computeStats();
  document.getElementById('quickStats').innerHTML = `
    <div class="stat-box"><div class="lbl">Total Sales</div><div class="val">${money(s.totalSales)}</div></div>
    <div class="stat-box"><div class="lbl">Total Transactions</div><div class="val">${s.totalTx}</div></div>
    <div class="stat-box"><div class="lbl">Most Purchased</div><div class="val" style="font-size:14px;">${s.mostPurchased||'—'}</div><div class="sub">${s.mostPurchased?('Sold: '+s.mostQty+' pcs'):''}</div></div>
    <div class="stat-box"><div class="lbl">Average Sale</div><div class="val">${money(s.avg)}</div></div>
  `;
}

/* ---------- Reports page ---------- */
function renderReports(){
  const s = computeStats();
  document.getElementById('reportStats').innerHTML = `
    <div class="stat-box"><div class="lbl">Total Sales</div><div class="val">${money(s.totalSales)}</div></div>
    <div class="stat-box"><div class="lbl">Total Transactions</div><div class="val">${s.totalTx}</div></div>
    <div class="stat-box"><div class="lbl">Most Purchased</div><div class="val" style="font-size:14px;">${s.mostPurchased||'—'}</div><div class="sub">${s.mostPurchased?('Sold: '+s.mostQty+' pcs'):''}</div></div>
    <div class="stat-box"><div class="lbl">Average Sale</div><div class="val">${money(s.avg)}</div></div>
  `;
  const revenueByProduct = {};
  transactions.forEach(t=>t.items.forEach(i=>{
    if(!revenueByProduct[i.product_name]) revenueByProduct[i.product_name] = {qty:0, revenue:0};
    revenueByProduct[i.product_name].qty += i.qty;
    revenueByProduct[i.product_name].revenue += i.subtotal;
  }));
  const rows = Object.entries(revenueByProduct).sort((a,b)=>b[1].qty-a[1].qty);
  const tbody = document.querySelector('#reportTable tbody');
  tbody.innerHTML = rows.length ? rows.map(([name,d])=>`
    <tr><td>${name}</td><td>${d.qty}</td><td>${money(d.revenue)}</td></tr>
  `).join('') : `<tr><td colspan="3" style="text-align:center;color:var(--ink-soft);">No sales data yet.</td></tr>`;
}

/* ---------- Init ---------- */
document.getElementById('searchInput').addEventListener('input', renderProducts);
paintProducts();
renderCart();
renderQuickStats();
renderRecentTransactions();
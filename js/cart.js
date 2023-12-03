let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let sub = document.querySelector('.sub');
let tot = document.querySelector('.tot');
let discount = document.querySelector('#discount-code');
let coupn = document.querySelector('#coupon');
let checkOut = document.querySelector('#checkOut');

coupn.addEventListener('click', ()=>{
    tot.value = 0;
})

function getLocalStorage() {
  const storedData = localStorage.getItem('cartdata');
  return storedData ? JSON.parse(storedData) : [];
}

function saveToLocalStorage(cart) {
  localStorage.setItem('cartdata', JSON.stringify(cart));
}

let listCards = getLocalStorage();

function reloadCard(){
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key)=>{
    if (value) {
      totalPrice = totalPrice + value.price * value.quantity;
      count = count + value.quantity;
      if(value != null){
          let newDiv = document.createElement('tr');
          newDiv.innerHTML = `
                <td data-label="Product" class="product-name">
                    <div class="cart-product-img"><img src="${value.imageUrl}" style="width:50px;" alt="cart-preview"></div>
                    <div class="cart-product-desc">
                        <h5 class="h5-sm">${value.name}</h5>
                        <p class="p-sm">${value.description}</p>
                    </div>
                </td>
                <td data-label="Price" class="product-price"><h5 class="h5-md">$ ${value.price.toLocaleString()}</h5></td>
                <td data-label="Quantity" class="product-qty">
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})" style="padding: 0px 8px;">-</button>
                    ${value.quantity}
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button
                </td>
                <td data-label="Total" class="product-price-total"><h5 class="h5-md">$ ${value.price * value.quantity}</h5></td>`
          listCard.appendChild(newDiv);
      }
    }
      
  })
  quantity.innerText = count;
  sub.innerText = '$ ' + totalPrice.toLocaleString();
  tot.innerText = sub.innerText
  
  // After modifying the cart, save it to localStorage
  saveToLocalStorage(listCards);
}
reloadCard();

function changeQuantity(key, quantity){
  if(quantity == 0){
      delete listCards[key];
  }else{
      listCards[key].quantity = quantity;
  }
  reloadCard();
}

checkOut.addEventListener('click', ()=>{
  listCards = [];
  reloadCard();
  window.location.href = "plugin_payment/paymentPage.html";
})
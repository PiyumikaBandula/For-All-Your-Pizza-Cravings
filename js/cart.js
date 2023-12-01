let shopCart = document.querySelector('#cart-table');
let shopCartBody = document.querySelector('#cart-table-body');
let shopCartFoot = document.querySelector('#cart-table-foot');

function getLocalStorage() {
  const storedData = localStorage.getItem('cartdata');
  return storedData ? JSON.parse(storedData) : [];
}

function saveToLocalStorage(cart) {
  localStorage.setItem('cartdata', JSON.stringify(cart));
}

var products = [];
listCards = getLocalStorage();
 
// This functon starts the whole application
function initApp(){
  
}
initApp();

function reloadCard(){
    shopCartBody.remove();
    shopCartFoot.remove();

    shopCart.appendChild(document.createElement('tbody'));
    shopCart.appendChild(document.createElement('tfoot'));

    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        if (value) {
        var unitPrice = value.price / value.quantity;
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('tr');
            newDiv.innerHTML = `
                <td>${value.name}</td>
                <td>${unitPrice.toLocaleString()}</td>
                <td>
                    <input type="number" value=${value.quantity} class="quantity-input">
                    <div>
                        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>
                </td>
                <td>${value.price.toLocaleString()}</td>`;
            shopCartBody.appendChild(newDiv);
        }
        }
        
    })

    newDiv = document.createElement('tr');
    newDiv.innerHTML = `
        <td colspan="3">Total</td>
        <td colspan="2">${totalPrice.toLocaleString()}</td>`;
    shopCartFoot.appendChild(newDiv);

    // After modifying the cart, save it to localStorage
    saveToLocalStorage(listCards);
}
reloadCard();

function changeQuantity(key, quantity){
  if(quantity == 0){
      delete listCards[key];
  }else{
      listCards[key].quantity = quantity;
      listCards[key].price = quantity * products[key].price;
  }

  // After modifying the cart, save it to localStorage
  saveToLocalStorage(listCards);

  reloadCard();
}

function checkOutFunc() {
  listCards = [];
  saveToLocalStorage(listCards);
  reloadCard();
  window.alert('Payment done!');
}



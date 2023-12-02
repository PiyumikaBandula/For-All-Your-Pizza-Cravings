let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

function getLocalStorage() {
  const storedData = localStorage.getItem('cartdata');
  return storedData ? JSON.parse(storedData) : [];
}

function saveToLocalStorage(cart) {
  localStorage.setItem('cartdata', JSON.stringify(cart));
}

var products = [{"id":0,
"name":"Margherita Pizza",
"description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
"imageUrl":"images/pizza-1.jpg",
"price":9.99},
{"id":1,
"name":"Pepperoni Pizza",
"description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
"imageUrl":"images/pizza-2.jpg",
"price":14.99},
{"id":2,
"name":"Vegetarian Pizza",
"description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
"imageUrl":"images/pizza-3.jpg",
"price":9.99},
{"id":3,
"name":"BBQ Chicken Pizza",
"description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
"imageUrl":"images/pizza-4.jpg",
"price":7.99},
{"id":4,
"name":"Hawaiian Pizza",
"description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
"imageUrl":"images/pizza-5.jpg",
"price":30.99},
{"id":5,
"name":"Meat Lovers Pizza",
"description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
"imageUrl":"images/pizza-6.jpg",
"price":23.99},
{"id":6,
"name":"BBQ Chicken Pizza",
"description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
"imageUrl":"images/pizza-4.jpg",
"price":7.99},
{"id":7,
"name":"Hawaiian Pizza",
"description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
"imageUrl":"images/pizza-5.jpg",
"price":30.99},
{"id":8,
"name":"Meat Lovers Pizza",
"description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
"imageUrl":"images/pizza-6.jpg",
"price":23.99}];;
let listCards = getLocalStorage();

var getData = function() {
    // var data = new XMLHttpRequest();
    // data.open("GET", "js/data.json");
    // data.setRequestHeader("Access-Control-Allow-Origin", "*");
    // Set the request header to indicate the expected data type
    // data.setRequestHeader('Content-Type', 'application/json');
    // data.onload = function() {
    //   if(data.status >= 200 && data.status < 400) {
        //products = JSON.parse(data.responseText);
        
        products.forEach((value, key) =>{
          let newDiv = document.createElement('div');
          newDiv.classList.add('item');
          newDiv.innerHTML = `
              <img src="${value.imageUrl}">
              <div class="title">${value.name}</div>
              <div class="price">$ ${value.price.toLocaleString()}</div>
              <button onclick="addToCard(${key})">Add To Card</button>`;
          
            if (list) {
              list.appendChild(newDiv);
            }
        })
    //   } else {
    //     alert("Could not get the data!");
    //   }
    // }

    // data.onerror = function() {
    //   alert("Error in communication with server!");
    // }

    // data.send();
}
 
// This functon starts the whole application
function initApp(){
  getData();
}
initApp();

function addToCard(key){
  if(listCards[key] == null){
      // copy product form list to list card
      listCards[key] = JSON.parse(JSON.stringify(products[key]));
      listCards[key].quantity = 1;
  }else{
    // copy product form list to list card
    listCards[key].quantity = listCards[key].quantity + 1;
  }
  reloadCard();
}

function reloadCard(){
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key)=>{
    if (value) {
      totalPrice = totalPrice + value.price;
      count = count + value.quantity;
      if(value != null){
          let newDiv = document.createElement('li');
          newDiv.innerHTML = `
              <div><img src="${value.imageUrl}"/></div>
              <div>${value.name}</div>
              <div>${value.price.toLocaleString()}</div>
              <div>
                  <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class="count">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
              </div>`;
          listCard.appendChild(newDiv);
      }
    }
      
  })
  total.innerText = 'Checkout $' + totalPrice.toLocaleString();
  quantity.innerText = count;

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
  reloadCard();
}

function checkOutFunc() {
  listCards = [];
  saveToLocalStorage(listCards);
  reloadCard();
  window.location.href = 'plugin_payment/paymentPage.html';
}
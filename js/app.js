let list = document.querySelector('.list');
let quantity = document.querySelector('.quantity');

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
"price":23.99}];
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
              <div class="menu-6-item bg-white">
              <img class="img-fluid" src="${value.imageUrl}">
              <h5 class="h5-sm">${value.name}</h5>
              <p class="grey-color">${value.description}</p>
              <div class="price">$ ${value.price.toLocaleString()}</div>
              <button onclick="addToCard(${key})">Add To Card</button>
              </div>`;
          
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
  let count = 0;
  listCards.forEach((value, key)=>{
    if (value) {
      count = count + value.quantity;
    }
      
  })
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
  }
  reloadCard();
}
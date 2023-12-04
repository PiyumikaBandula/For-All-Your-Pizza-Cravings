var list = $('.list');
var quantity = $('.quantity');
var listCards = getLocalStorage();

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

function getLocalStorage() {
  const storedData = localStorage.getItem('cartdata');
  return storedData ? JSON.parse(storedData) : [];
}

function saveToLocalStorage(cart) {
  localStorage.setItem('cartdata', JSON.stringify(cart));
}

function goToDesc(key) {
  var selectedProduct = products[key];
  var descriptionContainer = $('<div class="product-description"></div>').html(`
    <img class="product-image" src="${selectedProduct.imageUrl}">
    <h2>${selectedProduct.name}</h2>
    <p>${selectedProduct.description}</p>
    <p>Price: $${selectedProduct.price.toLocaleString()}</p>
    <button onclick="addToCard(${key})">Add To Cart</button>
    <button onclick="closeProductDescription()">Close</button>
  `);

  $('body').append(descriptionContainer);
}

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = $.extend(true, {}, products[key]);
    listCards[key].quantity = 1;
  } else {
    listCards[key].quantity = listCards[key].quantity + 1;
  }
  reloadCard();
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
  }
  reloadCard();
}

function closeProductDescription() {
  $('.product-description').remove();
}

function reloadCard() {
  var count = 0;
  $.each(listCards, function(key, value) {
    if (value) {
      count = count + value.quantity;
    }
  });
  quantity.text(count);
  saveToLocalStorage(listCards);
}

$(document).ready(function() {
  reloadCard();

  var getData = function() {
    products.forEach(function(value, key) {
      var newDiv = $('<div class="item"></div>').html(`
        <div class="menu-6-item bg-white hover-overlay">
          <img class="menu-6-img img-fluid" src="${value.imageUrl}">
          <h5 class="h5-sm">${value.name}</h5>
          <p class="grey-color">${value.description}</p>
          <div class="price">$ ${value.price.toLocaleString()}</div>
          <button onclick="addToCard(${key})">Add To Card</button>
        </div>
      `);

      if (list.length > 0) {
        list.append(newDiv);
      }
    });
  }

  function initApp() {
    getData();
  }
  initApp();  
});

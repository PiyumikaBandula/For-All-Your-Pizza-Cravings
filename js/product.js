var listCard = $('.myProd');
var quantity = $('.quantity');
var listCards = getLocalStorage();

var products = [{"id":0,
  "name":"Margherita Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-1.jpg",
  "price":9.99},
  {"id":1,
  "name":"Pepperoni Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-2.jpg",
  "price":14.99},
  {"id":2,
  "name":"Vegetarian Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-3.jpg",
  "price":9.99},
  {"id":3,
  "name":"BBQ Chicken Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-4.jpg",
  "price":7.99},
  {"id":4,
  "name":"Hawaiian Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-5.jpg",
  "price":30.99},
  {"id":5,
  "name":"Meat Lovers Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-6.jpg",
  "price":23.99},
  {"id":6,
  "name":"BBQ Chicken Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-4.jpg",
  "price":7.99},
  {"id":7,
  "name":"Hawaiian Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
 "imageUrl":"images/pizza-5.jpg",
  "price":30.99},
  {"id":8,
  "name":"Meat Lovers Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
 "imageUrl":"images/pizza-6.jpg",
  "price":23.99}];

function getLocalStorage() {
  const storedData = localStorage.getItem('cartdata');
  return storedData ? JSON.parse(storedData) : [];
}

function saveToLocalStorage(cart) {
  localStorage.setItem('cartdata', JSON.stringify(cart));
}

function loadDesc() {
  listCard.empty();
  var count = 0;

  // Retrieve product from local storage
  var storedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

  // Populate HTML elements with product details
  $('.product-image').attr('src', storedProduct.imageUrl);
  $('.product-name').text(storedProduct.name);
  $('.product-description-text').text(storedProduct.description + storedProduct.details);
  $('.product-price').text(`Price: $${storedProduct.price.toLocaleString()}`);
  $('.add-to-cart-btn').attr('onclick', `addToCard(${storedProduct.id})`);

  $.each(listCards, function(key, value) {
    if (value) {
      count = count + value.quantity;
    }
  });

  quantity.text(count);
}

function addToCard(key) {
    if (listCards[key] == null) {
      listCards[key] = $.extend(true, {}, products[key]);
      listCards[key].quantity = 1;
    } else {
      listCards[key].quantity = listCards[key].quantity + 1;
    }
  }

$(document).ready(function() {
    loadDesc();
});

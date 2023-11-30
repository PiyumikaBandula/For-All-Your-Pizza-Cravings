var ShoppingCart = (function() {
  "use strict";

  // Cahce necesarry DOM Elements
  var productsEl = document.querySelector(".products"),
      cartEl =     document.querySelector(".shopping-cart-list"),
      productQuantityEl = document.querySelector(".product-quantity"),
      emptyCartEl = document.querySelector(".empty-cart-btn"),
      cartCheckoutEl = document.querySelector(".cart-checkout"),
      totalPriceEl = document.querySelector(".total-price");


  var products = [],
      productsInCart = [];

  var getData = function() {
    var data = new XMLHttpRequest();
    data.open("GET", "js/data.json", true);
    data.onload = function() {
      if(data.status >= 200 && data.status < 400) {
        products = JSON.parse(data.responseText);
        generateProductList();
      } else {
        alert("Could not get the data!");
      }
    }

    data.onerror = function() {
      alert("Error in communication with server!");
    }

    data.send();
  }

  var setupListeners = function() {
    productsEl.addEventListener("click", addProductCallback);

    emptyCartEl.addEventListener("click", emptyCartCallback);
  }

  var addProductCallback = function(event) {
    var el = event.target;
    if(el.classList.contains("add-to-cart")) {
      var elId = el.dataset.id;
      addToCart(elId);
    }
  }

  var emptyCartCallback = function(event) {
    if(confirm("Are you sure?")) {
        productsInCart = [];
    }
    generateCartList();
  }

  // Pretty much self explanatory function. NOTE: Here I have used template strings (ES6 Feature)
  var generateProductList = function() {
    products.forEach(function(item) {
      var productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML = (`<div class="product-image">
                                <img src="${item.imageUrl}" alt="${item.name}">
                             </div>
                             <div class="product-name"><span>Product:</span> ${item.name}</div>
                             <div class="product-description"><span>Description:</span> ${item.description}</div>
                             <div class="product-price"><span>Price:</span> ${item.price} $</div>
                             <div class="product-add-to-cart">
                               <a href="#0" class="button see-more">More Details</a>
                               <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to Cart</a>
                             </div>
                          </div>`);

      productsEl.appendChild(productEl);
    });
  }

    // Adds new items or updates existing one in productsInCart array
  var addToCart = function(id) {
    var obj = products[id];
    if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
      productsInCart.push({product: obj, quantity: 1});
    } else {
      productsInCart.forEach(function(item) {
        if(item.product.id === obj.id) {
          item.quantity++;
        }
      });
    }
    generateCartList();
  }

  var productFound = function(productId) {
    return productsInCart.find(function(item) {
      return item.product.id === productId;
    });
  }

  // Like one before and I have also used ES6 template strings
  var generateCartList = function() {

    cartEl.innerHTML = "";

    productsInCart.forEach(function(item) {
      var li = document.createElement("li");
      li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
      cartEl.appendChild(li);
    });

    productQuantityEl.innerHTML = productsInCart.length;

    generateCartButtons()
  }

  // Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
  var generateCartButtons = function() {
    if(productsInCart.length > 0) {
      emptyCartEl.style.display = "block";
      cartCheckoutEl.style.display = "block"
      totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
    } else {
      emptyCartEl.style.display = "none";
      cartCheckoutEl.style.display = "none";
    }
  }

  var calculateTotalPrice = function() {
    return productsInCart.reduce(function(total, item) {
      return total + (item.product.price *  item.quantity);
    }, 0);
  }

  // This functon starts the whole application
  var init = function() {
    getData();
    setupListeners();
  }

  // Exposes just init function to public, everything else is private
  return {
    init: init
  };

})();

ShoppingCart.init();
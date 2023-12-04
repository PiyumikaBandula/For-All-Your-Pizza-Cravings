var listCard = $('.listCard');
var total = $('.total');
var quantity = $('.quantity');
var sub = $('.sub');
var tot = $('.tot');
var discount = $('#discount-code');
var coupn = $('#coupon');
var checkOut = $('#checkOut');
var listCards = getLocalStorage();

function getLocalStorage() {
  const storedData = localStorage.getItem('cartdata');
  return storedData ? JSON.parse(storedData) : [];
}

function saveToLocalStorage(cart) {
  localStorage.setItem('cartdata', JSON.stringify(cart));
}

function reloadCard() {
  listCard.empty();
  var count = 0;
  var totalPrice = 0;

  $.each(listCards, function(key, value) {
    if (value) {
      totalPrice = totalPrice + value.price * value.quantity;
      count = count + value.quantity;
      if (value !== null) {
        var newDiv = $('<tr>\
                          <td data-label="Product" class="product-name">\
                              <div class="cart-product-img"><img src="' + value.imageUrl + '" style="width:50px;" alt="cart-preview"></div>\
                              <div class="cart-product-desc">\
                                  <h5 class="h5-sm">' + value.name + '</h5>\
                                  <p class="p-sm">' + value.description + '</p>\
                              </div>\
                          </td>\
                          <td data-label="Price" class="product-price"><h5 class="h5-md">$ ' + value.price.toLocaleString() + '</h5></td>\
                          <td data-label="Quantity" class="product-qty">\
                              <button onclick="changeQuantity(' + key + ', ' + (value.quantity - 1) + ')" style="padding: 0px 8px;">-</button>\
                              ' + value.quantity + '\
                              <button onclick="changeQuantity(' + key + ', ' + (value.quantity + 1) + ')">+</button>\
                          </td>\
                          <td data-label="Total" class="product-price-total"><h5 class="h5-md">$ ' + (value.price * value.quantity).toLocaleString() + '</h5></td>\
                        </tr>');
        listCard.append(newDiv);
      }
    }
  });

  quantity.text(count);
  sub.text('$ ' + totalPrice.toLocaleString());
  tot.text(sub.text());

  // After modifying the cart, save it to localStorage
  saveToLocalStorage(listCards);
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
  }
  reloadCard();
}

$(document).ready(function() {
  coupn.on('click', function() {
    tot.val(0);
  });  

  reloadCard();

  checkOut.on('click', function() {
    listCards = [];
    reloadCard();
    window.location.href = 'plugin_payment/paymentPage.html';
  });
});

 // Pizza items data
 var pizzaItems = [
    { name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.', price: '$9.99' },
    { name: 'Pepperoni Pizza', description: 'A traditional favorite with tomato sauce, mozzarella cheese, and plenty of pepperoni slices.', price: '$14.99' },
    { name: 'Vegetarian Pizza', description: 'Loaded with a variety of fresh vegetables like bell peppers, onions, mushrooms, black olives, and tomatoes.', price: '$15.99' },
    { name: 'BBQ Chicken Pizza', description: 'Tangy barbecue sauce, grilled chicken, red onions, and cilantro on a bed of melted cheese.', price: '$9.99' },
    { name: 'Hawaiian Pizza', description: 'A tropical delight featuring ham, pineapple, and mozzarella cheese.', price: '$11.99' },
    { name: 'Meat Lover\'s Pizza', description: 'A carnivore\'s dream, piled high with pepperoni, sausage, bacon, and ground beef.', price: '$7.99' },
    { name: 'Margarita Supreme', description: 'A deluxe version of the Margherita pizza with additional toppings like olives, mushrooms, and artichokes.', price: '$20.99' },
    { name: 'Buffalo Chicken Pizza', description: 'Spicy buffalo sauce, grilled chicken, red onions, and a drizzle of ranch dressing.', price: '$23.99' },
    { name: 'White Pizza', description: 'A unique pizza with a garlic and olive oil base, ricotta cheese, spinach, and mozzarella.', price: '$30.99' },
    { name: 'Pesto Delight', description: 'Pesto sauce, cherry tomatoes, fresh mozzarella, and pine nuts for a flavorful and aromatic experience.', price: '$12.99' }
];

// Function to display pizza items
function displayPizzaMenu() {
    var menuContainer = $('#menu-container');

    // Loop through pizza items and create HTML elements
    for (var i = 0; i < pizzaItems.length; i++) {
        var pizzaItem = pizzaItems[i];
        var html = '<div class="menu-item" style="color: black">';
        html += '<h3>' + pizzaItem.name + '</h3>';
        html += '<p>' + pizzaItem.description + '</p>';
        html += '<p><strong>Price:</strong> ' + pizzaItem.price + '</p>';
        html += '</div>';

        // Append the HTML to the menu container
        menuContainer.append(html);
    }
}

// Call the function to display the pizza menu
$(document).ready(function() {
    displayPizzaMenu();
});

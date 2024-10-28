
// Task 2 - Add Event Listener for Product Selection 

// Select the product dropdown, quantity input, total price display, order button, and order summary elements from the HTML
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');


// Task 3 - // Calculate total price when product or quantity changes

// Function to update the total price based on selected product price and quantity
function updateTotalPrice() {
    // Parse the selected product price and quantity input
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);

    const totalPrice = productPrice * quantity;
    
    // Display the calculated total price, formatted to two decimal places
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Event listener to update total price when a new product is selected
productSelector.addEventListener('change', updateTotalPrice);

// Event listener to update total price when the quantity input changes
quantityInput.addEventListener('input', updateTotalPrice);



// Task 4 - Handle order submission

placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    
    // Update the order summary to display the product, quantity, and total price
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});
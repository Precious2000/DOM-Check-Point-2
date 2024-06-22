// Function to update the total price
function updateTotalPrice() {
    const items = document.querySelectorAll('.cart-item');
    let totalPrice = 0;
    
    items.forEach(item => {
      const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
      const quantity = parseInt(item.querySelector('.item-quantity').textContent);
      totalPrice += price * quantity;
    });
    
    document.querySelector('.total-price').textContent = `$${totalPrice.toFixed(2)}`;
  }
  
  // Function to handle quantity change
  function changeQuantity(event, isIncrement) {
    const quantityElement = event.target.closest('.cart-item').querySelector('.item-quantity');
    let quantity = parseInt(quantityElement.textContent);
    
    if (isIncrement) {
      quantity += 1;
    } else {
      if (quantity > 1) {
        quantity -= 1;
      }
    }
    
    quantityElement.textContent = quantity;
    updateTotalPrice();
  }
  
  // Function to handle item deletion
  function deleteItem(event) {
    const item = event.target.closest('.cart-item');
    item.remove();
    updateTotalPrice();
  }
  
  // Function to handle liking an item
  function toggleLike(event) {
    const heartIcon = event.target;
    heartIcon.classList.toggle('liked');
  }
  
  // Add event listeners to all buttons
  document.querySelectorAll('.btn-increment').forEach(button => {
    button.addEventListener('click', (event) => changeQuantity(event, true));
  });
  
  document.querySelectorAll('.btn-decrement').forEach(button => {
    button.addEventListener('click', (event) => changeQuantity(event, false));
  });
  
  document.querySelectorAll('.btn-delete').forEach(button => {
    button.addEventListener('click', deleteItem);
  });
  
  document.querySelectorAll('.btn-like').forEach(button => {
    button.addEventListener('click', toggleLike);
  });
  
  // Initial calculation of total price
  updateTotalPrice();
  
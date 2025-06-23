document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.querySelector('.cart-icon');
  const popupCart = document.getElementById('popup-cart');
  let cartShown = false;

  const cartToggle = () => {
    popupCart.style.display = cartShown ? 'none' : 'block';
    cartShown = !cartShown;
  };

  cartIcon.addEventListener('click', cartToggle);

  document.querySelectorAll('.cart-item button').forEach(button => {
    button.addEventListener('click', () => {
      const input = button.parentElement.querySelector('input');
      let value = Number(input.value);
      const isPlus = button.classList.contains('plus');

      if (isPlus) {
        input.value = value + 1;
      } else if (value > 1) {
        input.value = value - 1;
      }

      console.log('test');
    });
  });
});
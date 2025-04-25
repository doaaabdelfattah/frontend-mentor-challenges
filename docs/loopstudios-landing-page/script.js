document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-icon');
  const sidebar = document.querySelector('.header__sidebar');
  const closeBtn = document.querySelector('.close');

  burger.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
  });

  // Close sidebar
  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('visible');
  });

});

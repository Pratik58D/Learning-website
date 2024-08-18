// const menuButton = document.querySelector('.menu-button');
// const menuList = document.querySelector('.menu-list');

// menuButton.addEventListener('click', () => {
//   menuList.classList.toggle('hidden');
//   menuList.classList.toggle('flex');
// });


// // JavaScript to handle dropdown toggle
// document.getElementById("htmlMenu").addEventListener("click", function() {
//   const dropdownMenu = this.nextElementSibling;
//   dropdownMenu.classList.toggle("hidden");
//   dropdownMenu.classList.toggle("flex");
// });


// Toggle mobile menu visibility
const menuButton = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list');

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('hidden');
  menuList.classList.toggle('flex');
});

// Event delegation to handle all dropdowns
document.querySelectorAll('.dropdown-toggle').forEach(item => {
  item.addEventListener('click', function () {
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.classList.toggle('hidden');
    dropdownMenu.classList.toggle('flex');
  });
});


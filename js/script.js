var hamburger = document.querySelector('.toggle-menu');
var sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', function () {
	sidebar.classList.toggle('visible');
});
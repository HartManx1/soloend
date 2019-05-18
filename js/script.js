var hamburger = document.querySelector('.toggle-menu');
var sidebar = document.querySelector('.sidebar');
var menager = document.querySelector('.menager');
var michael = document.querySelector('.men');
var ajax = document.querySelectorAll('.ajax');
var test = document.querySelector('.michael');
var logo = document.querySelector('.logo');
var photo = document.querySelector('.photo');
var icon = document.querySelectorAll('.icon');


hamburger.addEventListener('click', function () {

	for (var i = 0; i < ajax.length; i++) {
		ajax[i].classList.toggle('visible');
	};

	for (var i = 0; i < icon.length; i++) {
		icon[i].classList.toggle('visible');
	};

	test.classList.toggle('visible');
	menager.classList.toggle('visible');
	photo.classList.toggle('visible');
	hamburger.classList.toggle('visible');
	logo.classList.toggle('visible');
	sidebar.classList.toggle('visible');
	michael.classList.toggle('visible');

});
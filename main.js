let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu3');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
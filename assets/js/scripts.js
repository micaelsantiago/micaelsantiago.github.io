window.onload = function(){
	document.querySelector("#menu__mobile").addEventListener("click", function(){
		if(document.querySelector(".header__nav nav ul").style.display == 'flex') {
			document.querySelector(".header__nav nav ul").style.display = 'none';
		} else {
			document.querySelector(".header__nav nav ul").style.display = 'flex';
		}
	});
};
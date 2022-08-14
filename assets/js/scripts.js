window.onload = function(){
	document.querySelector("#menu_mobile").addEventListener("click", function(){
		if(document.querySelector("#header_nav nav ul").style.display == 'flex') {
			document.querySelector("#header_nav nav ul").style.display = 'none';
		} else {
			document.querySelector("#header_nav nav ul").style.display = 'flex';
		}
	});
};
  var mybutton = document.getElementById("topBtn");



function topFunction() {if (x.matches){
		window.scrollTo({top:0, behavior:'smooth'});
	} else {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;}
}
	 
var x = window.matchMedia("(min-width: 700px)");

const img = document.querySelector('img')
img.ondragstart = () => {
  return false;
};

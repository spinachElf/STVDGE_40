  var mybutton = document.getElementById("topBtn");


function topFunction() {
window.scrollTo({top:0, behavior:'smooth'});
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; //}

};




const img = document.querySelector('img')
img.ondragstart = () => {
  return false;
};

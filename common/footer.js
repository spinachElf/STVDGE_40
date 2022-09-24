  var mybutton = document.getElementById("topBtn");


   function topFunction() {
          window.scrollTo({top:0, behavior:'smooth'});

      }
  const img = document.querySelector('img')
img.ondragstart = () => {
  return false;
};

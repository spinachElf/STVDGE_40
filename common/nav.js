(function(){

        var doc = document.documentElement;
        var w = window;

        var prevScroll = w.scrollY || doc.scrollTop;
        var curScroll;
        var direction = 0;
        var prevDirection = 0;

        var header = document.getElementById('nav');

        var checkScroll = function() {

       /*
       ** Find the direction of scroll
       ** 0 - initial, 1 - up, 2 - down
       */

       curScroll = w.scrollY || doc.scrollTop;
       if (curScroll > prevScroll) { 
         //scrolled up
      direction = 2;
       }
       else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
       }

       if (direction !== prevDirection) {
         toggleHeader(direction, curScroll);
       }
    
       prevScroll = curScroll;
     };

     var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 52) { 
      
      //replace 52 with the height of your header in px

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);

})();
   

(function(){

        var doc = document.documentElement;
        var w = window;

        var prevScroll = w.scrollY || doc.scrollTop;
        var curScroll;
        var direction = 0;
        var prevDirection = 0;

        var header = document.getElementById('m_nav');

        var checkScroll = function() {

       /*
       ** Find the direction of scroll
       ** 0 - initial, 1 - up, 2 - down
       */

       curScroll = w.scrollY || doc.scrollTop;
       if (curScroll > prevScroll) { 
         //scrolled up
      direction = 2;
       }
       else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
       }

       if (direction !== prevDirection) {
         toggleHeader(direction, curScroll);
       }
    
       prevScroll = curScroll;
     };

     var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 52) { 
      
      //replace 52 with the height of your header in px

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);

})();

document.addEventListener("DOMContentLoaded", function () {
        document
          .querySelector("#menuBtn")
          .addEventListener("click", function (e) {
            if (document.querySelector(".menuWrap").classList.contains("on")) {
              //메뉴 slideOut
              document.querySelector(".menuWrap").classList.remove("on");
              document.querySelector(".menuBtn").src = "./common/icon_mnav1.svg";        
              document.querySelector(".menuBtn").classList.remove("btnRotate");
              document.querySelector("#body").classList.remove("scrollLock");
              document.querySelector("#dimmed").remove();
            } else {
              //메뉴 slideIn
              document.querySelector(".menuWrap").classList.add("on");
              document.querySelector(".menuBtn").src = "./common/icon_mnav2.svg";
              document.querySelector(".menuBtn").classList.add("btnRotate");
              document.querySelector("#body").classList.add("scrollLock")
              let div = document.createElement("div");
                         div.id = "dimmed";
                         document.body.append(div);


                       }
                     });
        });


(window.onload = function() {  // 화면이 뜬 뒤 처리

  var obj1 = document.getElementById('navHead'); 
  var obj1_height = obj1.offsetHeight;

  document.getElementById('navBox').style.paddingTop = obj1_height + 30 + 'px'

})();

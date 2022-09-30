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
              document.getElementById("menuBtn").src = "./common/icon_mnav1.svg";
              document.querySelector("#menuBtn").classList.remove("btnRotate");
              document.querySelector("#dimmed").remove();
            } else {
              //메뉴 slideIn
              document.querySelector(".menuWrap").classList.add("on");
              document.getElementById("menuBtn").src = "./common/icon_mnav2.svg";
              document.querySelector("#menuBtn").classList.add("btnRotate");

              let div = document.createElement("div");
                         div.id = "dimmed";
                         document.body.append(div);

                        //페이지 스크롤 락  모바일 이벤트 차단
                        document
                         .querySelector("#dimmed")
                         .addEventListener(
                              "scroll touchmove touchend mousewheel",
                              function (e) {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      return false;
                            }
                            );
                         function scrollDisable(){
    $('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
}
function scrollAble(){
    $('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
}


                       }
                     });
        });





document.addEventListener("DOMContentLoaded", function () {
        document
          .querySelector("#menuBtn")
          .addEventListener("click", function (e) {
            if (document.querySelector(".menuWrap").classList.contains("on")) {
              //메뉴 slideOut
              document.querySelector(".menuWrap").classList.remove("on");
              document.querySelector(".menuBtn").src = "../.././common/icon_mnav1.svg";        
              document.querySelector(".menuBtn").classList.remove("btnRotate");
              document.querySelector("#body").classList.remove("scrollLock");
              document.querySelector("#dimmed").remove();
            } else {
              //메뉴 slideIn
              document.querySelector(".menuWrap").classList.add("on");
              document.querySelector(".menuBtn").src = "../.././common/icon_mnav2.svg";
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

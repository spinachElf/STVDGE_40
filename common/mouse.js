document.onload = (function () {
        const customCursor1 = document.getElementById("customCursor1");
        const customCursor2 = document.getElementById("customCursor2");
        const customCursor3 = document.getElementById("customCursor3");
        const customCursor4 = document.getElementById("customCursor4");
        const customCursor5 = document.getElementById("customCursor5");
        const customCursor6 = document.getElementById("customCursor6");

        const updateMousePosition = (e) => {
          const { pageX, pageY } = e;

          customCursor1.style.transform = `translate3d(${pageX}px, ${pageY}px, 0)`;
          
          setTimeout(() => {
            customCursor2.style.transform = `translate3d(${pageX}px, ${pageY}px, 0)`;
            
          }, 80);
          setTimeout(() => {
            customCursor3.style.transform = `translate3d(${pageX}px, ${pageY}px, 0)`;
            
          }, 160);
          setTimeout(() => {
            customCursor4.style.transform = `translate3d(${pageX}px, ${pageY}px, 0)`;
            
          }, 240);
          setTimeout(() => {
            customCursor5.style.transform = `translate3d(${pageX}px, ${pageY}px, 0)`;
           
          }, 320);
          setTimeout(() => {
            customCursor6.style.transform = `translate3d(${pageX}px, ${pageY}px, 0)`;
        
          }, 400);
        };

        window.addEventListener("mousemove", updateMousePosition);
      })();
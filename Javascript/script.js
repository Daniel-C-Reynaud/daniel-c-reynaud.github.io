document.getElementById("hamburger").addEventListener("click", function(){
     var nav = document.getElementById("navegation");
     if (nav.style.display === "none") {
       nav.style.display = "flex";
     } else {
       nav.style.display = "none";
     }
   });

   function sm()
   {
     document.getElementById('testetxt').scrollIntoView({behavior: 'smooth'})
   }
   
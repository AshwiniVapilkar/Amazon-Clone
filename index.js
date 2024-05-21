
// click on All- Menubar in navmenu
document.querySelector(".menu").addEventListener("click",function(){
    document.querySelector(".menu-side-popup").style.display="flex";
})
document.querySelector(".nav-toggle").addEventListener("click",function(){
    document.querySelector(".menu-side-popup").style.display="none";
})
// hover on Sign-in navbar
document.querySelector(".nav-sign").addEventListener("mouseover",function(){
    document.querySelector(".popup").style.display="flex";
})
document.querySelector(".nav-sign").addEventListener("mouseleave",function(){
    document.querySelector(".popup").style.display="none";
})
//click on location in navbar
document.querySelector(".location").addEventListener("click",function(){
    document.querySelector(".location-popup").style.display="flex";
})
document.querySelector(".close-loc").addEventListener("click",function(){
    document.querySelector(".location-popup").style.display="none";
})
//hover on country in navbar
document.querySelector(".nav-country").addEventListener("mouseover",function(){
    document.querySelector(".nav-country-popup").style.display="flex";
})
document.querySelector(".nav-country").addEventListener("mouseleave",function(){
    document.querySelector(".nav-country-popup").style.display="none";
})


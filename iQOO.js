$(document).ready(function () {
    $(".menu").click(function () {
        $(".menu-side-popup").show();
    });
    $(".nav-toggle").click(function () {
        $(".menu-side-popup").hide();
    });
    $(".location").click(function () {
        $(".location-popup").show();
    });
    $(".close-loc").click(function () {
        $(".location-popup").hide();
    });
    // $(".nav-sign").mouseover(function () {
    //     $(".popup").show();

    // });
    // $(".nav-sign").mouseleave(function () {
    //     $(".popup").hide();
    // });
    
    $(".nav-sign").hover(function () {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(this).children(".popup").stop().slideDown(300);

        } else {
            $(this).children(".popup").stop().slideUp(300);
        }
    });
    

    // $(".nav-country").mouseenter(function () {
    //     $(".nav-country-popup").show();
    // });
    // $(".nav-country").mouseleave(function () {
    //     $(".nav-country-popup").hide();
    // });

    $(".nav-country").hover(function () {
        var isHovered1 = $(this).is(":hover");
        if (isHovered1) {
            $(this).children(".nav-country-popup").stop().slideDown(300);

        } else {
            $(this).children(".nav-country-popup").stop().slideUp(300);
        }
    });

});



const cart = document.querySelector(".add-cart");
let text=document.querySelector(".mobile-descdet").innerText;
const quant=document.querySelector(".quanti");
const price = document.querySelector(".price").innerHTML;
const x = document.querySelector(".iQOO-img1");
const stock=document.querySelector(".stock-msg").innerText;

cart.addEventListener("click",(e)=>{
    e.preventDefault();
    const details =text;
    const quantity=quant.value;
    function rc(price){
        let priced=parseFloat(price.replace(/,/g,''));
        return priced;
    }
    let priced=rc(price);
    
    const pic=x;
    const col=text.slice(12,25);
    const sto=text.slice(26,49);
    const stname=text.slice(0,10);
    console.log(stock);
    localStorage.setItem('Decription',details);
    localStorage.setItem('Quantity',quantity);
    localStorage.setItem('Price',price);
    localStorage.setItem('TPrice',priced*quantity);
    localStorage.setItem('Color',col);
    localStorage.setItem('Storage',sto);
    localStorage.setItem('StyleName',stname);
    localStorage.setItem('Stock',stock);
    localStorage.setItem('Image',pic);
    
    window.localStorage.href="addCart.html";
})
var menuItems=document.getElementById("menuItem");

menuItems.style.maxHeight ="0px";

function menutoggle(){
    if(menuItems.style.maxHeight =="0px"){
        menuItems.style.maxHeight="200px";
    }
    else{
        menuItems.style.maxHeight="0px";
    }
}

// js for product details

// var productImg=document.getElementById("product-img");
// var smallImg=document.getElementsByClassName("small-img");



// smallImg[0].onclick=function(){
//     productImg.src=smallImg[0].src
// }

// smallImg[1].onclick=function(){
//     productImg.src=smallImg[1].src
// }

// smallImg[2].onclick=function(){
//     productImg.src=smallImg[2].src
// }

// smallImg[3].onclick=function(){
//     productImg.src=smallImg[3].src
// }

 const productImg=document.querySelector("#product-img");
 const smallImg=document.querySelectorAll(".small-img");

for(img of smallImg){
    img.addEventListener("click",function(event){
         productImg.src=event.target.src;
    })
}



// form

var Login=document.querySelector("#loginForm");
var regBtn=document.querySelector("#registerForm");
var indicator=document.querySelector("#indicator");
let Reg=document.querySelector("#regF")
let Log=document.querySelector("#loginF")

// function register(){
//     regBtn.style.transform="translateX(0px)";
//     Login.style.transform="translateX(0px)";
// }

// function login(){
//     regBtn.style.transform="translateX(300px)";
//     Login.style.transform="translateX(300px)";
// }

Reg.addEventListener("click",function(){
    regBtn.style.transform = "translateX(0px)";
    Login.style.transform = "translateX(-300px)";
    indicator.style.transform="translateX(100px)";
})

Log.addEventListener("click",function(){
    regBtn.style.transform="translateX(300px)";
    Login.style.transform="translateX(0px)";
    indicator.style.transform="translateX(0px)";
})
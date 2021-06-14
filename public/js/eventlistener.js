//index nav

let indexNav = document.getElementById("indexNav");

window.onscroll = function() {indexNavScrollFunction()};

function indexNavScrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        indexNav.style.background = "#363538";
    }
    else{
        indexNav.style.background = "none";
    }
}

//loader

let loader = document.querySelector(".loader");

window.addEventListener("load", function(){
    loader.classList.add("hidden");
})
// ==============================
// YBN & PARTNERS
// SCRIPT.JS
// ==============================

// Navbar berubah saat scroll

window.addEventListener("scroll", function(){

const header=document.querySelector("header");

header.classList.toggle("scrolled",window.scrollY>80);

});


// ==============================
// ACTIVE MENU
// ==============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


// ==============================
// FADE ANIMATION
// ==============================

const fades=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{

fades.forEach(item=>{

const top=item.getBoundingClientRect().top;

const trigger=window.innerHeight*0.85;

if(top<trigger){

item.classList.add("show");

}

});

});


// ==============================
// BACK TO TOP
// ==============================

const backTop=document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.style.display="flex";

}else{

backTop.style.display="none";

}

});

backTop.addEventListener("click",(e)=>{

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

}); 

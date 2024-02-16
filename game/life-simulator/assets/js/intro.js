let intro = document.querySelector('.intro');
let intro_img = document.querySelector('.intro-img');

window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        intro_img.classList.add('active');
    },200)
    setTimeout(()=>{
        intro_img.classList.remove('active');
        intro_img.classList.add('fade');
    },2000)
    setTimeout(()=>{
        intro.style.top="-100vh"
    },3000)
})
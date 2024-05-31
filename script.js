
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animate(){
    const main = document.querySelector("#main")
    const elem = document.querySelector(".page3-elem")
    const fixed = document.querySelector("#fixed-image");
    const elems = document.querySelectorAll('.elem')
    
    
    elem.addEventListener("mouseenter", function(){
        fixed.style.display = 'block'
    })
    elem.addEventListener("mouseleave", function(){
        fixed.style.display = 'none'
    })
    
    
    elems.forEach(function(e){
        e.addEventListener('mouseenter',function(){
            let image = e.getAttribute('data-image');
        fixed.style.backgroundImage = `url(${image})`
        })
        
    })
    
}

page4Animate();


function swiperAnimate(){
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true,
        
      });
}

swiperAnimate();

function menuAnimate(){
    const menu = document.querySelector(".menu")
    const menuBar = document.querySelector(".menuBar");
    const scroll = document.querySelector(".scroll-menu");
    
    menu.addEventListener('click', function(){
        
        scroll.style.top = 0
        menuBar.classList.toggle('open');

        let att = menuBar.getAttribute('class');
        
        if(att == 'menuBar'){
            scroll.style.top = "-100%"
        }
       
    })
}

menuAnimate();

const load = document.querySelector("#loader");

setTimeout(() => {
    load.style.top = "-100%"
}, 3500);
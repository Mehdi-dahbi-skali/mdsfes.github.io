// gsap.from('.titleHero',3 ,{y:"-100%", ease: "power2.out"} );
// gsap.from('.bgimg',3 ,{x:"-100%",ease: "power2.out"} );
// gsap.from('.btn1',3,{y:"-100%", ease: "power2.out"});
// gsap.from('.arrow',3,{y:"-100%", ease: "power2.out"});

let tl = gsap.timeline({defaults: {opacity: 0}});

tl.to('.herosection',0.5,{ opacity:1, ease: "power2.out"})
  .to('.bgimg',1,{ opacity:1, ease: "power2.out"})
  .from('.titleHero',0.5 ,{y:"-100%", ease: "power2.out", stagger:0.5})
  .from('.btn1',0.5,{y:"-100%", ease: "power2.out"})
  .from('.arrow',0.5,{y:"-100%", ease: "power2.out"});

let about =document.querySelector(".about"); 
let anime2 = document.querySelector(".anime2");
let anime3 = document.querySelector(".anime3");
let contact = document.querySelector(".contact");
let imgcl = document.querySelector(".imgcl");
let cont=1;
let tl2 = gsap.timeline();
let tl3 = gsap.timeline();
let tl4 = gsap.timeline();
window.onscroll = () => {
    
    if (window.scrollY >= about.offsetTop/3 && cont == 1) {
        cont++;
        tl2.to('.about',.5,{ opacity:1 ,ease: "power2.out"})
           .from('.animtext',0.5,{  opacity:0 ,y:"-100%", ease: "power2.out", stagger:0.1});
    }
    if (window.scrollY >= about.offsetTop/2 && cont == 2) {
        cont++;
        tl3.from('.anime2',0.5,{  opacity:0 ,y:"-100%", ease: "power2.out", stagger:0.3});
    }
    if (window.scrollY >= contact.offsetTop/2 && cont == 3) {
        cont++;
        tl4.from('.anime3',0.5,{  opacity:0 ,y:"-100%", ease: "power2.out", stagger:0.3});
    }
    

}

imgcl.addEventListener('click',()=>{
    imgcl.classList.toggle("flipInX");

});

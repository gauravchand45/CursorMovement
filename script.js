let rect=document.querySelector('.rect');
let width=rect.getBoundingClientRect().width;
let height=rect.getBoundingClientRect().height;
window.addEventListener("mousemove",function(det){
    let xmove=gsap.utils.mapRange(0 , window.innerWidth , width , window.innerWidth-width , det.clientX);
    let ymove=gsap.utils.mapRange(0, window.innerHeight ,height-20 , window.innerHeight-height+20 ,det.clientY);
    // console.log(det.clientX);
    // console.log(move);
    gsap.to('.rect',{
        left: xmove+"px",
        top: ymove+"px",
        ease: "power2.out"
        
    });
});
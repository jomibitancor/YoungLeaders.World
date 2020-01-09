

const t1 = new TimelineLite();

t1.fromTo('#container-2', 10, {opacity: "0", left:"200%"}, {opacity: "1", left:"50%"});
t1.fromTo('#container-3', 10, {opacity: "0", left:"-200%"}, {opacity: "1", left:"50%"});
t1.fromTo('#container-4', 10, {opacity: "0", left:"200%"}, {opacity: "1", left:"50%"});
t1.fromTo('#container-5', 10, {opacity: "0", left:"-200%"}, {opacity: "1", left:"50%"});
t1.fromTo('#container-6', 10, {opacity: "0", left:"200%"}, {opacity: "1", left:"50%"});
t1.to('#container-1', 5, {opacity: "1"});
t1.to('#container-1', 5, {opacity: "0", delay:5} );
t1.fromTo('#container-3', 5, {opacity: "1"}, {opacity: "0", left:"60%"});
t1.fromTo('#container-4', 5, {opacity: "1"}, {opacity: "0", left:"60%"});
t1.fromTo('#container-5', 5, {opacity: "1"}, {opacity: "0", left:"60%"});
t1.fromTo('#container-6', 5, {opacity: "1"}, {opacity: "0", left:"60%"});

// ! VISION
t1.to('#container-2', 5, {top: "20%"});
t1.to('#h1-2', 5, {fontSize:"80px"});
t1.fromTo('#triangle', 5, {transform:"scale(0)", top:"200%"},{transform:"scale(1)", top:"30%"});
t1.fromTo('#triangle', 5, {transform:"translateX(-50%)"},{transform:"translateX(-50%)"}, "-=5");
t1.fromTo('#vision-desc', 5, {opacity:"0"}, {opacity:"1"});
t1.to('#vision-desc', 15, {opacity:"1"});



// ! MISSION
t1.to('#triangle', 20, {left:"70%", transform:"scale(0.5)"});
t1.fromTo('#arrow', 20, {top:"-5%"},{top: "-5%"});

t1.to('#container-2', 5, {opacity:"0"});
t1.to('#vision-desc', 5, {opacity:"0"});



const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({triggerElement: '#section2', triggerHook:0, duration: 3000})
    .setPin('#section2')
    .setTween(t1)
    .addTo(controller);

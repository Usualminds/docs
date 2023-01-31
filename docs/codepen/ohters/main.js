// let ct = document.querySelector(".container");
// let logo = document.querySelector(".logo");

// gsap.to([logo], {
//     duration: 6,
//     x: 500,
//     y: 200,
//     rotation: 360,
//     backgroundColor: "#8d3dae",

//     // repeat: 1,
//     // yoyo: true,

//     // delay: 1,
//     // repeatDelay: 2,
//     ease: "power1.inOut",
// });

// let obj = { myNum: 10, myColor: "red" };

// gsap.to(obj, {
//     myNum: 200,
//     myColor: " blue ",
//     onUpdate: () => console.log(obj.myNum, obj.myColor),
// });
// let tl = gsap.timeline();

// tl.to(".green", { x: 60, duration: 2 });
// tl.to(".purple", { x: 60, duration: 1 });
// tl.to(".orange", { x: 60, duration: 1 });

let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

tl.to(".green", { rotation: 360 });
tl.to(".purple", { rotation: 360 });
tl.to(".orange", { rotation: 360 });

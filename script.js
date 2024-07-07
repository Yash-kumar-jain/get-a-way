// $('#text p').textillate({ in: { effect: 'rollIn' } });
 window.addEventListener('resize', function (){ 
 'use strict';
 window.location.reload(); 
})
function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    locoScroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
    });
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
}
init()













var nav = document.querySelector("nav")
document.addEventListener("wheel",function(dets){
    if (dets.wheelDelta<0){
    nav.style.transform="translate(0,-100%)"
}
    else{
    nav.style.transform="translate(0,0)"
}
})


const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

var p4h1 = document.querySelectorAll("#page4 h1");
p4h1.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (dets) {
        var i = dets.target.id;
        var j = 2 * i - 1;
        var img = dets.target.parentNode.childNodes;
        img[j].style.opacity = 1;
        elem.style.color = "#1f1f1f";
        elem.style.fontSize = 63 + "px";
        elem.style.zIndex = 3;
    });
});
p4h1.forEach(function (elem) {
    elem.addEventListener("mouseleave", function (dets) {
        elem.style.color = "#f7e8e8";
        elem.style.fontSize = 60 + "px";
        elem.style.zIndex = 2;
        var i = dets.target.id;
        var j = 2 * i - 1;
        var img = dets.target.parentNode.childNodes;
        img[j].style.opacity = 0;
    });
});




var navh2 = document.querySelectorAll("nav h2");

navh2.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
        // console.log(elem.target.id);
        
        var h2 = document.getElementById(elem.target.id);
        gsap.to(h2, {
            scale: 1.2,
            color: "#cb568d",
            fontFamily: "helvetica",
            fontWeight: "600",
        });
        
    });
});
navh2.forEach(function (elem) {
    elem.addEventListener("mouseleave", function (elem) {
        // console.log(elem.target.id);
        var h2 = document.getElementById(elem.target.id);
        gsap.to(h2, {
            scale: 1,
            color: "#1b365d",
            fontFamily: "",
            fontWeight: "500",
        });
        
    });
});
gsap.from("#page1 #p1 #right",{
    x:500,
    scale:0.5,
    // duration:1,
    delay:-0.1,
    rotate:50,
    ease:"power4.inOut"
},"a")

gsap.from("#page1 #p1 #left",{
    x:-500,
    delay:-0.1,
    scale:0.5,
    rotate:-90,
    ease:"power4.inOut"
},"a")

gsap.to("#coms",{
    transform:"translate(-100%)",
    // yoyo:true,
    repeat:-1,
    duration:7,
    ease:"linear"
})
gsap.to("#coms2",{
    transform:"translate(-100%)",
    // yoyo:true,
    repeat:-1,
    duration:7,
    ease:"linear"
})
gsap.to("#coms3",{
    transform:"translate(0%)",
    // yoyo:true,
    repeat:-1,
    duration:7,
    ease:"linear"
})
gsap.to("#coms4",{
    transform:"translate(0%)",
    // yoyo:true,
    repeat:-1,
    duration:7,
    ease:"linear"
})

var info = document.querySelector("#page1 #p1 #info");
var left = document.querySelector("#page1 #p1 #left");
var right = document.querySelector("#page1 #p1 #right");
var clutter = "";

left.addEventListener("mouseenter", function (elem) {
    clutter = "";
    var value = left.querySelector('img').dataset.value;
    var name = left.querySelector('img').name;
    clutter = `<h1>${name}</h1>
                <p>${value}</p>`;
    info.innerHTML = clutter;
    info.style.display = "initial";
});

left.addEventListener("mouseleave", function (elem) {
    clutter = ``;
    info.innerHTML = clutter;
    info.style.display = "none";
});

right.addEventListener("mouseenter", function (elem) {
    clutter = "";
    var value = right.querySelector('img').dataset.value;
    var name = right.querySelector('img').name;
    clutter = `<h1>${name}</h1>
                <p>${value}</p>`;
    info.innerHTML = clutter;
    info.style.display = "initial";
});

right.addEventListener("mouseleave", function (elem) {
    clutter = ``;
    info.innerHTML = clutter;
    info.style.display = "none";
});




document.addEventListener("DOMContentLoaded", (event) => {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });
});

const style = document.createElement("style");
style.innerHTML = `
#custom-cursor {
    position: absolute;
    width: 40px;
    height: 40px;
    background: url('./images/cursor.png') no-repeat center center;
    background-size: contain;
    pointer-events: none;
    z-index: 1000;
}`;
document.head.appendChild(style);

var productsOrg = [
    {
        name: "Belgian Chocolate",
        review: "17",
        all: true,
        link: "./productsImages/p1.jpg",
        price: 135,
    },
    {
        name: "Mango",
        review: "7",
        all: true,
        link: "./productsImages/p2.jpg",
        price: 135,
    },
    {
        name: "Chocolate Brownie Fudge",
        review: "12",
        all: true,
        link: "./productsImages/p3.jpg",
        price: 135,
    },
    {
        name: "Keto Friendly Blueberry Cheesecake",
        review: "7",
        all: true,
        link: "./productsImages/p4.jpg",
        price: 175,
    },
    {
        name: "Chocolate Brownie Ice Cream Sandwich",
        review: "14",
        all: true,
        link: "./productsImages/p5.jpg",
        price: 200,
    },
    {
        name: "Blueberry Ice Cream Sandwich",
        review: "10",
        all: true,
        link: "./productsImages/p6.jpg",
        price: 200,
    },
    {
        name: "New York Style Cheesecake",
        review: "7",
        all: true,
        link: "./productsImages/p7.jpg",
        price: 340,
    },
    {
        name: "Blueberry Cheesecake",
        review: "9",
        all: true,
        link: "./productsImages/p8.jpg",
        price: 340,
    },
    {
        name: "Brownie Crunch Ice Cream Bar",
        review: "0",
        all: false,
        link: "./productsImages/p9.jpg",
        price: 135,
    },
    {
        name: "Choco Hazelnut Crunch Ice Cream Bar",
        review: "0",
        all: false,
        link: "./productsImages/p10.jpg",
        price: 135,
    },
    {
        name: "Popsicle Party Pack",
        review: "1",
        all: true,
        link: "./productsImages/p11.jpg",
        price: 585,
    },
    {
        name: "Double Choco Cheesecake",
        review: "9",
        all: true,
        link: "./productsImages/p13.jpg",
        price: 340,
    },
    {
        name: "Classic Pineapple Pastry",
        review: "0",
        all: false,
        link: "./productsImages/p14.jpg",
        price: 176,
    },
    {
        name: "Dutch Truffle Pastry",
        review: "0",
        all: false,
        link: "./productsImages/p15.jpg",
        price: 235,
    },
    {
        name: "Choco Almond Crunch Pastry",
        review: "0",
        all: false,
        link: "./productsImages/p16.jpg",
        price: 341,
    },
    {
        name: "Tender Coconut Litchi Ice Pop",
        review: "0",
        all: false,
        link: "./productsImages/p17.jpg",
        price: 117,
    },
    {
        name: "Strawberry Raspberry Ice Pop",
        review: "0",
        all: false,
        link: "./productsImages/p18.jpg",
        price: 117,
    },
    {
        name: "Black Forest Ice Cream Pastry",
        review: "2",
        all: true,
        link: "./productsImages/p19.jpg",
        price: 175,
    },
    {
        name: "Get-A-Way X Malaika Chocolate Overload 125ml",
        review: "2",
        all: true,
        link: "./productsImages/p20.jpg",
        price: 117,
    },
    {
        name: "Get-A-Way x Malaika Mocha Almond 125ml",
        review: "1",
        all: true,
        link: "./productsImages/p21.jpg",
        price: 117,
    },
    {
        name: "Strawberry Cheesecake 125ml",
        review: "7",
        all: true,
        link: "./productsImages/p22.jpg",
        price: 135,
    },
    {
        name: "Malai Kulfi",
        review: "12",
        all: true,
        link: "./productsImages/p23.jpg",
        price: 117,
    },
    {
        name: "Rose Kulfi",
        review: "10",
        all: true,
        link: "./productsImages/p24.jpg",
        price: 117,
    },
    {
        name: "Roasted Almond Kulfi",
        review: "10",
        all: true,
        link: "./productsImages/p25.jpg",
        price: 117,
    },
    {
        name: "Cola Blast Ice Pop",
        review: "9",
        all: true,
        link: "./productsImages/p26.jpg",
        price: 117,
    },
    {
        name: "Guava Chilli Ice Pop",
        review: "12",
        all: true,
        link: "./productsImages/p27.jpg",
        price: 117,
    },
    {
        name: "Orange Ice Pop",
        review: "9",
        all: true,
        link: "./productsImages/p28.jpg",
        price: 117,
    },
    {
        name: "Get-A-Way Six Pack",
        review: "1",
        all: true,
        link: "./productsImages/p29.jpg",
        price: 872,
    },
    {
        name: "Get-A-Way Ten Pack",
        review: "0",
        all: false,
        link: "./productsImages/p30.jpg",
        price: 1394,
    },
    {
        name: "Sicilian Pistachio 125ml",
        review: "6",
        all: true,
        link: "./productsImages/p31.jpg",
        price: 135,
    },
    {
        name: "Keto Friendly Very Berry",
        review: "6",
        all: true,
        link: "./productsImages/p32.jpg",
        price: 175,
    },
    {
        name: "Keto Pack",
        review: "1",
        all: true,
        link: "./productsImages/p33.jpg",
        price: 525,
    },
    {
        name: "Apple Pie 125ml",
        review: "0",
        all: false,
        link: "./productsImages/p34.jpg",
        price: 117,
    },
    {
        name: "Vanilla Choco Bite 125ml",
        review: "0",
        all: false,
        link: "./productsImages/p35.jpg",
        price: 117,
    },
    {
        name: "Milk Chocolate Bar | Zero Added Sugar",
        review: "0",
        all: false,
        link: "./productsImages/p36.jpg",
        price: 135,
    },
    {
        name: "Dark Chocolate Bar | Zero Added Sugar",
        review: "0",
        all: false,
        link: "./productsImages/p37.jpg",
        price: 150,
    },
    {
        name: "Dark Chocolate Sea Salt Bar | Pack of 3",
        review: "0",
        all: false,
        link: "./productsImages/p38.jpg",
        price: 450,
    },

    {
        name: "Dark Chocolate Bar | Pack of 3",
        review: "0",
        all: false,
        link: "./productsImages/p40.jpg",
        price: 450,
    },
    {
        name: "Fruit & Nut Milk Chocolate Bar | Pack of 3",
        review: "0",
        all: false,
        link: "./productsImages/p41.jpg",
        price: 450,
    },
    {
        name: "Milk Chocolate Bar | Pack of 3",
        review: "0",
        all: false,
        link: "./productsImages/p42.jpg",
        price: 405,
    },
    {
        name: "Assorted Chocolate Bars | Pack of 4",
        review: "0",
        all: false,
        link: "./productsImages/p43.jpg",
        price: 585,
    },
    {
        name: "Dark Chocolate Sea Salt Bar | Zero Added Sugar",
        review: "0",
        all: false,
        link: "./productsImages/p44.jpg",
        price: 150,
    },
    {
        name: "GAW x Urban Monkey Cap | Limited Edition",
        review: "0",
        all: false,
        link: "./productsImages/p12.jpg",
        price: 999,
    },
];

getProduct(productsOrg);
document
    .getElementById("searchInput")
    .addEventListener("input", function (event) {
        const query = document.getElementById("searchInput").value;

        const products = productsOrg.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        getProduct(products);
    });

    gsap.to("#p7Reviews", {
        x: "-50%",
        pin:true,
        scrollTrigger: {
            trigger: "#p7Reviews",
            scroller: "#main",
            scrub: true,
            // markers: true,
            pin: true,
            start: "top top",
            end: "+=100%"
        }
    },"a");







function getProduct(products) {
    const fullDiv = document.getElementById("full");
    var productItems = "";
    var fill = "./images/5star.png";
    var line = "./images/0star.png";
    console.log(fill);
    products.forEach(function (elem) {
        var star = elem.all ? fill : line;

        productItems += `<div class="items">
    <img src="${elem.link}" alt="">
    <h1>${elem.name}</h1>
    <p id="ptag"><img src="${star}" alt=""></p>
    <p> ${elem.review} reviews</p>
    <h2>From Rs. ${elem.price}  </h2>
    <button>Add to cart</button>
    </div>`;
    });

    console.log(productItems);

    fullDiv.innerHTML = productItems;
}



let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slides = document.querySelectorAll(".item");
let autoSlideInterval;

function handleVideoPlayback(slides) {
    slides.forEach((slide) => {
        let video = slide.querySelector(".video");
        let contentBox = slide.querySelector(".content-box");
        if (video) {
            video.pause();
            video.currentTime = 0;
            video.removeEventListener("ended", onVideoEnded);
            if (contentBox) {
                contentBox.style.display = "block";
            }
        }
    });

    let activeSlide = document.querySelector(".slide .item:nth-child(1)"); // Change 2 to 1
    let activeVideo = activeSlide.querySelector(".video");
    let activeContentBox = activeSlide.querySelector(".content-box");
    if (activeVideo) {
        activeVideo.muted = false;
        activeVideo.play();
        if (activeContentBox) {
            activeContentBox.style.display = "none";
        }
        activeVideo.addEventListener("ended", onVideoEnded);
        clearInterval(autoSlideInterval);
    }
}

function onVideoEnded() {
    startAutoSlide();
}

function nextSlide() {
    let item = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(item[0]);
    handleVideoPlayback(item);
}

function prevSlide() {
    let item = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(item[item.length - 1]);
    handleVideoPlayback(item);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

next.addEventListener("click", function () {
    nextSlide();
    clearInterval(autoSlideInterval);
    startAutoSlide();
});

prev.addEventListener("click", function () {
    prevSlide();
    clearInterval(autoSlideInterval);
    startAutoSlide();
});

handleVideoPlayback(slides);
startAutoSlide();


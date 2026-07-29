// ==============================
// Elements
// ==============================

const card = document.querySelector(".card");
const joinBtn = document.querySelector(".join-btn");
const boxes = document.querySelectorAll(".box");
const liveBadge = document.querySelector(".live-badge");

// ==============================
// Mouse Tilt (Desktop Only)
// ==============================

if (window.innerWidth > 768) {

card.addEventListener("mousemove", (e) => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = (x / rect.width - 0.5) * 10;
const rotateX = (0.5 - y / rect.height) * 10;

card.style.transform = `
perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
`;

});

card.addEventListener("mouseleave", () => {

card.style.transform =
"perspective(1200px) rotateX(0deg) rotateY(0deg)";

});

}

// ==============================
// Telegram Button
// ==============================

joinBtn.addEventListener("click", function (e) {

e.preventDefault();

const url = this.href;

let opened = false;

// Ripple

const circle = document.createElement("span");

const rect = this.getBoundingClientRect();

const size = Math.max(rect.width, rect.height);

circle.style.width = size + "px";
circle.style.height = size + "px";

circle.style.left =
(e.clientX - rect.left - size / 2) + "px";

circle.style.top =
(e.clientY - rect.top - size / 2) + "px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(() => {

circle.remove();

},700);

// Meta Lead

fbq('track','Lead',{},{

event_callback:function(){

if(!opened){

opened=true;

window.open(url,"_blank");

}

}

});

// Fallback

setTimeout(()=>{

if(!opened){

opened=true;

window.open(url,"_blank");

}

},800);

});

// ==============================
// Scroll Reveal
// ==============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

boxes.forEach((box)=>{

observer.observe(box);

});

// ==============================
// Live Badge
// ==============================

setInterval(()=>{

liveBadge.classList.toggle("active");

},900);

// ==============================
// Counter
// ==============================

const numbers=document.querySelectorAll(".box h2");

numbers.forEach(el=>{

const text=el.innerText;

const match=text.match(/\d+/);

if(!match)return;

const end=parseInt(match[0]);

let start=0;

const timer=setInterval(()=>{

start+=Math.ceil(end/50);

if(start>=end){

start=end;

clearInterval(timer);

}

el.innerText=text.replace(match[0],start);

},20);

});
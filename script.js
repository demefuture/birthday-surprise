// typing animation

const text = "🎉 سالگرہ مبارک طوبہ 🎉";
let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("title").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter,100);

}

}

typeWriter();


// balloons

const container = document.getElementById("balloon-container");

function createBalloon(){

const balloon = document.createElement("div");

balloon.classList.add("balloon");

const colors = ["red","blue","yellow","green","purple","orange","pink"];

balloon.style.background = colors[Math.floor(Math.random()*colors.length)];

balloon.style.left = Math.random()*100+"%";

balloon.style.animationDuration = (8 + Math.random()*5)+"s";

container.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},12000);

}

setInterval(createBalloon,500);


// celebration

function celebrate(){

document.getElementById("message").style.display="block";

startConfetti();

}


// confetti

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti=[];

for(let i=0;i<200;i++){

confetti.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*6+2,
d:Math.random()*150

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="pink";

ctx.beginPath();

for(let i=0;i<confetti.length;i++){

let c = confetti[i];

ctx.moveTo(c.x,c.y);
ctx.arc(c.x,c.y,c.r,0,Math.PI*2,true);

}

ctx.fill();

update();

}

function update(){

for(let i=0;i<confetti.length;i++){

let c = confetti[i];

c.y += Math.cos(c.d)+1;

if(c.y > canvas.height){

c.y = 0;

}

}

}

function startConfetti(){

setInterval(draw,20);

}

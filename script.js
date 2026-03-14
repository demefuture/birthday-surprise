function startCelebration(){

document.getElementById("celebration").style.display="block";

startConfetti();

alert("🎉 Happy Birthday! Hope your day is amazing!");
}

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for(let i=0;i<150;i++){

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

c.x += Math.sin(0);

if(c.y > canvas.height){

c.y = 0;

}

}

}

function startConfetti(){

setInterval(draw,20);

}

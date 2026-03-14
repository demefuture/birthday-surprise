function startSequence() {
    // 1. Hide the starter button
    gsap.to("#interaction-viewer", {
        opacity: 0, duration: 0.5, onComplete: () => {
            document.getElementById("interaction-viewer").classList.add("hidden");
            document.getElementById("flower-stage").classList.remove("hidden");
            runFlowerTimeline();
        }
    });
}

function runFlowerTimeline() {
    // Create a main timeline that chain animations together
    const tl = gsap.timeline();

    // --- ROSE SEQUENCE ---
    // 1. Rose Stem Rises up from the bottom
    tl.to("#rose-svg", {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out"
    });

    // 2. Rose Petals Bloom (Scale up and rotate slightly)
    tl.to("#rose-petals", {
        scale: 1,
        duration: 2.5,
        ease: "elastic.out(1, 0.5)" // Gives a nice organic bounce
    }, "-=0.5"); // Starts 0.5s before stem finishes rising

    // 3. Pause while the rose is open
    tl.to({}, { duration: 2 });

    // 4. Fade Rose out
    tl.to("#rose-svg", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            document.getElementById("rose-svg").classList.add("hidden");
        }
    });


    // --- SUNFLOWER SEQUENCE ---
    // 5. Show Sunflower SVG
    tl.set("#sunflower-svg", { opacity: 1, y: 100 }); // Setup position

    // 6. Sunflower Stem Rises
    tl.to("#sunflower-svg", {
        y: 0,
        duration: 2,
        ease: "power2.out"
    });

    // 7. Sunflower Head Blooms
    tl.to("#sunflower-head", {
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)" // A different blooming feel
    }, "-=0.5");

    // 8. Pause while sunflower is open
    tl.to({}, { duration: 2 });

    // 9. Fade Sunflower out
    tl.to("#sunflower-svg", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            document.getElementById("flower-stage").classList.add("hidden");
            revealFinalMessage();
        }
    });
}

function revealFinalMessage() {
    const finalMsg = document.getElementById("final-message");
    finalMsg.classList.remove("hidden");

    // Animate the final message appearing
    gsap.from("#final-message", {
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: "power3.out"
    });
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

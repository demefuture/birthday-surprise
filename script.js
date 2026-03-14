function startSequence() {
    gsap.to("#interaction-viewer", {
        opacity: 0, duration: 0.5, onComplete: () => {
            document.getElementById("interaction-viewer").classList.add("hidden");
            document.getElementById("flower-stage").classList.remove("hidden");
            runFlowerTimeline();
        }
    });
}

function runFlowerTimeline() {
    const tl = gsap.timeline();

    // ROSE
    tl.set("#rose-svg", { opacity: 1, y: 150 }); 
    tl.to("#rose-svg", { y: 0, duration: 2, ease: "power2.out" });
    tl.to("#rose-petals", { scale: 1, duration: 2, ease: "elastic.out(1, 0.3)" }, "-=1");
    tl.to("#rose-svg", { rotation: 5, duration: 1, yoyo: true, repeat: 2, ease: "sine.inOut" }, "-=1"); // Sway
    tl.to("#rose-svg", { opacity: 0, duration: 1, delay: 1 });

    // SUNFLOWER
    tl.set("#sunflower-svg", { opacity: 1, y: 150 });
    tl.to("#sunflower-svg", { y: 0, duration: 2, ease: "power2.out" });
    tl.to("#sunflower-head", { scale: 1, duration: 1.5, ease: "back.out(1.7)" }, "-=1");
    tl.to("#sunflower-svg", { rotation: -5, duration: 1, yoyo: true, repeat: 2, ease: "sine.inOut" }, "-=1"); // Sway
    tl.to("#sunflower-svg", { opacity: 0, duration: 1, delay: 1, onComplete: () => {
        revealFinalMessage();
    }});
}

function revealFinalMessage() {
    const finalMsg = document.getElementById("final-message");
    finalMsg.classList.remove("hidden");
    gsap.from("#final-message", { opacity: 0, scale: 0.8, duration: 1.5, ease: "power3.out" });
}

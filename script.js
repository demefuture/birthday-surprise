function startSurprise() {
    // 1. Hide the starter interface
    document.getElementById('interface-viewer').classList.add('hidden');

    // 2. Prepare and reveal the balloon stage
    const canvas = document.getElementById('balloon-stage');
    canvas.classList.remove('hidden');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 3. Initiate the balloon launch
    launchBalloons(canvas);
}

function launchBalloons(canvas) {
    const ctx = canvas.getContext('2d');

    // -- Balloon Configuration --
    // *Important:* Generating exactly 100,000 complex balloons will crash a browser.
    // We use a massive visual swarm (350+ simultaneously visible) to simulate "100,000."
    const balloonCount = 350; 
    let balloons = [];
    
    // Fun color palette
    const colors = [
        '#ff9ff3', // Pink
        '#feca57', // Yellow
        '#ff6b6b', // Red
        '#48dbfb', // Blue
        '#1dd1a1'  // Green
    ];

    // Create the balloon objects
    for (let i = 0; i < balloonCount; i++) {
        // Randomly set properties for each balloon
        const radius = Math.random() * 15 + 10; // Mix of sizes

        balloons.push({
            x: Math.random() * canvas.width,
            // Start well below the screen, scattered vertically
            y: canvas.height + (Math.random() * canvas.height * 1.5),
            radius: radius,
            color: colors[Math.floor(Math.random() * colors.length)],
            // Add a random delay so they don't all launch at once
            launchDelay: Math.random() * 50, // Delay in simulation steps
            speed: (Math.random() * 3) + 2 // Mix of rising speeds
        });
    }

    // Function to draw one balloon (simple version for performance)
    function drawBalloon(b) {
        ctx.fillStyle = b.color;
        
        // Draw the balloon body (oval/circle)
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();

        // Optional: Draw the "knot" at the bottom
        ctx.fillStyle = b.color;
        ctx.beginPath();
        ctx.moveTo(b.x, b.y + b.radius * 0.9);
        ctx.lineTo(b.x - b.radius * 0.4, b.y + b.radius * 1.3);
        ctx.lineTo(b.x + b.radius * 0.4, b.y + b.radius * 1.3);
        ctx.closePath();
        ctx.fill();
    }

    // Main animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame

        balloons.forEach(b => {
            // Apply a launch delay
            if (b.launchDelay > 0) {
                b.launchDelay--;
            } else {
                // Rise up
                b.y -= b.speed;
                // Add a gentle horizontal drift
                b.x += Math.sin(b.y / 20) * 0.5; 
            }

            drawBalloon(b);
        });

        // Loop the animation
        const animationId = requestAnimationFrame(animate);

        // Check if all balloons are off the top of the screen
        const allFinished = balloons.every(b => b.y < -b.radius * 2);

        if (allFinished) {
            cancelAnimationFrame(animationId);
            revealFinalMessage();
        }
    }

    // Start the animation
    animate();
}

function revealFinalMessage() {
    const finalMsg = document.getElementById('final-message');
    finalMsg.classList.remove('hidden');

    // Optional subtle fade-in effect via JavaScript
    gsap.from("#final-message", {
        opacity: 0,
        y: 20,
        duration: 2,
        ease: "power3.out"
    });
}

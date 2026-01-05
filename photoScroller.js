const marquee = document.getElementById("photoScroller");

// Clone content for seamless loop
marquee.innerHTML += marquee.innerHTML;

let speed = 0.6; // Normal speed
let slowSpeed = 0.3; // Hover speed
let currentSpeed = speed;
let translateX = 0;

function animate() {
  translateX -= currentSpeed;

  // Reset once half content is scrolled
  if (Math.abs(translateX) >= marquee.scrollWidth / 2) {
    translateX = 0;
  }

  marquee.style.transform = `translateX(${translateX}px)`;
  requestAnimationFrame(animate);
}

animate();

// Hover speed control
marquee.addEventListener("mouseenter", () => {
  currentSpeed = slowSpeed;
});

marquee.addEventListener("mouseleave", () => {
  currentSpeed = speed;
});

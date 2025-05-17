const light = document.querySelector(".light");
const grid = document.querySelector("#hex-grid");

grid.addEventListener("mousemove", (e) => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  light.style.left = `${e.clientX}px`;
  light.style.top = `${e.clientY + scrollTop}px`;
  light.style.opacity = 1;
});

grid.addEventListener("mouseleave", () => {
  light.style.opacity = 0;
});

grid.addEventListener("mouseenter", () => {
  light.style.opacity = 1;
});

window.addEventListener("scroll", () => {
  light.style.opacity = 0;
});

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

const texts = ["developer", "engineer"];

let current = 0;
const textBox = document.getElementById("textBox");

function typeText(text, i = 0) {
  if (i === 0) {
    textBox.textContent = "";
  }

  if (i < text.length) {
    textBox.textContent += text.charAt(i);
    setTimeout(() => typeText(text, i + 1), 60);
  } else {
    setTimeout(() => {
      textBox.classList.remove("blinking");
      textBox.classList.add("zoom-blur-out");

      setTimeout(() => {
        current = (current + 1) % texts.length;
        textBox.classList.remove("zoom-blur-out");
        textBox.classList.add("blinking");
        typeText(texts[current]);
      }, 800); // after zoom-blur
    }, 1500); // wait before blur
  }
}

typeText(texts[current]);

document.querySelectorAll(".button-wrapper").forEach((wrapper) => {
  const button = wrapper.querySelector(".glow-button");
  const glow = wrapper.querySelector(".glow");

  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    wrapper.style.setProperty("--mouse-x", `${x}px`);
    wrapper.style.setProperty("--mouse-y", `${y}px`);
    glow.style.left = `${x}px`;
  });

  wrapper.addEventListener("mouseleave", () => {
    wrapper.style.setProperty("--mouse-x", `100%`);
    wrapper.style.setProperty("--mouse-y", `50%`);
    glow.style.left = `100%`;
  });

  // Handle smooth scroll on click
  button.addEventListener("click", (e) => {
    // console.log(clicked);
    const targetSelector = button.getAttribute("data-target");
    const target = document.querySelector(targetSelector);
    if (target) {
      e.preventDefault(); // Prevent default button behavior
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const marqueeTrack = document.getElementById("marquee-track");
const text = marqueeTrack.children[0].outerHTML;

while (marqueeTrack.scrollWidth < marqueeTrack.parentElement.offsetWidth * 2) {
  marqueeTrack.insertAdjacentHTML("beforeend", text);
}

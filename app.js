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

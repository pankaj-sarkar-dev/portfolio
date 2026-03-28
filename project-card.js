class ProjectCard extends HTMLElement {
  connectedCallback() {
    const img = this.getAttribute("img");
    const title = this.getAttribute("title");
    const subtitle = this.getAttribute("subtitle");
    const icon = this.getAttribute("icon");
    const test = this.getAttribute("test");
    console.log("test-->", test);

    this.innerHTML = `
        <div class="card">
          <div class="card-content">
            <div class="card-image">
              <img src="${img}" alt="${title}" />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="${icon}"></i>
                <div class="card-info-title text-white">
                  <h3 class="text-medium font-semibold my-2">${title}</h3>
                  <h4 class="text-sm">${subtitle}</h4>
                </div>
              </div>
              <div>
              js
              </div>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define("project-card", ProjectCard);

const projects = [
  {
    img: "./assets/img/projects/hcpn-0.png",
    title: "ClinicianCore by HCPN",
    subtitle: "Cross-Platform Healthcare Communication Platform",
    icon: "fa-duotone fa-apartment",
    test: ["ahah", "uuhu"],
  },
  {
    img: "./assets/img/projects/drm-1.png",
    title: "DoctorM",
    subtitle: "Luxury Eyewear E-Commerce Platform (Middle Eastern Client)",
    icon: "fa-duotone fa-apartment",
  },
  {
    img: "./assets/img/projects/synchrony-1.jpeg",
    title: "Synchrony",
    subtitle: "Luxury Eyewear E-Commerce Platform (Middle Eastern Client)",
    icon: "fa-duotone fa-apartment",
  },
  {
    img: "./assets/img/projects/upgrade-1.png",
    title: "Upgrade Boutique",
    subtitle: "Places to be apart. Wait, what?",
    icon: "fa-duotone fa-apartment",
  },
  {
    img: "./assets/img/projects/vaasist-1.png",
    title: "Vaasist",
    subtitle: "Places to be apart. Wait, what?",
    icon: "fa-duotone fa-apartment",
  },
  {
    img: "./assets/img/projects/jettwings-1.png",
    title: "Jettwings",
    subtitle: "Places to be apart. Wait, what?",
    icon: "fa-duotone fa-apartment",
  },
];

const container = document.getElementById("cards");

projects.forEach((project) => {
  const card = document.createElement("project-card");

  card.setAttribute("img", project.img);
  card.setAttribute("title", project.title);
  card.setAttribute("subtitle", project.subtitle);
  card.setAttribute("icon", project.icon);
  card.setAttribute("test", project.test);

  container.appendChild(card);
});

// Cards transitions
const cards = document.querySelectorAll(".card");
VanillaTilt.init(cards);

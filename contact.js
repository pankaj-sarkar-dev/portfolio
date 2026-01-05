document
  .getElementById("contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await fetch("https://formsubmit.co/pankaj.sarkar.dev@gmail.com", {
      method: "POST",
      body: formData,
    });
  });

document
  .getElementById("contact-button")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    await fetch("https://formsubmit.co/pankaj.sarkar.dev@gmail.com", {
      method: "POST",
      body: formData,
    });
  });

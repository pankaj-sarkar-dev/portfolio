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

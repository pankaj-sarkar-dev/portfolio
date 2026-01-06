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
    try {
      e.preventDefault();

      document.getElementById("spinner").classList.remove("hidden");

      const form = document.getElementById("contact-form");
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log({ data });
      const isValid = await validateContactForm(data);
      if (!isValid) {
        document.getElementById("spinner").classList.add("hidden");
        return;
      }

      const response = await fetch("https://formspree.io/f/xvgadyqy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      await response.json();
      document.getElementById("spinner").classList.add("hidden");

      if (response.ok) {
        document.getElementById("response").innerText =
          "Your message is successfully sent.";
        document.getElementById("response").classList.remove("hidden");
        setTimeout(() => {
          document.getElementById("response").classList.add("hidden");
        }, 6000);
        form.reset();
      } else {
        document.getElementById("response").innerText =
          "Something went wrong, please try again later.";

        document.getElementById("response").classList.remove("hidden");
        setTimeout(() => {
          document.getElementById("response").classList.add("hidden");
        }, 6000);
      }
    } catch (e) {
      console.error("Error : ", e);
    }
  });

async function validateContactForm(data) {
  let isValidName,
    isValidMail,
    isValidMessage = false;
  if (/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(data?.name || "")) {
    document.getElementById("error-name").classList.add("hidden");
    isValidName = true;
  } else {
    document.getElementById("error-name").classList.remove("hidden");
    isValidName = false;
  }

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data?.email || "")) {
    document.getElementById("error-mail").classList.add("hidden");
    isValidMail = true;
  } else {
    document.getElementById("error-mail").classList.remove("hidden");
    isValidMail = false;
  }

  if (data.message) {
    document.getElementById("error-message").classList.add("hidden");
    isValidMessage = true;
  } else {
    document.getElementById("error-message").classList.remove("hidden");
    isValidMessage = false;
  }

  return isValidName && isValidMail && isValidMessage ? true : false;
}

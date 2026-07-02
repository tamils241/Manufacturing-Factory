document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quoteForm");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    status.textContent = "Inquiry captured. Connect EmailJS keys in contact.js to send it live.";
    form.reset();
  });
});

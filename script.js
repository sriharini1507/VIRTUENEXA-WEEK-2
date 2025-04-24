document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach((faq) => {
    const text = faq.textContent.toLowerCase();
    faq.style.display = text.includes(searchTerm) ? "block" : "none";
  });
});

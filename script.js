const searchInput = document.getElementById("searchInput");
const faqItems = document.querySelectorAll(".faq-item");

searchInput.addEventListener("keyup", () => {
  const query = searchInput.value.toLowerCase();
  faqItems.forEach(item => {
    const question = item.querySelector("h3").textContent.toLowerCase();
    item.style.display = question.includes(query) ? "block" : "none";
  });
});

console.log("TopNotch Assets Loaded Successfully");


function searchModels() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const models = document.querySelectorAll(".model-card");

  models.forEach(card => {
    const title = card.querySelector(".model-title").innerText.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}






//spotlight slide show

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;
const interval = 3000; // 1.5 seconds

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

/* requestAnimationFrame-based timer (smoothest possible) */
let lastTime = performance.now();

function animate(now) {
  if (now - lastTime >= interval) {
    nextSlide();
    lastTime = now;
  }
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);




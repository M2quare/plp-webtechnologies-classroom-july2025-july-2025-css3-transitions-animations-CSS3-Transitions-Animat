// Local vs Global scope example
let globalCount = 0;

// Function with parameters & return
function addNumbers(a, b) {
  return a + b; 
}

// Reusable function to toggle animation
function toggleAnimation(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.toggle(className);
  globalCount++;
  console.log("Animations triggered:", globalCount);
}

// DOM interactions
document.getElementById("animateBtn").addEventListener("click", () => {
  toggleAnimation("box", "animate"); // animate box
  showModal(); // open modal
});

// Function to show modal
function showModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  modal.classList.add("show");
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 500);
}

document.getElementById("closeModal").addEventListener("click", closeModal);

// Example function call using return
console.log("5 + 7 =", addNumbers(5, 7));

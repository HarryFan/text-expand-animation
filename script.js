const textElement = document.getElementById("text");
const word = "Developer";
const steps = [
  "     Dr     ",
  "    Deer    ",
  "   Devper   ",
  "  Deveoper  ",
  "Developer   "
];
let currentStep = 0;

function animateText() {
  if (currentStep < steps.length) {
    textElement.textContent = steps[currentStep];
    currentStep++;
    setTimeout(animateText, 500);
  }
}

animateText();

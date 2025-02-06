
document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".btn");
  
    let currentInput = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.textContent;
  
        if (button.classList.contains("equal")) {
          try {
            currentInput = eval(currentInput).toString(); 
          }
          // Invalid input
          catch {
            currentInput = "Error"; 
          }
        } else if (button.classList.contains("clear")) {
          currentInput = "";
        } 
        else if (button.classList.contains("back")) {
          currentInput = currentInput.slice(0, -1);
        } 
        else if (value === "√") {
          if (currentInput) {
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
          }
        } 
        else if (value === "%") {
          if (currentInput) {
            currentInput = (parseFloat(currentInput) / 100).toString();
          }
        } 
        else {
          // Append numbers and operators
          currentInput += value; 
        }
  
        // Update display
        display.textContent = currentInput || "0"; 
      });
    });
  });
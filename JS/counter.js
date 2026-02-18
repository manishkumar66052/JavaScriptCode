
let count = 0;

const display = document.getElementById("counterDisplay");

const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const  restBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener("click", () => {
    count++;
    display.innerText = count;
    
});

decrementBtn.addEventListener("click", () => {
    count--;
    display.innerText = count;
    
});


restBtn.addEventListener("click", () => {
    count = 0;
      display.innerText = count;  
});




const buttons = document.querySelectorAll(".button");
const stages = document.querySelectorAll(".stage");
buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        stages[index].classList.toggle("open");
    });
});
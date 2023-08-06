// read full reviews accordion 

const click = document.querySelectorAll('.click');
const accordion = document.querySelectorAll(".down");

click.forEach((item, index) => {
    item.addEventListener("click", () => {
        accordion[index].classList.toggle('up');
        item.classList.toggle("open")
    })
});
const click = document.querySelectorAll('.click');
const accordion = document.querySelectorAll(".down");
const openin = document.querySelectorAll(".opening");
const close = document.querySelectorAll(".close")

click.forEach((item, index) => {
    item.addEventListener("click", () => {
        close[index].classList.toggle("bur");
        openin[index].classList.toggle("bir");
        accordion[index].classList.toggle('up');
        item.classList.toggle("open")
    })
});
const click = document.querySelector('.click');
const accordion = document.querySelector(".down");

click.addEventListener("click", function(){
    accordion.classList.toggle("up");
    click.classList.toggle("open");
})
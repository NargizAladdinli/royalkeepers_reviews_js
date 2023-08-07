const modal = document.querySelector(".modals");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close")

const openModal = () => {
    modal.classList.remove("hidden")
}
openModalBtn.addEventListener("click", openModal);

const closeModal = () => {
    modal.classList.add("hidden");
}
closeModalBtn.addEventListener("click", closeModal)
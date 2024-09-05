//?-- Element --//
const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const modalBackdrop = document.querySelector(".modal-backdrop");

//!-- Toggle Func --//
const toggleModal = () => {
  modalBackdrop.classList.toggle("show-modal");
};

//!-- Open Func --//
openButton.addEventListener("click", () => {
  toggleModal();
});

//!-- Close Func --//
closeButton.addEventListener("click", () => {
  toggleModal();
});

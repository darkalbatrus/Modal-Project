//?-- Element --//
const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const modalBackdrop = document.querySelector(".modal-backdrop");

//!-- Open Func --//
openButton.addEventListener("click", () => {
  modalBackdrop.classList.add("show-modal");
});

//!-- Close Func --//
closeButton.addEventListener("click", () => {
  modalBackdrop.classList.remove("show-modal");
});

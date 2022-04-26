// MODAL
function toggleModal() {
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");

  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
}

export { toggleModal };

import "./style.css";
import { toggleModal } from "./UI/ui";

const newTaskBtn = document.getElementById("new-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const overlay = document.querySelector(".overlay");

// Open/close modal event listener
[newTaskBtn, cancelBtn, overlay].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleModal();
  });
});
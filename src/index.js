import "./style.css";
import UI from "./UI/ui";
import projects from "./data/projects";

UI.displayProjects(projects);

const newTaskBtn = document.getElementById("new-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const overlay = document.querySelector(".overlay");

// Open/close modal event listener
[newTaskBtn, cancelBtn, overlay].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    UI.toggleModal();
  });
});

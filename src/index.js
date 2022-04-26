import "./style.css";
import UI from "./UI/ui";
import projects from "./data/projects";
import modal from "./UI/modal";
import saveProjectHandler from "./controllers/projectsController";
import saveTaskHandler from "./controllers/tasksController";

modal.setupModals();
UI.firstLoad();
UI.displayProjects(projects.data);
UI.displayTasks();

const saveProjectBtn = document.getElementById("save-project-btn");
saveProjectBtn.addEventListener("click", (e) => {
  saveProjectHandler(e);
  UI.displayProjects(projects.data);
  modal.closeAll();
});

const saveTaskBtn = document.getElementById("save-task-btn");
saveTaskBtn.addEventListener("click", (e) => {
  saveTaskHandler(e);
  UI.displayTasks(projects.data);
  modal.closeAll();
});

import "./style.css";
import UI from "./UI/ui";
import projects from "./data/projects";
import modal from "./UI/modal";
import saveProjectHandler from "./controllers/projectsController";

modal.setupModals();
UI.displayProjects(projects.data);
UI.displayTasks(projects.data[0]);

const saveProjectBtn = document.getElementById("save-project-btn");
saveProjectBtn.addEventListener("click", (e) => {
  saveProjectHandler(e);
  UI.displayProjects(projects.data);
  modal.closeAll();
});

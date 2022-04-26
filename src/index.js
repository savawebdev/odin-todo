import "./style.css";
import UI from "./UI/ui";
import projects from "./data/projects";
import modal from "./UI/modal";

modal.setupModals();
UI.displayProjects(projects);
UI.displayTasks(projects[0]);

import projects from "../data/projects";
import { uniqueID } from "../helpers/helpers";

const saveProjectHandler = (e) => {
  e.preventDefault();

  const projectTitle = document.getElementById("project-title");
  const newProject = {
    id: uniqueID(),
    title: projectTitle.value,
  };

  projects.add(newProject);
};

export default saveProjectHandler;

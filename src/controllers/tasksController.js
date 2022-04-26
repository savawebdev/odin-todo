import tasks from "../data/tasks";
import { uniqueID } from "../helpers/helpers";

const saveTaskHandler = (e) => {
  e.preventDefault();

  const contentHeader = document.querySelector(".content-header");
  const projectId = contentHeader.getAttribute("data-project-id");

  const taskTitle = document.getElementById("task-title");
  const taskDescription = document.getElementById("task-description");
  const taskDueDate = document.getElementById("task-due-date");
  const taskPriority = document.getElementById("task-priority");

  const newTask = {
    id: uniqueID(),
    title: taskTitle.value,
    description: taskDescription.value,
    dueDate: taskDueDate.value,
    priority: taskPriority.value,
    projectId,
  };

  tasks.add(newTask);
};

export default saveTaskHandler;

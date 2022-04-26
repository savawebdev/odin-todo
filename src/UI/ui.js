import tasks from "../data/tasks";

const UI = (() => {
  const contentHeader = document.querySelector(".content-header");

  const firstLoad = () => {
    contentHeader.setAttribute("data-project-id", "1");
  };
  // Create a new task card
  const createTaskCard = (title, description, dueDate, priority) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("card");

    const taskCardTitle = document.createElement("h4");
    taskCardTitle.classList.add("card-title");
    taskCardTitle.textContent = title;

    const taskCardDescription = document.createElement("p");
    taskCardDescription.classList.add("card-description");
    taskCardDescription.textContent = description;

    const taskCardDueDate = document.createElement("p");
    taskCardDueDate.classList.add("card-due-date");
    taskCardDueDate.textContent = `Due Date: ${dueDate}`;

    const taskCardPriority = document.createElement("p");
    taskCardPriority.classList.add("card-priority");
    taskCardPriority.textContent = `Priority: ${priority}`;

    taskCard.append(
      taskCardTitle,
      taskCardDescription,
      taskCardDueDate,
      taskCardPriority
    );

    return taskCard;
  };

  const displayProjects = (projects) => {
    const projectsList = document.querySelector(".projects-list");
    projectsList.innerHTML = "";

    projects.forEach((project) => {
      const newListItem = document.createElement("li");
      newListItem.classList.add("projects-list-item");
      newListItem.textContent = project.title;
      newListItem.setAttribute("data-project-id", project.id);
      projectsList.appendChild(newListItem);
    });

    const projectsListItems = document.querySelectorAll(".projects-list-item");
    projectsListItems.forEach((item) => {
      item.addEventListener("click", () => {
        const projectId = item.getAttribute("data-project-id");
        const project = projects.find((element) => element.id == projectId);
        contentHeader.textContent = project.title;
        contentHeader.setAttribute("data-project-id", projectId);
        displayTasks();
      });
    });
  };

  const displayTasks = () => {
    const tasksElement = document.querySelector(".tasks");
    const taskCards = document.querySelectorAll(".card");
    taskCards.forEach((card) => {
      card.remove();
    });

    const projectId = contentHeader.getAttribute("data-project-id");

    tasks.data.forEach((task) => {
      if (task.projectId == projectId) {
        const taskCard = createTaskCard(
          task.title,
          task.description,
          task.dueDate,
          task.priority
        );

        tasksElement.appendChild(taskCard);
      }
    });
  };

  return { firstLoad, createTaskCard, displayProjects, displayTasks };
})();

export default UI;

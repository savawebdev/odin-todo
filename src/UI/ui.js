const UI = (() => {
  // Open/close modal
  const toggleModal = () => {
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".modal");

    overlay.classList.toggle("hidden");
    modal.classList.toggle("hidden");
  };

  // Create a new task card
  const createTaskCard = (title, descritpion, dueDate, priority) => {
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
    taskCardDueDate.textContent = dueDate;

    const taskCardPriority = document.createElement("p");
    taskCardPriority.classList.add("card-priority");
    taskCardPriority.textContent = priority;

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

    projects.forEach((project) => {
      const newListItem = document.createElement("li");
      newListItem.classList.add("projects-list-item");
      newListItem.textContent = project.name;
      newListItem.setAttribute("data-project-id", project.id);
      projectsList.appendChild(newListItem);
    });
  };

  return { toggleModal, createTaskCard, displayProjects };
})();

export default UI;

// Open/close modal
function toggleModal() {
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");

  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
}

// Create task card
function createTaskCard(title, description, dueDate, priority) {
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
}

export { toggleModal, createTaskCard };

const modal = (() => {
  const overlay = document.querySelector(".overlay");

  const open = (modalElement) => {
    overlay.classList.remove("hidden");
    modalElement.classList.remove("hidden");
  };

  const close = (modalElement) => {
    overlay.classList.add("hidden");
    modalElement.classList.add("hidden");
  };

  const setupModals = () => {
    const newTaskBtn = document.getElementById("new-task-btn");
    const cancelTaskBtn = document.getElementById("cancel-task-btn");
    const newTaskModal = document.getElementById("new-task-modal");

    const newProjectBtn = document.getElementById("new-project-btn");
    const cancelProjectBtn = document.getElementById("cancel-project-btn");
    const newProjectModal = document.getElementById("new-project-modal");

    const overlay = document.querySelector(".overlay");

    newTaskBtn.addEventListener("click", () => {
      open(newTaskModal);
    });

    cancelTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      close(newTaskModal);
    });

    newProjectBtn.addEventListener("click", () => {
      open(newProjectModal);
    });

    cancelProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      close(newProjectModal);
    });

    overlay.addEventListener("click", () => {
      close(newTaskModal);
      close(newProjectModal);
    });
  };

  return { setupModals };
})();

export default modal;

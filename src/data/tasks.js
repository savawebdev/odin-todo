const tasks = (() => {
  const data = [
    {
      id: 1,
      title: "Test",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, quos.",
      dueDate: "18/06/2022",
      priority: "high",
      projectId: 1,
    },
  ];

  const add = (task) => {
    data.push(task);
  };

  const remove = (task) => {
    const newData = data.filter((ele) => ele.id !== task.id);
    data = newData;
  };

  return { data, add, remove };
})();

export default tasks;

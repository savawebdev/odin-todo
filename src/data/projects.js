import { uniqueID } from "../helpers/helpers";

const projects = (() => {
  const data = [
    {
      id: uniqueID(),
      title: "Default Project",
    },
  ];

  const add = (project) => {
    data.push(project);
  };

  const remove = (project) => {
    const newData = data.filter((ele) => ele.id !== project.id);
    data = newData;
  };

  return { data, add, remove };
})();

export default projects;

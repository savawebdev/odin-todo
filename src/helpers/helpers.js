const uniqueID = () => {
  const g4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  return g4() + g4() + g4() + g4();
};

export { uniqueID };

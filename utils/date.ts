export const getYearOfExperience = () => {
  const start = new Date("2023-08-01").getFullYear();
  const now = new Date().getFullYear();
  return now - start;
};

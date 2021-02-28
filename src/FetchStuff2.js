export const getStuff2 = async () => {
  const URL = `http://localhost:3000/exercise_sets/1.json`;
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};

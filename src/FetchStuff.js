// FetchUser.js

export const getStuff = async () => {
  const URL = `http://localhost:3000/exercise_sets/1.json`;
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const data = await response.json();
  return data;
};

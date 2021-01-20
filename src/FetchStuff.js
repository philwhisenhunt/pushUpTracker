// FetchUser.js

export const getStuff = async () => {
  const URL = `http://127.0.0.1:3000/exercise_sets/1.json`;
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};

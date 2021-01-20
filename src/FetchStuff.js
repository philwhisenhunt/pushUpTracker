// FetchUser.js

export const getStuff = () => {
  const URL = `http://127.0.0.1:3000/exercise_sets/1.json`;
  return fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

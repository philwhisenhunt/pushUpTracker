// FetchUser.js

export const getstuff = () => {
  let username = name.toLowerCase().trim();
  const URL = `http://localhost:3000/exercise_sets/1`;
  return fetch(URL).then((res) => res.json());
};

// FetchUser.js

export const getstuff = () => {
  const URL = `http://localhost:3000/exercise_sets/1`;
  return fetch(URL).then((res) => res.json());
};

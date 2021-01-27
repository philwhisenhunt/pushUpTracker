export const saveStuff(data={}) = async () => {
    const URL = `http://127.0.0.1:3000/exercise_sets/create.json`;
    const response = await fetch(URL, {
        method: "PUSH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    const data = await response.json();
    return data;
}
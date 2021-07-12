export const fetchTotalReps = async () => {
    const URL = `http://localhost:3000/exercises?may+2021`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data;
}
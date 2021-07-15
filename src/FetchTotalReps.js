export const fetchTotalReps = async () => {
    let timeframe = "may+2021"
    //interpolate timeframe
    const URL = `http://localhost:3000/exercises?may+2021`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
//Set the time frame based on params
//add to the url
//set whatever is returned and decode if needed
    const data = await response.json();
    return data;
}
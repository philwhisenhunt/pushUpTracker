export const fetchTotalReps = async () => {
    //Set the time frame based on params
    let timeframe = "may+2021"
    //add to the url
    const URL = `http://localhost:3000/exercises?`;

    //set whatever is returned and decode if needed
    //interpolate timeframe
    const URL = `http://localhost:3000/exercises` + timeframe;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data;
}
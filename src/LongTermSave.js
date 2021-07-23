export async function LongtermSave(url = "", data = {}){
    const reponse = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json
}
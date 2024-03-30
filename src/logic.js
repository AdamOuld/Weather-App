
const baseCall = "http://api.weatherapi.com/v1/current.json?key=8b0e1e1916d64ea9aa3192217242703&q="


async function fetchData(message) {
    const response = await fetch(baseCall + message);
    const data = await response.json();
    return data;
}

export {fetchData}







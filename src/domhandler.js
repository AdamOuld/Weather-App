
import { fetchData } from "./logic";


const weatherData = document.getElementById("weather-data")
const submit = document.getElementById("submit");
const input = document.getElementById("user-input");

function renderListeners() {
    submit.addEventListener("click", async () => {
        const message = input.value
        input.value = ""
        try {
            const data = await fetchData(message)
            updateWeatherData(data)
        } catch (error) {
            errorHandler(error)
        }
    })
}

function updateWeatherData(data) {
    weatherData.innerHTML = ""
    const locationName = document.createElement("h1");
    locationName.textContent = data.location.name;
    const temp = document.createElement("h2");
    temp.textContent = data.current.temp_f + "F";
    const switchTemp = document.createElement("button")
    switchTemp.textContent = "Display C°"
    switchTemp.classList.add("btn")
    switchTemp.addEventListener("click", () => {
        if (switchTemp.textContent == "Display F°") {
            switchTemp.textContent = "Display C°"
            temp.textContent = data.current.temp_f + "F°";
        }
        else {
            switchTemp.textContent = "Display F°"
            temp.textContent = data.current.temp_c + "C°";
        }
    })
    const weatherImg = document.createElement("img");
    weatherImg.src = data.current.condition.icon;
    const condition = document.createElement("h3")
    condition.textContent = data.current.condition.text
    weatherData.appendChild(locationName)
    weatherData.appendChild(temp)
    weatherData.appendChild(switchTemp)
    weatherData.appendChild(weatherImg)
    weatherData.appendChild(condition)
}

function errorHandler(error) {
    weatherData.innerHTML = ""
    const errorMesssage = document.createElement("h2")
    errorMesssage.textContent = "Location not found!"
    weatherData.appendChild(errorMesssage)
}

export {renderListeners}



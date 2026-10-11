// ========================================
// OIBSIP Temperature Converter
// ========================================

// Get HTML elements
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const errorMessage = document.getElementById("errorMessage");


// Convert temperature
convertButton.addEventListener("click", function () {

    const temperature = parseFloat(temperatureInput.value);
    const selectedUnit = unitSelect.value;

    // Clear previous error
    errorMessage.textContent = "";


    // Validate empty or invalid input
    if (temperatureInput.value.trim() === "" || Number.isNaN(temperature)) {

        errorMessage.textContent =
            "Please enter a valid temperature.";

        resetResults();
        return;
    }


    // Variables for converted values
    let celsius;
    let fahrenheit;
    let kelvin;


    // Convert from Celsius
    if (selectedUnit === "celsius") {

        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;

    }


    // Convert from Fahrenheit
    else if (selectedUnit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;

    }


    // Convert from Kelvin
    else if (selectedUnit === "kelvin") {

        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = temperature;

    }


    // Absolute zero validation
    if (celsius < -273.15) {

        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        resetResults();
        return;
    }


    // Display results
    celsiusResult.textContent =
        `${celsius.toFixed(2)} °C`;

    fahrenheitResult.textContent =
        `${fahrenheit.toFixed(2)} °F`;

    kelvinResult.textContent =
        `${kelvin.toFixed(2)} K`;
});


// Reset result boxes
function resetResults() {

    celsiusResult.textContent = "--";
    fahrenheitResult.textContent = "--";
    kelvinResult.textContent = "--";
}
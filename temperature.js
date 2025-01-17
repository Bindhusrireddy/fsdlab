const temperatureConverter = {
    toCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    },
    toFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    },
};

function convertTemperature() {
    const temperature = parseFloat(prompt("Enter the temperature value:"));
    const scale = prompt(
        "Is the temperature in Celsius (C) or Fahrenheit (F)? Enter 'C' or 'F':"
    ).toUpperCase();

    if (scale === "C") {
        const fahrenheit = temperatureConverter.toFahrenheit(temperature);
        alert(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F.`);
    } else if (scale === "F") {
        const celsius = temperatureConverter.toCelsius(temperature);
        alert(`${temperature}°F is equal to ${celsius.toFixed(2)}°C.`);
    } else {
        alert("Invalid input! Please enter 'C' for Celsius or 'F' for Fahrenheit.");
    }
}
convertTemperature();

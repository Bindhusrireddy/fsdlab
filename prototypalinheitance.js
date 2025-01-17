
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    getDetails: function () {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    },
};

const electricCar = Object.create(car);

electricCar.batteryCapacity = "75 kWh";
electricCar.getBatteryInfo = function () {
    return `Battery Capacity: ${this.batteryCapacity}`;
};

electricCar.make = "Tesla";
electricCar.model = "Model S";
electricCar.year = 2022;
console.log(car.getDetails()); // "Make: Toyota, Model: Corolla, Year: 2020"
console.log(electricCar.getDetails()); // "Make: Tesla, Model: Model S, Year: 2022"
console.log(electricCar.getBatteryInfo()); // "Battery Capacity: 75 kWh"

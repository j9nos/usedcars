/*
 * File: app.ts
 * Authors: Olah Janos Gergely & Hegedus Gyorgy
 * Copyright: 2021, Olah Janos Gergely & Hegedus Gyorgy
 * Group: Szoft II/N
 * Date: 2021-12-02
 * Github: https://github.com/olahjg & https://github.com/Gyuri21
 * Licenc: GNU GPL
 */
var button = document.querySelector("#load-cars-button");
var list = document.querySelector("#car-list");
var container = document.querySelector("#list-container");
function fetchCars() {
    var carList = [];
    fetch("http://localhost:4000/cars")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        data.map(function (car) {
            return carList.push(new Car(car.id, car.plate, car.color, car.brand, car.year, car.capacity, car.fuel, car.price, car.sold));
        });
        sessionStorage.setItem("car-session", JSON.stringify(carList));
    })["catch"](function (error) {
        console.log(error);
        sessionStorage.clear();
    });
}
function loadCars() {
    var cars = JSON.parse(sessionStorage.getItem("car-session"));
    cars.map(function (car) {
        var li = document.createElement("li");
        li.innerHTML = car.plate;
        li.setAttribute("class", "list-group-item");
        list.append(li);
    });
}
fetchCars();
if (sessionStorage.getItem("car-session")) {
    loadCars();
}

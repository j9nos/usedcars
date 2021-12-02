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

function fetchCars() {
  var carList: Car[] = [];
  fetch("http://localhost:4000/cars")
    .then((res) => res.json())
    .then((data) => {
      data.map((car) => {
        return carList.push(
          new Car(
            car.id,
            car.plate,
            car.color,
            car.brand,
            car.year,
            car.capacity,
            car.fuel,
            car.price,
            car.sold
          )
        );
      });
      sessionStorage.setItem("car-session", JSON.stringify(carList));
    })
    .catch((error) => {
      console.log(error);
      sessionStorage.clear();
    });
}
function loadCars() {
  var cars = JSON.parse(sessionStorage.getItem("car-session"));
  cars.map((car) => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = " "+car.brand+" / "+car.price+" HUF";
    li.innerHTML = car.plate;
    li.append(span);
    li.setAttribute("class", "list-group-item");
    list.append(li);
  });
}

fetchCars();
if (sessionStorage.getItem("car-session")) {
  loadCars();
}

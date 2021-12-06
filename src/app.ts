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

const CARS_URL = "http://localhost:4000/cars";

const introduce = (): void => {
  console.log("Olah Janos Gergely & Hegedus Gyorgy\n2021-12-06\nSZOFT2NAPPALI");
};

const loadCars = (): void => {
  const carList: Car[] = [];
  fetch(CARS_URL, { method: "GET" })
    .then((res) => res.text())
    .then((result) => {
      JSON.parse(result).map((car) => {
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
      carList.map((car) => {
        let li = document.createElement("li");
        li.innerHTML = car.plate;
        li.setAttribute("class", "list-group-item");
        list.append(li);
      });
    })
    .catch((err) => console.log(err));
};

introduce();
loadCars();

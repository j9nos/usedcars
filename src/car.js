/*
 * File: car.ts
 * Authors: Olah Janos Gergely & Hegedus Gyorgy
 * Copyright: 2021, Olah Janos Gergely & Hegedus Gyorgy
 * Group: Szoft II/N
 * Date: 2021-12-02
 * Github: https://github.com/olahjg & https://github.com/Gyuri21
 * Licenc: GNU GPL
 */
var Car = /** @class */ (function () {
    function Car(id, plate, color, brand, year, capacity, fuel, price, sold) {
        this.id = id;
        this.plate = plate;
        this.color = color;
        this.brand = brand;
        this.year = year;
        this.capacity = capacity;
        this.fuel = fuel;
        this.price = price;
        this.sold = sold;
    }
    return Car;
}());

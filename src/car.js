/*
 * File: car.ts
 * Authors: Olah Janos Gergely & Hegedus Gyorgy
 * Copyright: 2021, Olah Janos Gergely & Hegedus Gyorgy
 * Group: Szoft II/N
 * Date: 2021-12-09
 * Github: https://github.com/olahjg & https://github.com/Gyuri21
 * Licenc: GNU GPL
 */
export default class Car {
    constructor(id, plate, color, brand, year, capacity, fuel, price, sold) {
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
}

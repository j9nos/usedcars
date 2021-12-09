/*
 * File: car.ts
 * Authors: Olah Janos Gergely & Hegedus Gyorgy
 * Copyright: 2021, Olah Janos Gergely & Hegedus Gyorgy
 * Group: Szoft II/N
 * Date: 2021-12-02
 * Github: https://github.com/olahjg & https://github.com/Gyuri21
 * Licenc: GNU GPL
 */
export default class Car {
  id: number;
  plate: string;
  color: string;
  brand: string;
  year: number;
  capacity: number;
  fuel: string;
  price: number;
  sold: boolean;
  constructor(
    id: number,
    plate: string,
    color: string,
    brand: string,
    year: number,
    capacity: number,
    fuel: string,
    price: number,
    sold: boolean
  ) {
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
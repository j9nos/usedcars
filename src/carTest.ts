/*
 * File: carTest.ts
 * Authors: Olah Janos Gergely & Hegedus Gyorgy
 * Copyright: 2021, Olah Janos Gergely & Hegedus Gyorgy
 * Group: Szoft II/N
 * Date: 2021-12-09
 * Github: https://github.com/olahjg & https://github.com/Gyuri21
 * Licenc: GNU GPL
 */
import Car from "./car.js";

export default class CarTest extends Car {
  expectedBrand: string;
  constructor(expectedBrand: string) {
    super(1, "TST-999", "szurke", "Volvo", 2021, 99999, "áram", 0, false);
    this.expectedBrand = expectedBrand;
  }
  isBrandOkay(): boolean {
    return this.brand === this.expectedBrand;
  }
}

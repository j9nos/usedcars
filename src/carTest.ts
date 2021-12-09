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

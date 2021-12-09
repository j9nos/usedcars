import Car from "./car.js";
export default class CarTest extends Car {
    constructor(expectedBrand) {
        super(1, "TST-999", "szurke", "Volvo", 2021, 99999, "áram", 0, false);
        this.expectedBrand = expectedBrand;
    }
    isBrandOkay() {
        return this.brand === this.expectedBrand;
    }
}

import { Injectable } from '@angular/core';
import { Units } from "./units";

@Injectable()
export class UnitConverterService {
  constructor() { }

  getUnits() {
    return Units.map((unit) => unit.symbol);
  }

  // @source: https://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  parseUnit(unitString: string) {
    const parts = unitString.split(" ");
    const value = parseFloat(parts[0]);

    if (!this.isNumber(value)) {
      return null;
    }

    const unit = Units.filter((unit) => parts[1].toLowerCase() === unit.symbol);

    if (!unit[0]) {
      return null;
    }

    return {
      val: value,
      unit: unit[0].symbol,
    }
  };

  convertToUnit(value: number, source: string, dest: string) {
    let result;

    // convert to base unit (meter)
    result = value / Units.find((unit) => unit.symbol === source).ratioToMeter;

    // convert base unit to requested unit
    result *= Units.find((unit) => unit.symbol === dest).ratioToMeter;

    return parseFloat(result.toFixed(2));
  }
}

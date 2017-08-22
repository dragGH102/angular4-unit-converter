import { UnitConverterService } from './unit-converter.service';
import { Units } from './units';

describe('UnitConverterService - isolated testing', () => {
  let service: UnitConverterService;
  const validUnits = Units.map((unit) => unit.symbol);

  beforeEach(() => { service = new UnitConverterService(); });

  it('#getUnits should return an array of available units', () => {
    expect(service.getUnits()).toEqual(validUnits);
  });

  it('#isNumber should return true for numbers, false otherwise', () => {
    expect(service.isNumber('10')).toBeTruthy();
    expect(service.isNumber('10.15')).toBeTruthy();
    expect(service.isNumber('anything')).toBeFalsy();
  });

  it('#parseUnit should return unit-val pair for valid strings, null otherwise', () => {
    expect(service.parseUnit('10 in')).toEqual({
      val: 10,
      unit: 'in',
    });

    expect(service.parseUnit('3 m')).toEqual({
      val: 3,
      unit: 'm',
    });

    // unit in capital letters
    expect(service.parseUnit('3 M')).toEqual({
      val: 3,
      unit: 'm',
    });

    expect(service.parseUnit('4 yd')).toEqual({
      val: 4,
      unit: 'yd',
    });

    // invalid value
    expect(service.parseUnit('anything yd')).toBeNull();

    // invalid unit
    expect(service.parseUnit('2 yxd')).toBeNull();
  });

  it('#convertToUnit return the converted value', () => {
    expect(service.convertToUnit(1, 'm', 'm')).toBe(1.00);
    expect(service.convertToUnit(1, 'm', 'yd')).toBe(1.09);
    expect(service.convertToUnit(1, 'm', 'in')).toBe(39.37);

    expect(service.convertToUnit(1, 'yd', 'yd')).toBe(1.00);
    expect(service.convertToUnit(1, 'yd', 'm')).toBe(0.91);
    expect(service.convertToUnit(1, 'yd', 'in')).toBe(36.00);

    expect(service.convertToUnit(1, 'in', 'in')).toBe(1.00);
    expect(service.convertToUnit(1, 'in', 'm')).toBe(0.03);
    expect(service.convertToUnit(1, 'in', 'yd')).toBe(0.03);
  });
});

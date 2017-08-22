interface Unit {
    symbol: string,
    ratioToMeter: number,
}

const Meter: Unit = {
    symbol: 'm',
    ratioToMeter: 1,
};

const Yard: Unit = {
    symbol: 'yd',
    ratioToMeter: 1.0936,
};

const Inch: Unit = {
    symbol: 'in',
    ratioToMeter: 39.3701,
};

const Units = [
    Meter,
    Yard,
    Inch,
    // ADD MORE UNITS HERE TO EXTEND
];

export {
    Units,
};
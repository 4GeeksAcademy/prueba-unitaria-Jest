const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(3.5)).toBe(3.5 * 1.07);
});

test("One dollar should be converted to yen correctly", () => {
    expect(fromDollarToYen(3.5)).toBeCloseTo((3.5 / 1.07) * 156.5, 2);
});

test("One yen should be converted to pounds correctly", () => {
    expect(fromYenToPound(350)).toBeCloseTo((350 / 156.5) * 0.87, 2);
});

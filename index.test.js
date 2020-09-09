const { convertToUnitQty } = require('./index');

test('convert to unit qty', () => {
    expect(convertToUnitQty('1.5', 60)).toBe(65);
});

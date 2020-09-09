const { convertToUnitQty, convertQty } = require('../index');

const uomConversion = 60;

const prefix = 'transfer';
const uom1 = 'Krt';
const uom2 = 'Pcs';

const data = {
    [`${prefix}_product_conversion`]: uomConversion,
    [`${prefix}_qty`]: 0,
    [`${prefix}_product_uom1`]: uom1,
    [`${prefix}_product_uom2`]: uom2,
};

/**
 * Change Qty
 * Helper to modify qty for testing
 * 
 * @param data Object
 * @param qty String
 */
function changeQty(data, qty) {
    data[`${prefix}_qty`] = qty;
    return data;
}

/**
 * ================================================
 * Testing for convertToUnitQty
 * ================================================
 */
test('convert to unit qty [from 1.5 = 65]', () => {
    expect(convertToUnitQty('1.5', uomConversion)).toBe(65);
});

test('convert to unit qty [from 0.5 = 5]', () => {
    expect(convertToUnitQty('0.5', uomConversion)).toBe(5);
});

test('convert to unit qty [from -1.5 = -65]', () => {
    expect(convertToUnitQty('-1.5', uomConversion)).toBe(-65);
});

test('convert to unit qty [from -0.5 = 5]', () => {
    expect(convertToUnitQty('-0.5', uomConversion)).toBe(-5);
});

/**
 * ================================================
 * Testing for ConvertQty
 * ================================================
 */
// default param
test('convert from unit qty with default parameter [from 65 to 1 . 5]', () => {
    expect(convertQty(changeQty(data, 65))).toBe('1 . 5');
});

test('convert from unit qty with default parameter [from 5 to 0 . 5]', () => {
    expect(convertQty(changeQty(data, 5))).toBe('0 . 5');
});

test('convert from unit qty with default parameter [from -65 to -1 . 5]', () => {
    expect(convertQty(changeQty(data, -65))).toBe('-1 . 5');
});

test('convert from unit qty with default parameter [from -5 to -0 . 5]', () => {
    expect(convertQty(changeQty(data, -5))).toBe('-0 . 5');
});

// no space
test('convert from unit qty with no space [from 65 to 1.5]', () => {
    expect(convertQty(changeQty(data, 65), false, false)).toBe('1.5');
});

test('convert from unit qty with no space [from 5 to 0.5]', () => {
    expect(convertQty(changeQty(data, 5), false, false)).toBe('0.5');
});

test('convert from unit qty with no space [from -65 to -1.5]', () => {
    expect(convertQty(changeQty(data, -65), false, false)).toBe('-1.5');
});

test('convert from unit qty with no space [from -5 to -0.5]', () => {
    expect(convertQty(changeQty(data, -5), false, false)).toBe('-0.5');
});

// with uom (will ignore space)
test(`convert from unit qty with uom [from 65 to 1 ${uom1} 5 ${uom2}]`, () => {
    expect(convertQty(changeQty(data, 65), false, true)).toBe(`1 ${uom1} 5 ${uom2}`);
});

test(`convert from unit qty with uom [from 5 to 0 ${uom1} 5 ${uom2}]`, () => {
    expect(convertQty(changeQty(data, 5), false, true)).toBe(`0 ${uom1} 5 ${uom2}`);
});

test(`convert from unit qty with uom [from -65 to -1 ${uom1} 5 ${uom2}]`, () => {
    expect(convertQty(changeQty(data, -65), false, true)).toBe(`-1 ${uom1} 5 ${uom2}`);
});

test(`convert from unit qty with uom [from -5 to -0 ${uom1} 5 ${uom2}]`, () => {
    expect(convertQty(changeQty(data, -5), false, true)).toBe(`-0 ${uom1} 5 ${uom2}`);
});
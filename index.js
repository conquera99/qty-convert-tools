/**
 * Convert Qty
 * will convert given data with qty to readable quantity with given options
 * 
 * @param row Object
 * @param space boolean
 * @param uom boolean, will ignore ```space``` arguments
 * @param prefix String
 * 
 * @returns String
 */
function convertQty(row, space = true, uom = false, prefix = 'transfer_') {
    const conversion = parseInt(row[`${prefix}product_conversion`], 10);
    const rawQty = parseInt(row[`${prefix}qty`] || row.product_stock, 10);
    const qty = Math.abs(rawQty);
    const qtyLvl1 = parseInt(qty / conversion, 10);
    const qtyLvl2 = qty % conversion;
    const uom1 = row[`${prefix}product_uom1`];
    const uom2 = row[`${prefix}product_uom2`];
    const minus = rawQty < 0 ? '-' : '';

    if (uom) {
        return `${minus}${qtyLvl1} ${uom1} ${qtyLvl2} ${uom2}`;
    }

    if (space) {
        return `${minus}${qtyLvl1} . ${qtyLvl2}`;
    }

    return `${minus}${qtyLvl1}.${qtyLvl2}`;
}

/**
 * Convert to Unit Qty
 * will convert from readable qty to unit qty with given ```conv``` arguments as qty conversion
 * 
 * @param qty String
 * @param conv Number
 * 
 * @returns Number
 */
function convertToUnitQty(qty, conv) {
    const minus = qty.toString().startsWith('-') ? -1 : 1;
    const qtyDetail = qty.toString().replace('-', '').split('.');
    const conversion = parseInt(conv, 10);

    const qtyLvl1 = qtyDetail[0] === '' ? 0 : parseInt(qtyDetail[0], 10) * conversion;
    let qtyLvl2 = 0;

    if (qtyDetail.length > 1) {
        qtyLvl2 = parseInt(qtyDetail[1], 10);
    }

    return (qtyLvl1 + qtyLvl2) * minus;
}

module.exports = { convertQty, convertToUnitQty };

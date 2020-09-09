# Qty Conversion Tools
This package for personal use only, but can be used and fork by anyone. This tools will help to convert string readable qty to unit qty and vice versa.

<br>

## API

### convertQty
Will convert given data with qty to readable quantity with given options, here is the available parameters:

| Parameters | Type | Default | Description |
| --- | --- | --- | --- |
| row | Object | required | object data with given qty and uom, format with default prefix: <br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```transfer_qty: 5,```<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```transfer_product_conversion: 60,```<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```transfer_product_uom1: 'Krt',```<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```transfer_product_uom2: 'Pcs',```<br>}<br>note: ```qty``` will fallback to ```product_stock``` if not available |
| space | boolean | ```true``` | if ```false```, will remove space from conversion result |
| uom | boolean | ```false``` | if ```true```, will show uom from given data and will ignore ```space``` arguments |
| prefix | String | ```transfer_``` | ```prefix``` will be used to process data from ```row``` object |

<br>

### convertToUnitQty
Will convert from readable qty to unit qty with given ```conv``` arguments as qty conversion, here is the available parameters:

| Parameters | Type | Default | Description |
| --- | --- | --- | --- |
| qty | String | required | readable qty with format: ```qtyUom1 . qtyUom2``` or ```qtyUom1.qtyUom2``` |
| conv | Number | required | qty conversion number from uom1 to uom2 |
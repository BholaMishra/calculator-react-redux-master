
const app = {
    name: 'Bhola Mishra',
    // name: 'calculator',
    title: 'The barcode was not recogized. Please enter the order number by hand',
    config: {
        digitsDisplayLimit: 11,
        decimalPlaceAllowed: 5,
        keyConfig:
        [
            [{key: 'AC', action: 'ALL_CLEAR', class: 'system'}, {key: 'Del', action: 'DELETE', class: 'system'}, {key: '(', action: '(', class: 'operation'}, {key: ')', action: ')', class: 'operation'}],
            [{key: '1', action: 1, class: 'operator'}, {key: '2', action: 2, class: 'operator'}, {key: '3', action: 3, class: 'operator'}, {key: '+', action: '+', class: 'operation'}],
            [{key: '4', action: 4, class: 'operator'}, {key: '5', action: 5, class: 'operator'}, {key: '6', action: 6, class: 'operator'}, {key: '-', action: '-', class: 'operation'}],
            [{key: '7', action: 7, class: 'operator'}, {key: '8', action: 8, class: 'operator'}, {key: '9', action: 9, class: 'operator'}, {key: 'x', action: '*', class: 'operation'}],
            [{key: '.', action: '.', class: 'operation'}, {key: '0', action: 0}, {key: 'Save', action: 'COMPUTE', class: 'system'}, {key: '÷', action: '/', class: 'operation'}]
        ]
    }
};

export default app;
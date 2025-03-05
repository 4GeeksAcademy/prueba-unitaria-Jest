// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87  // British pound
};

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs["USD"];
};

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
}

// Exportar funciones para pruebas o uso externo
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

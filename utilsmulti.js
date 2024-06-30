function generateRandomnumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFarhenheit(celcius) {
    return (celcius * 9/5) + 32;
}

// common js function export way - old version
// not just functions that can be exported, but also objects, arrays, etc.
// exporting multiple functions as  a object
module.exports = {
    generateRandomnumber,
    celciusToFarhenheit,
}; 
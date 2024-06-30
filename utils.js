function generateRandomnumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// common js function export way - old version
// not just functions that can be exported, but also objects, arrays, etc.
//this is default export. because we want to export only one thing
module.exports = generateRandomnumber; 
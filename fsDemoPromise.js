// fs module promise version
// basically there is 2 promises in fs module. They are async-await and promise .then function

import fs from 'fs/promises';

// ReadFile() - promise version of ReadFile() -Asynchronous
// fs.readFile('test.txt', 'utf8')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// readFile() - promise version of ReadFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};




// writeFile() - promise version of writeFile() -async/await writeFile
const writeFile = async () => {
    try {
        await fs.writeFile('test.txt', 'Hello World');
        console.log('File written to...');
    } catch (error) {
        console.log(error);
    }
};

// appendFile() - async/await
const appendFile = async () => {
    try {
        await fs.appendFile('test.txt', ' This is appended text');
        console.log('File appended to...');
    } catch (error) {
        console.log(error);
    }
};

// delete the file -async/await
const deleteFile = async () => {
    try {
        await fs.unlink('test.txt');
        console.log('File removed...');
    } catch (error) {
        console.log(error);
    }
};

writeFile();
appendFile();
readFile();
// deleteFile();
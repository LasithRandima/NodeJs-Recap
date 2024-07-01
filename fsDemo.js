 import fs from 'fs';

 // ReadFile() - callback version of ReadFile() -Asynchronous
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });

// ReadFileSync() - Synchronous
    try {
        const data = fs.readFileSync('test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
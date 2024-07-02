import path from 'path'; // path module is used to work with file and directory paths
import url from 'url'; // url module is used to work with url strings

const filePath = '/dir1/dir2/test.txt';

// Base file name
console.log(path.basename(filePath)); // test.txt

// Directory name
console.log(path.dirname(filePath)); // /dir1/dir2

// File extension
console.log(path.extname(filePath)); // .txt

// Create path object
console.log(path.parse(filePath)); // { root: '/', dir: '/dir1/dir2', base: 'test.txt', ext: '.txt', name: 'test' }

const __filename = url.fileURLToPath(import.meta.url);
console.log(__filename); // F:\Intern Target Projects\NodeJs-Recap\pathDemo.js
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
console.log(__dirname); // F:\Intern Target Projects\NodeJs-Recap


// Concatenate paths - Combines multiple path segments into a single path.
console.log(path.join(__dirname, 'test', 'hello.html')); // F:\Intern Target Projects\NodeJs-Recap\test\hello.html

// Resolve paths - Resolves a sequence of path segments into an absolute path.
console.log(path.resolve(__dirname, 'test', 'hello.html')); // F:\Intern Target Projects\NodeJs-Recap\test\hello.html

// Compare paths
console.log(path.relative(__dirname, 'test/hello.html')); // test/hello.html

// Check if path is absolute
console.log(path.isAbsolute(filePath)); // true

// Normalize path
console.log(path.normalize('/test/test//////test')); // /test/test/test
console.log(path.normalize('/test/test//////../test')); // /test/test
console.log(path.normalize('/test/test//////../test/..')); // /test
console.log(path.normalize('/test/test//////../test/../..')); // /
console.log(path.normalize('/test/test//////../test/../../..')); // /






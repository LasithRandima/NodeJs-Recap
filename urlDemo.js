// url module is used to work with url strings

import path from 'path';
import url from 'url'; 

const urlString = 'https://google.com/serach?q=hello+world';

// URL object
const urlObject = new URL(urlString);

console.log(urlObject); 
console.log(urlObject.host);

// format URL to string format
console.log(url.format(urlObject)); // https://google.com/serach?q=hello+world 


// import.meta.url is used to get the URL of the current module file 
console.log(import.meta.url);  // file:///F:/Intern%20Target%20Projects/NodeJs-Recap/urlDemo.js
// url.fileURLToPath() method is used to convert the URL to a file path
const __filename = url.fileURLToPath(import.meta.url);
console.log(__filename); // F:\Intern Target Projects\NodeJs-Recap\urlDemo.js
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
console.log(__dirname); // F:\Intern Target Projects\NodeJs-Recap

//search
console.log(urlObject.search); // ?q=hello+world

// search params for query string
console.log(urlObject.searchParams); // URLSearchParams { 'q' => 'hello world' }

// or this way to get search params
const params = new URLSearchParams(urlObject.search);
console.log(params); // URLSearchParams { 'q' => 'hello world' }
console.log(params.get('q')); // hello world
params.append('limit', '5');
console.log(params); // URLSearchParams { 'q' => 'hello world', 'limit' => '5' }
params.delete('limit');
console.log(params); // URLSearchParams { 'q' => 'hello world' }
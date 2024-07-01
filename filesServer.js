import http from 'http';   // http module is used to create a server
import fs from 'fs/promises'; // fs module is used to read and write files - asynchronous way - promises
import url from 'url'; // url module is used to parse url strings
import path from 'path'; // path module is used to work with file and directory paths

//! To access .env variables we need to modify package.json file with script array  
// "start": "nodemon --env-file=.env server.js"
const PORT = process.env.PORT;


//* In Node.js, __dirname and __filename are available as environment variables in CommonJS modules by default. 
// These variables provide the directory name of the current module and the file name of the current module, respectively.
// However, in ES modules, these variables are not available. so we have to manually set them here using the importing url & path module.

// console.log(__dirname + __filename );

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
// Get current directory name
const __dirname = path.dirname(__filename);

console.log(__dirname + ' & '+ __filename );

const server = http.createServer(async(req, res) => {

    // 3. Create a simple router in node with request type checking handlers
    try {
        // Check if GET request
        if (req.method === 'GET') {
            let filePath;
            // Check if request is for the homepage
            if (req.url === '/') {
              filePath = path.join(__dirname, 'public', 'index.html');
            }
            // Check if request is for the about page
            else if (req.url === '/about') {
              filePath = path.join(__dirname, 'public', 'about.html');
            }
            // Check if request is for the 404 page
            else {
                throw new Error('Page not found');
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error: ' + error.message);
    }

//   2.Create simple router in node
// if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('<h1>HomePage</h1>');
//     } else if (req.url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('<h1>About Page</h1>');
//     } else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end('<h1>Page Not Found</h1>');
//     }


// 1.using http module we can access request and response objects and display them in browser

//   console.log(req);
//   console.log(req.method);
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello from node.js</h1>');
//   res.end('Hello World\n');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

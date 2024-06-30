import http from 'http';

//! To access .env variables we need to modify package.json file with script array and    
// "start": "nodemon --env-file=.env server.js"
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {

    try {
        // Check if GET request
        if (req.method === 'GET') {
            // Check if request is for the homepage
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>HomePage</h1>');
            }
            // Check if request is for the about page
            else if (req.url === '/about') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>About Page</h1>');
            }
            // Check if request is for the 404 page
            else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Page Not Found</h1>');
            }
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error: ' + error.message);
    }

//   Create simple router in node
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


// using htp module we can access request and response objects and display them in browser

//   console.log(req);
//   console.log(req.method);
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello from node.js</h1>');
//   res.end('Hello World\n');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

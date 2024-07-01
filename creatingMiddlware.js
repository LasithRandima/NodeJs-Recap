import { createServer } from 'http';
const PORT = process.env.PORT || 8000;

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' },
    ];

// creating middlewares
// logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

//json middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};

// Route handler for GET /api/users
const getUsers = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
};

// Route handler for GET /api/users/:id
const getUser = (req, res) => {
    const id = req.url.split('/')[3]; // get id from the url from 3rd slash
    const user = users.find(user => user.id === parseInt(id));

    if (user) {
        res.write(JSON.stringify(user));
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User not found' }));
    }
};

// not found handler
const notFound = (req, res) => {
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
}; 

const server = createServer((req, res) => {
    //* using logger middleware in the server
    // we have to wrap previously created rest handlers inside the logger middleware as a callback function
    logger(req, res, () => {
        jsonMiddleware(req, res, () => { 
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsers(req, res);
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUser(req, res);
            } else {
                notFound(req, res);
            }
        });
    });
   
});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
}); 
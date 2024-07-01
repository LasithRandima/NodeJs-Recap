import { createServer } from 'http';
const PORT = process.env.PORT || 8000;

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' },
    ];

const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3]; // get id from the url from 3rd slash
        console.log(id);
        const user = users.find(user => user.id === parseInt(id));
        if (user) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(user));
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User not found' }));
    }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
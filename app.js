const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
    res.send('Hello from API');
});

app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});

app.get('/api/products', (req, res) => {
    res.json([{ id: 1, name: 'Product A' }, { id: 2, name: 'Product B' }]);
});

app.get('/api/orders', (req, res) => {
    res.json([{ id: 1, product: 'Product A', quantity: 2 }, { id: 2, product: 'Product B', quantity: 1 }]);
});

app.get('/api/customers', (req, res) => {
    res.json([{ id: 1, name: 'Customer A' }, { id: 2, name: 'Customer B' }]);
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

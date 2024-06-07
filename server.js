const express = require('express');
const app = express();
const path = require('path');
const { addition, subtraction, multiplication, division } = require('./hex-arithmetic');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const startServer = () => {
    return app.listen(3000, ()=>{
        console.log('server running on port 3000');
    });
};

app.post('/equals', (req, res) => {
    const operation = req.body.operation;
    const x = req.body.x;
    const y = req.body.y;
    let result;

    switch (operation) {
        case 'add':
            result = addition(x, y);
            break;
        case 'sub':
            result = subtraction(x, y);
            break;
        case 'mul':
            result = multiplication(x, y);
            break;
        case 'div':
            result = division(x, y);
            break;
        default:
            break;
    }
    res.json({result});
});

startServer();

module.exports = {app, startServer};
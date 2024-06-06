const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const startServer = () => {
    return app.listen(3000, ()=>{
        console.log('server running on port 3000');
    });
};

startServer();

module.exports = {app, startServer};
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<button>1</button>');
});

const startServer = () => {
    return app.listen(3000, ()=>{
        console.log('server running on port 3000');
    });
};

/* GUI */

module.exports = {app, startServer};
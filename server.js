const express       = require('express');
const bodyParser    = require('body-parser');
const configs       = require('./app/config.js');
const router        = require('./app/routes/routes.js');

// MAIN CONSTS ===================================

const server_port = configs.app_port;

// EXPRESS part ===================================

const app  = express();
app.listen(server_port, () => {console.log('Server works on port: ' + server_port)});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', router);

// just for test
app.get('/', (req, res) => {
    res.send('OK');
});

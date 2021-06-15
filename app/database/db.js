const Pool      = require('pg').Pool;
const configs   = require('../config.js');

const pool = new Pool({
    user:       configs.db_username,
    password:   configs.db_password,
    host:       configs.db_host,
    port:       configs.db_port,
    database:   configs.db_name,
});

module.exports = pool;

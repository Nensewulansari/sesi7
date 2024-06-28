const { Pool } =require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '110996',
    port: 5432,
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}

const { Client, Pool } = require('pg')
require('dotenv').config();
console.log(dotenv)
// change the credentials to server's
const connectionString = process.env.DATABASE_URL

const client = new Client({
    connectionString: connectionString,
})

module.exports = {
    client,
}
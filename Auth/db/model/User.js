var conn = require('../db');

//User Schema
const userSchema = `CREATE TABLE IF NOT EXISTS users (
    id serial primary key,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255)
    );`;

//create table if it doesn't exist in the DB on server start
conn.query(userSchema, (err, data) => {
    if (err) console.error(err);
    else console.log("Created User Table")
})

//Get user from DB
function getUser(username) {
    return conn.query(`SELECT * FROM users WHERE username = $1`, [username])
}

//Add user to DB
function createUser(username, password) {
    return conn.query(`INSERT into users(username, password) VALUES($1, $2)`, [username, password])
}


module.exports.find = getUser;
module.exports.create = createUser;
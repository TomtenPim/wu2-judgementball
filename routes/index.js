const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const mysql = require('mysql2');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
});
const promisePool = pool.promise();
const validator = require('validator');
let errors = [];




module.exports = router;
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'test'
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.get('/', (req, res) => {
    connection.query('SELECT message FROM greetings', (error, results, fields) => {
        if (error) throw error;
        res.send(results[0].message);
    });
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

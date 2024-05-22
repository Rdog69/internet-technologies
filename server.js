const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(bodyParser.json());
app.use(express.static('public'));

db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)");
});

app.post('/addUser', (req, res) => {
    const { name, email } = req.body;
    db.run("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], function(err) {
        if (err) {
            res.json({ message: 'Error adding user' });
        } else {
            res.json({ message: 'User added successfully' });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
app.get('/getUsers', (req, res) => {
    db.all("SELECT name, email FROM users", [], (err, rows) => {
        if (err) {
            res.json([]);
        } else {
            res.json(rows);
        }
    });
});
app.get('/getUsers', (req, res) => {
    const filter = req.query.filter || '';
    const query = `SELECT name, email FROM users WHERE name LIKE ?`;
    db.all(query, [`%${filter}%`], (err, rows) => {
        if (err) {
            res.json([]);
        } else {
            res.json(rows);
        }
    });
});

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM customer",
        (err, rows, fields) => {
            res.send(rows);
        }

    )

    // res.send([
    //     {
    //       id: 1,
    //       image: 'https://placeimg.com/64/64/1',
    //       name: 'dreamer',
    //       birthday: '860904',
    //       gender: 'man',
    //       job: 'dev'
    //     },
    //     {
    //       id: 2,
    //       image: 'https://placeimg.com/64/64/2',
    //       name: 'apple',
    //       birthday: '860904',
    //       gender: 'man',
    //       job: 'dev'
    //     },
    //     {
    //       id: 3,
    //       image: 'https://placeimg.com/64/64/3',
    //       name: 'orange',
    //       birthday: '860904',
    //       gender: 'man',
    //       job: 'dev'
    //     }
    // ]);
});
app.get('/api/hello', (req, res) => {
    res.send({message: 'hello Express!'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
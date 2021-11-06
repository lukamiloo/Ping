let express = require('express');
let mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

db.connect(err =>{
    if(err){
        throw err;
    }
    console.log('MySQL Connected')
});

const app = express();

app.get('/createdb', (req, res) =>{
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql, err=>{
        if(err){
            throw err;
        }
        res.send('Database Created');
    });
});
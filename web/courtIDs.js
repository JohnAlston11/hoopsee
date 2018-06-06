let mysql = require('mysql');
let bball = require('./API/bball');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'passion_users',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect();
var sql = "INSERT INTO courts (court_name) VALUES ?";
let values = bball.map(court => court = [court.Prop_ID]);
connection.query(sql,[values], (err, result, fields)=>{
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
})
// connection.query('select * from users', (err, results, field)=>{
//     if (err) throw err;

// });
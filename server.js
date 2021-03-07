const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

//to create the connection information for the sql database
const connection = mysql.createConnection({
    host: 'localhost',

    //port:
    port: 3301,
    
    //username:
    user:'root',
    
    //password:
    password: 'Frances87',
    database: 'employeeTracker_db',

});

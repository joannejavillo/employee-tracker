const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
const sequelize = require('./config/connection');


//to create the connection information for the sql database
const connection = mysql.createConnection({
    host: 'localhost',

    //port:
    port: 3306,
    
    //username:
     user:'root',
    
    // //password:
     password: '',
     database: 'employeeTracker_db',

});

// to do the inquirer 

inquirer
    .prompt([
        {
            name: "roles",
            type: "list",
            message: "What is the role of the employee?",
            choices: "roles()",
        },

    ])

connection.connect((err) => {
    if (err) throw err;
    runSearch();
});





sequelize.sync({ force: true}).then(() => {
    app.listen(PORT, () => console.log('Now listening'))
});
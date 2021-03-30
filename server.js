const inquirer = require('inquirer');
const mysql = require('mysql');
// const cTable = require('console.table');
require("dotenv").config();
//const { start } = require('node:repl');
//const sequelize = require('./config/connection');
//const mySql = require('./config/connection');

//to create the connection information for the sql database
const connection = mysql.createConnection({
    host: 'localhost',

    //port:
    port: 3306,

    //username:
    user:'root',

    // //password:
    password: process.env.DB_PASSWORD,
    database: 'employeeTracker_db',

});

// to do the inquirer 
const start = () => {
    inquirer
        .prompt({
            name: "choice",
            type: "list",
            message: "What do you like to do?",
            choices: [
                "View all employees",
                "View all employees by department",
                "View all employees by manager",
                "View all employees by role",
                "Add employee",
                "Add role",
                "Add department",
                "Update employee role",
                "Update employee manager",
                "Delete employee",
                "Delete role",
                "Delete department",
                "View department budgets",
            ],
        })
        .then(({ choice }) => {
            console.log(choice)
            switch (choice) {
                case "View all employees":
                    viewEmp();
                    break;
                case "View all employees by department":

                    break;

                case "View all employees by manager":

                    break;

                case "View all employees by role":

                    break;
                case "Add employee":

                    break;

                case "Add role":

                    break;

                case "Add department":

                    break;

                case "Update employee role":

                    break;

                case "Update employee manager":

                    break;

                case "Delete employee":

                    break;

                case "Delete role":

                    break;

                case "Delete department":

                    break;

                case "View department budgets":

                    break;
                default:
                    connection.end();
            }
        });
        const viewEmp = () => {
            connection.query("SELECT * FROM employee", (err, results) => {
                console.table(results);
                start();
        });
    };
};
start();

// connection.connect((err) => {
//     if (err) throw err;
//     //runSearch();
//start();


// connection.connect((err) => {
//     if (err) throw err;
//     // run the start function after the connection is made to prompt the user
//     start();

// sequelize.sync({ force: true}).then(() => {
//     app.listen(PORT, () => console.log('Now listening'))
// });

// module.exports = mysql;
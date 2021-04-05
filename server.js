const inquirer = require('inquirer');
const mysql = require('mysql');
//const { allowedNodeEnvironmentFlags } = require('node:process');
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
    user: 'root',

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
                    viewDep();
                    break;

                case "View all employees by manager":
                    viewMan();
                    break;

                case "View all employees by role":
                    viewRoles();
                    break;
                case "Add employee":
                    addEmp();
                    break;

                case "Add role":
                    addRole();
                    break;

                case "Add department":
                    addDep();
                    break;

                case "Update employee role":
                    updateEmpRole();
                    break;

                case "Update employee manager":
                    updateEmpMan();
                    break;

                case "Delete employee":
                    deleteEmp();
                    break;

                case "Delete role":
                    deleteRole();
                    break;

                case "Delete department":
                    deleteDep();
                    break;

                case "View department budgets":
                    viewDepBudget();
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
    const viewDep = () => {
        connection.query("SELECT * FROM department", (err, results) => {
            console.table(results);
            start();
        });
    };
    const viewMan = () => {
        connection.query("SELECT * FROM department", (err, results) => {
            console.table(results);
            start();
        });
    };
    const viewRoles = () => {
        connection.query("SELECT * FROM roles", (err, results) => {
            console.table(results);
            start();
        });
    };
    const addEmp = () => {
        connection.query("SELECT * FROM roles", (err, res) => {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "firstName",
                        type: "input",
                        message: "What is the employee's first name?",
                    },
                    {
                        name: "lastName",
                        type: "input",
                        message: "What is the employee's last name?",
                    },
                    {
                        name: "managerId",
                        type: "input",
                        message: "What is the employee's manager's ID?",
                    },
                    {
                        name: "role",
                        type: "list",
                        choices: function () {
                            var roleArray = [];
                            for (let i = 0; i < res.length; i++) {
                                roleArray.push(res[i].title);
                            }
                            return roleArray;
                        },
                        message: "What is this employee's role?",
                    },
                ])
                .then(function (answer) {
                    let role_id;
                    for (let a = 0; a < res.length; a++) {
                        if (res[a].title == answer.role) {
                            role_id = res[a].id;
                            console.log(role_id);
                        }
                    }
                    connection.query("INSERT INTO employee SET?",
                        {
                            firstName: answer.firstName,
                            lastName: answer.lastName,
                            managerID: answer.managerId,
                            role_id: role_id,
                        },
                        function (err) {
                            if (err) throw err;
                            console.log("Your employee has been added!");
                            start();
                        }
                    )       //console.table(results);
                });
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
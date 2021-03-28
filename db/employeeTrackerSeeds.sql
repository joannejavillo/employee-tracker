DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,2) NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id),
    REFERENCES department (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(30),
    lastname VARCHAR(30),
    manager_id INT NOT NULL UNIQUE,
    PRIMARY KEY (id)
);

--department
-- INSERT INTO department (name)
-- VALUES ("Engineering");

-- INSERT INTO department (name)
-- VALUES ("Finance");

-- INSERT INTO department (name)
-- VALUES ("Sales");

-- INSERT INTO department (name)
-- VALUES ("Legal");

-- --roles
-- INSERT INTO roles (title, salary, department_id)
-- VALUES ("Lawyer", 12000.00, 4);

-- INSERT INTO roles (title, salary, department_id)
-- VALUES ("Software Engineer", 8000.00, 1);

-- INSERT INTO roles (title, salary, department_id)
-- VALUES ("Accountant", 7750.00, 2);

-- INSERT INTO roles (title, salary, department_id)
-- VALUES ("Salesman", 5000.50, 3);

-- INSERT INTO roles (title, salary, department_id)
-- VALUES ("Lead Engineer", 10000.00, 1);

-- INSERT INTO roles (title, salary, department_id)
-- VALUES ("Sales Lead", 6500.00, 3);

-- --employee

-- INSERT INTO employee (firstName, lastName, manager_id)
-- VALUES ('Tony', 'Stark', 101);

-- INSERT INTO employee (firstName, lastName, manager_id)
-- VALUES ('Pepper', 'Potts', 102);

-- INSERT INTO employee (firstName, lastName, manager_id)
-- VALUES ('Bruce', 'Wayne', 103);

-- INSERT INTO employee (firstName, lastName, manager_id)
-- VALUES ('Diana', 'Prince', 104);

-- INSERT INTO employee (firstName, lastName, manager_id)
-- VALUES ('Steven', 'Rogers', 105);

-- INSERT INTO employee (firstName, lastName, manager_id)
-- VALUES ('Wanda', 'Maximoff', 106);


-- --
-- SELECT * FROM department;
-- SELECT * FROM roles;
-- SELECT * FROM employee;



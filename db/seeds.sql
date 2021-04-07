INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Legal");

--roles
INSERT INTO roles (title, salary, department_id)
VALUES ("Lawyer", 12000.00, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 8000.00, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 7750.00, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("Salesman", 5000.50, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Lead Engineer", 10000.00, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 6500.00, 3);

--employee

INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Tony', 'Stark', 101, 1);

INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Pepper', 'Potts', 102, 2);

INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Bruce', 'Wayne', 103, 3);

INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Diana', 'Prince', 104, 4);

INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Steven', 'Rogers', 105, 5);

INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Wanda', 'Maximoff', 106, 6);


--
SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

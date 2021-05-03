INSERT INTO department (deptname)
VALUES ("Engineering");

INSERT INTO department (deptname)
VALUES ("Finance");

INSERT INTO department (deptname)
VALUES ("Sales");

INSERT INTO department (deptname)
VALUES ("Legal");


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



INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Tony', 'Stark', null, 1);

INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Pepper', 'Potts', null , 2);

INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Bruce', 'Wayne', 31, 3);

INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Diana', 'Prince', 26 ,4);

INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Steven', 'Rogers', 31, 5);

INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUES ('Wanda', 'Maximoff', 26, 6);



SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

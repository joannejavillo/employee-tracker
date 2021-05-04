INSERT INTO department (deptname, id)
VALUES ("Engineering", 1),
("Finance", 2),
("Sales", 3),
("Legal", 4);


INSERT INTO roles (title, salary, department_id, id)
VALUES("Lawyer", 12000.00, 4, 1),
("Software Engineer", 8000.00, 1, 2),
("Accountant", 7750.00, 2, 3),
("Salesman", 5000.50, 3, 4),
("Lead Engineer", 10000.00, 1, 5),
("Sales Lead", 6500.00, 3, 6);



INSERT INTO employee (firstName, lastName, manager_id, role_id, id)
VALUES ('Tony', 'Stark', null, 1, 1),
('Pepper', 'Potts', null , 2, 2),
('Bruce', 'Wayne', 1, 3, 3),
('Diana', 'Prince', 2 ,4, 4),
('Steven', 'Rogers', 3, 5, 5),
('Wanda', 'Maximoff', 1, 6, 6);



SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

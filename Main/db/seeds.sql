SET FOREIGN_KEY_CHECKS=0;

-- Enter seed values into department table
INSERT INTO department (id, department_name)
VALUES (1,"Human Resources"),
       (2,"Operations"),
       (3,"Engineering"),
       (4,"Management");

-- Enter seed values into e_role table
-- Assign department_id from department table
INSERT INTO erole (role, salary, department_id, department)
VALUES ("HR Supervisor", 150000, 4, "Management"),
       ("HR A", 120000, 1, "Human Resources"),
       ("Ops Supervisor", 150000, 4, "Management"),
       ("Operator A", 120000, 2, "Operations"),
       ("Operator A", 120000, 2, "Operations"),
       ("Engineer Supervisor", 150000, 4, "Management"),
       ("Engineer A", 130000, 3, "Engineering"),
       ("Engineer B", 110000, 3, "Engineering");
           
-- Enter seed values into employee table
-- Assign e_role_id from e_role
INSERT INTO employee (id,first_name, last_name, erole_id, manager_id)
VALUES (1,"Irene", "Flemming", 20, NULL),
       (2,"Mayble", "Payne", 21, 20),
       (3,"Brian", "Ball", 22, NULL),
       (4,"Lucas", "Hunt", 23, 22),
       (5,"Warren", "Norris", 24, 22),
       (6,"Sonia", "Collins", 25, NULL),
       (7,"Tiffany", "Wilson", 26, 25),
       (8,"Martha", "Wolfe", 27, 25);
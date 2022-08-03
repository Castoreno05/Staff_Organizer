-- Enter seed values into department table
INSERT INTO department (department_name)
VALUES ("Human Resources"),
       ("Operations"),
       ("Engineering"),
       ("Management");

-- Enter seed values into e_role table
-- Assign department_id from department table
INSERT INTO erole (role, salary, department_id)
VALUES ("HR Supervisor", 150000, 4),
       ("HR A", 120000, 1),
       ("Ops Supervisor", 150000, 4),
       ("Operator A", 120000, 2),
       ("Operator A", 120000, 2),
       ("Engineer Supervisor", 150000, 4),
       ("Engineer A", 130000, 3),
       ("Engineer B", 110000, 3);
           
-- Enter seed values into employee table
-- Assign e_role_id from e_role
INSERT INTO employee (first_name, last_name, erole_id, manager_id)
VALUES ("Irene", "Flemming", 1, NULL),
       ("Mayble", "Payne", 2, 1),
       ("Brian", "Ball", 3, NULL),
       ("Lucas", "Hunt", 4, 3),
       ("Warren", "Norris", 5, 3),
       ("Sonia", "Collins", 6, NULL),
       ("Tiffany", "Wilson", 7, 6),
       ("Martha", "Wolfe", 8, 6);
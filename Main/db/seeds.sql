SET FOREIGN_KEY_CHECKS=0;

-- Enter seed values into department table
INSERT INTO department (department_name)
VALUES ("Human Resources"),
       ("Operations"),
       ("Engineers"),
       ("Instrumentation"),
       ("Management");

-- Enter seed values into e_role table
-- Assign department_id from department table
INSERT INTO erole (id, role_title, salary, department_id, erole)
VALUES (20, "Management", 150000, 5, "HR Supervisor"),
       (21, "HR", 120000, 1, "HR A"),
       (22, "HR", 110000, 1, "HR B"),
       (30, "Management", 150000, 5, "Ops Supervisor"),
       (31, "Operations", 120000, 2, "Operator A"),
       (32, "Operations", 120000, 2, "Operator A"),
       (33, "Operations", 110000, 2, "Operator B"),
       (40, "Management", 150000, 5, "Engineer Supervisor"),
       (41, "Engineer", 130000, 3, "Engineer A"),
       (42, "Engineer", 110000, 3, "Engineer B"),
       (50, "Management", 150000, 5, "Instrumentation Supervisor"),
       (51, "Instrumentation", 120000, 4, "Tech A"),
       (52, "Instrumentation", 950000, 4, "Tech B");
-- Enter seed values into employee table
-- Assign e_role_id from e_role
INSERT INTO employee (id, first_name, last_name, erole_id, manager_id)
VALUES (1, "Irene", "Flemming", 20, 212),
       (2, "Mayble", "Payne", 21, NULL),
       (3, "Connie", "Brooks", 22, NULL), 
       (7, "Brian", "Ball", 30, 164),
       (8, "Lucas", "Hunt", 31, NULL),
       (9, "Warren", "Norris", 32, NULL),
       (10, "Shane", "Arnold", 33, NULL),
       (14, "Sonia", "Collins", 40, 951),
       (15, "Tiffany", "Wilson", 41, NULL),
       (16, "Martha", "Wolfe", 42, NULL),
       (19, "Alonzo", "Wise", 50, 354),
       (20, "Zachary", "Little", 51, NULL),
       (21, "Henery", "Day", 52, NULL);
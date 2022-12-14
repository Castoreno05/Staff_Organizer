DROP DATABASE IF EXISTS staff_db;
-- Create a new database for this challenge
CREATE DATABASE staff_db;

USE staff_db;
-- Use the example from the instructions to create tables
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE erole (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(30) NOT NULL,
    salary DECIMAL,
    -- Linked to the department
    department_id INT,
    FOREIGN KEY (department_id)
    -- Reference the table being used
    REFERENCES department(id)  
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(75),
    last_name VARCHAR(75),
    -- Linked to e_role
    erole_id INT,
    manager_id INT,
    FOREIGN KEY (erole_id)
    -- Refernece the table being used
    REFERENCES erole(id),
    FOREIGN KEY (manager_id)
    REFERENCES erole(id)
);
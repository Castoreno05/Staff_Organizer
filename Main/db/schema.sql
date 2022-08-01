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
    id INT PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    erole TEXT NOT NULL,
    salary DECIMAL,
    -- Linked to the department
    department_id INT,
    FOREIGN KEY (department_id)
    -- Reference the table being used
    REFERENCES department(id)  
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(75),
    last_name VARCHAR(75),
    -- Linked to e_role
    erole_id INT,
    FOREIGN KEY (erole_id)
    -- Refernece the table being used
    REFERENCES erole(id),
    manager_id INT
);
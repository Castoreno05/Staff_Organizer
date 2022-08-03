// Need express to be imported
const express = require("express");
const inquirer = require("inquirer");
// Need mysql2
const mysql = require("mysql2");

// Enable a port and access to express in a variable
const PORT = process.env.PORT || 9001;
const app = express();

// Middleware for express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Need to connect to the database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    // password is used for this account. If your connection
    // requires a password please insert here
    password: "I69@WdHOH)(E1[E",
    database: "staff_db",
  },
  console.log("You have been connected to the staff_db database")
);

// View all departments
app.get("/api/departments", (req, res) => {
  // Returning department names from department table
  const sql = `SELECT id, department_name FROM department`;
  db.query(sql, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Add a department
app.post("/api/new-department", ({ body }, res) => {
  const sql = `INSERT INTO department (id, department_name)
        VALUES (${body.id}, "${body.department_name}");`;
  const params = [body];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

// View all of e_role
app.get("/api/roles", (req, res) => {
  // Returning roles from the e_role table
  const sql = `SELECT id, role, salary, department_id, department FROM erole`;
  db.query(sql, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Add a role
app.post("/api/new-role", ({ body }, res) => {
  const sql = `INSERT INTO erole (role, salary, department_id, department)
        VALUES ("${body.role}", ${body.salary}, ${body.department_id}, "${body.department}");`;
  const params = [body];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

// View all employees
// Need to assign employees with managers
app.get("/api/employees", (req, res) => {
  // Returning first and last name from employee table
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, erole.role, erole.department, erole.salary FROM erole JOIN employee ON erole.id = employee.id`;
  db.query(sql, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Add a employee
app.post("/api/new-employee", ({ body }, res) => {
  // See if you can insert into multiple tables just like you can pull from multiple tables
  const sql =
    `INSERT INTO employee (id, first_name, last_name)
        VALUES (${body.id},"${body.first_name}", "${body.last_name}");` +
    `INSERT INTO erole (role)
        VALUES ("${body.role});`;
  const params = [body];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

app.put("/api/employees/:id", (req, res) => {
  const sql = `UPDATE employee SET first_name = ? WHERE id = ?`;
  const params = [req.body.first_name, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee Not Found",
      });
    } else {
      res.json({
        message: "Success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

app.listen(PORT, () => {
//   console.log(`App Listening at http://localhost:${PORT}`);
});

inquirer
    .prompt([
        {
            type: 'list', 
            message: 'What would you like to do?',
            name: 'greetings',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
        },
    ])
    .then((answers) => {
        // Used for feedback from the questions answered
        console.log(answers)
    });


module.exports = app
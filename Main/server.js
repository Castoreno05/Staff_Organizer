// Need express to be imported
const express = require("express");
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
  const sql = `SELECT department_name FROM department`;
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
    const sql = `INSERT INTO department (department_name)
        VALUES (?)`;
    const params = [body.department_name];
  
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

// View all the roles
app.get("/api/roles", (req, res) => {
  // Returning roles from the e_role table
  const sql = `SELECT erole FROM erole `;
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

// View all of e_role
app.get("/api/employee-roles", (req, res) => {
    // Returning roles from the e_role table
    const sql = `SELECT * FROM erole`;
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

// View all employees
app.get("/api/employees", (req, res) => {
  // Returning first and last name from employee table
  const sql = `SELECT * FROM employee`;
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
// app.post("/api/new-role", ({ body }, res) => {
//     const sql = `INSERT INTO erole (id, role_title, salary, department_id, erole)
//         VALUES (?)`;
//     const params = [body];
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: "success",
//         data: body,
//       });
//     });
//   });

// Add a employee
// app.post("/api/new-employee", ({ body }, res) => {
//     const sql = `INSERT INTO employee (id, first_name, last_name, erole_id, manager_id)
//         VALUES (?)`;
//     const params = [body];
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: "success",
//         data: body,
//       });
//     });
// });

app.listen(PORT, () => {
  console.log(`App Listening at http://localhost:${PORT}`);
});

// const app = require('express');
// const router = require("express").Router();
// Need mysql2
// const mysql = require("mysql2");

// Enable a port and access to express in a variable
// const PORT = process.env.PORT || 9001;
// const app = express();

// Middleware for express
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(routes);

// Need to connect to the database
// const db = mysql.createConnection(
//   {
//     host: "localhost",
//     user: "root",
    // password is used for this account. If your connection
    // requires a password please insert here
//     password: "I69@WdHOH)(E1[E",
//     database: "staff_db",
//   },
//   console.log("You have been connected to the staff_db database")
// );

// db.connect(function (err) {
//     if (err) throw err;
//     init();
//   });

// View all departments
// router.get("/api/departments", (req, res) => {
  // Returning department names from department table
//   const sql = `SELECT id, department_name FROM department`;
//   db.query(sql, (err, row) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: row,
//     });
//   });
// });

// // Add a department
// router.post("/api/new-department", ({ body }, res) => {
//   const sql = `INSERT INTO department (department_name)
//           VALUES ("${body.department_name}");`;
//   const params = [body];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: body,
//     });
//   });
// });

// // View all of e_role
// router.get("/api/roles", (req, res) => {
  // Returning roles from the e_role table
//   const sql = `SELECT role, id, department_id, salary FROM erole`;
//   db.query(sql, (err, row) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: row,
//     });
//   });
// });

// // Add a role
// router.post("/api/new-role", ({ body }, res) => {
//   const sql = `INSERT INTO erole (role, salary, department_id)
//           VALUES ("${body.role}", ${body.salary}, ${body.department_id});`;
//   const params = [body];
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: body,
//     });
//   });
// });

// // View all employees
// Need to assign employees with managers
// router.get("/api/employees", (req, res) => {
  // Returning first and last name from employee table
//   const sql = `SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, erole.role, erole.department_id, erole.salary FROM erole JOIN employee ON erole.id = employee.id`;
//   db.query(sql, (err, row) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: row,
//     });
//   });
// });

// // Add a employee
// router.post("/api/new-employee", ({ body }, res) => {
  // See if you can insert into multiple tables just like you can pull from multiple tables
//   const sql =
//     `INSERT INTO employee (id, first_name, last_name)
//           VALUES (${body.id},"${body.first_name}", "${body.last_name}");` +
//     `INSERT INTO erole (role)
//           VALUES ("${body.role});`;
//   const params = [body];
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: body,
//     });
//   });
// });

// router.put("/api/employees/:id", (req, res) => {
//   const sql = `UPDATE employee SET first_name = ? WHERE id = ?`;
//   const params = [req.body.first_name, req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "Employee Not Found",
//       });
//     } else {
//       res.json({
//         message: "Success",
//         data: req.body,
//         changes: result.affectedRows,
//       });
//     }
//   });
// });

// app.listen(PORT, () => {
//     console.log(`App Listening at http://localhost:${PORT}`);
// });

// module.exports = router;

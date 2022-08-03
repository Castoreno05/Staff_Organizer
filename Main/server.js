// Need express to be imported
const express = require("express");
const inquirer = require("inquirer");
const table = require("console.table");
const routes = require('./routes/api');
// Need mysql2
const mysql = require("mysql2");

// Enable a port and access to express in a variable
const PORT = process.env.PORT || 9001;
const app = express();

// Middleware for express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

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


// app.listen(PORT, () => {
//     console.log(`App Listening at http://localhost:${PORT}`);
// });

db.connect(function (err) {
  if (err) throw err;
  init();
});

function init() {
  inquirer
    .prompt({
      type: "list",
      name: "greetings",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee role",
        "Quit",
      ],
    })
    .then(function (response) {
      switch (response.greetings) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Update employee role":
          updateRole();
          break;
        case "Quit":
          init();
      }
    });
}

async function viewDepartments() {
  const sql = `SELECT id, department_name FROM department`;
  const [rows] = await db.promise().query(sql)
  console.table(rows);
  init();
}

async function addRole() {
  const sql = `SELECT id, department_name FROM department`;
  const [departments] = await db.promise().query(sql)
  const departmentArray = departments.map(({id,department_name}) => ({name:department_name, value:id}))
  console.log(departmentArray); 
  inquirer
  .prompt([{
      type: 'input',
      name: 'title',
      message: 'What role'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'how much'
  },
  {
    type: 'list',
    name: 'department',
    message: 'Which department',
    choices: departmentArray
  }
  ]).then(async(answers) => {
    const roleObj = {role:answers.title, salary:answers.salary, department_id:answers.department}
    const sql = 'INSERT INTO erole SET ?'
    const response = await db.promise().query(sql, roleObj)
    // console.log({affectedRows});
    if(response){
      const sql = `SELECT * FROM erole`;
      const [response] = await db.promise().query(sql)
      console.table(response);
    }
    else{
      console.log('Role add was not successful');
    }

  })
}

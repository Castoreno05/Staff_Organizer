const inquirer = require("inquirer");
const table = require("console.table");

// Need mysql2
const mysql = require("mysql2");
// Create connection to database
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

// Calls for the main menu when index.js is started in terminal 
init()

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
        "Add an Employee",
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
          db.end();
      }
    });
}
// Function to view all the departments
async function viewDepartments() {
  const sql = `SELECT id, department_name FROM department`;
  const [rows] = await db.promise().query(sql);
  console.table(rows);
  init();
}
// Function to view all the roles
async function viewRoles() {
  const sql = `SELECT role, id, department_id, salary FROM erole`;
  const [rows] = await db.promise().query(sql);
  console.table(rows);
  init();
}
// Function to view all employees
async function viewEmployees() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, erole.role, erole.department_id, erole.salary FROM erole JOIN employee ON erole.id = employee.id`;
  const [rows] = await db.promise().query(sql);
  console.table(rows);
  init();
}
// function to add new department
async function addDepartment() {
  const sql = `SELECT * FROM department`;
  const [departments] = await db.promise().query(sql);
  const departmentArray = departments.map(({ id, department_name }) => ({
    name: department_name,
    value: id,
  }));
  // console.log(departmentArray)
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of this department",
      },
    ])
    .then(async (answers) => {
      const departmentObj = { department_name: answers.title };
      const sql = `INSERT INTO department SET ?`;
      const response = await db.promise().query(sql, departmentObj);
      if (response) {
        const sql = `SELECT * FROM department`;
        const [response] = await db.promise().query(sql);
        console.table(response);
        init();
      }
    });
}
// Function to add new role
async function addRole() {
  const sql = `SELECT id, department_name FROM department`;
  const [departments] = await db.promise().query(sql);
  const departmentArray = departments.map(({ id, department_name }) => ({
    name: department_name,
    value: id,
  }));
  // console.log(departmentArray);
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of this role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the annual salary?",
      },
      {
        type: "list",
        name: "department",
        message: "Which department does this role belong to?",
        choices: departmentArray,
      },
    ])
    .then(async (answers) => {
      const roleObj = {
        role: answers.title,
        salary: answers.salary,
        department_id: answers.department,
      };
      const sql = "INSERT INTO erole SET ?";
      const response = await db.promise().query(sql, roleObj);
      // console.log({affectedRows});
      if (response) {
        const sql = `SELECT * FROM erole`;
        const [response] = await db.promise().query(sql);
        console.table(response);
      } else {
        console.log("Role add was not successful");
      }
      init();
    });
}
// Function to add an employee
function addEmployee() {
  db.query("SELECT * FROM erole", function (err, results) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "firstName",
          message: "What is the first name of this employee?",
        },
        {
          type: "input",
          name: "lastName",
          message: "What is the last name of this employee?",
        },
        {
          type: "list",
          name: "managerId",
          message: "Select the id of the manager for this employee",
          choices: ["1", "3", "6"],
        },
        {
          type: "list",
          name: "role",
          message: "What is the role for this employee?",
          choices: results.map((role) => role.role),
        },
      ])
      .then((answers) => {
        // console.log(answers);
        let newRole = results.find((role) => role.role === answers.role);
        db.query("INSERT INTO employee SET ?", {
          first_name: answers.firstName,
          last_name: answers.lastName,
          erole_id: newRole.managerId,
        });
        console.table(answers);
        init();
      });
  });
}
// Function to update an employee
async function updateRole() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name FROM employee`;
  const [rows] = await db.promise().query(sql);

  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeId",
        message: "What is the name of the employee you want to update.",
        choices: rows.map(({ id, first_name, last_name }) => {
          return { name: `${first_name} ${last_name}`, value: id };
        }),
      },
    ])
    .then(async (response) => {
      const roleSql = `SELECT * FROM erole`;
      const [roles] = await db.promise().query(roleSql);

      inquirer
        .prompt([
          {
            type: "list",
            name: "roleId",
            message: "What is the role that you would like to update",
            choices: roles.map(({ id, role }) => {
              return { name: role, value: id };
            }),
          },
        ])
        .then(async (updatedRole) => {
          const updateSQL = `UPDATE employee SET erole_id = ? WHERE id = ?`;
          const params = [updatedRole.roleId, response.employeeId];

          await db.promise().query(updateSQL, params);
          // console.log('roles saved')
          init();
        });
    });
}

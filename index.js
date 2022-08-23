const mysql = require("mysql2");
const inquirer = require("inquirer");
const utils = require("util");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "company_db",
  },
  console.log(`Connected to the company_db database.`)
);

db.query = utils.promisify(db.query);

// Initial prompt to main menu
const mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: 
        [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit"
        ],
      },
    ])
    .then((answer) => {
      console.log(answer);

      switch (answer.task) {
        case "View All Employees":
          return viewAllEmployees();
        case "Add Employee":
          return addEmployee();
        case "Update Employee Role":
          return updateRole();
        case "View All Roles":
          return viewAllRoles();
        case "Add Role":
          return addRole();
        case "View All Departments":
          return viewAllDepartments();
        case "Add Department":
          return addDepartment();
        case "quit":
          return quit();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

mainMenu();

// View all employee
// SELECT * FROM employee;

async function viewAllEmployees () {
  const employee = await db.query("SELECT * FROM employee");
  console.table(employee);
}

// View all departments
// SELECT * FROM department;

async function viewAllDepartments () {
  const department = await db.query("SELECT * FROM department");
  console.log(department);
}

// View all roles
// SELECT * FROM roles;

async function viewAllRoles () {
  const roles = await db.query("SELECT * FROM role");
  console.log(roles);
}

// Create a new departments
// async function addDepartment () {
//   const department = await inquirer.prompt 
//   ([
//     {
//       name: "department_name",
//       type: "input",
//       message: "What Department would you like to add?",
//     }
//   ]);
//   await db.query("INSERT INTO department (department_name) VALUES (?)")
//   console.log(department);
// };
const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "department_name",
        type: "input",
        message: "What Department would you like to add?",
      },
    ])
    .then((answers) => {
      console.log(answers);

      db.query(
        "INSERT INTO department (department_name) VALUES (?)",
        [answers.department_name]
      );
    });
};

// addDepartment();

// Prompt the user for the "name" of the department

// THEN run the query
// INSERT INTO department (name)
// VALUES ("Sales");

// THEN ask the user what they want to do next

// Create a new role
// function()
// const addRole = () => {
//   inquirer
//     .prompt([
//       {
//         name: "title",
//         type: "input",
//         message: "What role would you like to add?",
//       },
//       {
//         name: "salary",
//         type: "input",
//         message: "What is employee's salary",
//       },
//       {
//         name: "department_id",
//         type: "input",
//         message: "What is the department id for this role?",
//       },
//     ])
//     .then((answers) => {
//       console.log(answers);

//       db.query(
//         "INSET INTO role (title, salary, department_id) VALUES (?, ?, ?)",
//         [answer.title, answer.salary, answer.department_id],
//         (err, res) => {
//           if (err) throw err;
//           console.log(res);
//         }
//       );
//     });
// };

// addRole();

// Get the existing department from the 'department' table

// THEN // prompt the user for the "title", "salary", and "department" for the role

// THEN Run the query
// INSERT INTO role (title, salary, department_id)
// VALUES ("?, ?, ?")

// THEN ask the user what they want to do next

// async function createPost()
// {
//   const departments = await db.query("SELECT * FROM department");

//   console.log(departments);

//   const role = await db.query("SELECT * FROM role");

//   console.log(role);

//   const employee = await db.query("SELECT * FROM employee");

//   console.log(employee);
// }

// createPost();

function init() {}
init ();

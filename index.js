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
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Delete Employee",
          "Delete Role",
          "Delete Department",
          "Quit",
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

// View all employees
async function viewAllEmployees() {
  const employee = await db.query("SELECT * FROM employee");
  console.table(employee);
  mainMenu();
}

// View all departments
async function viewAllDepartments() {
  const department = await db.query("SELECT * FROM department");
  console.table(department);

  mainMenu();
}

// View all roles
async function viewAllRoles() {
  const roles = await db.query("SELECT * FROM role");
  console.table(roles);
  mainMenu();
}

// Add department
const addDepartment = () => {
  inquirer
    // Prompt the user for the "name" of the department
    .prompt([
      {
        name: "department_name",
        type: "input",
        message: "What is the name of the department?",
      },
    ])
    .then((answers) => {
      db.query("INSERT INTO department (department_name) VALUES (?)", 
      [
        answers.department_name,
      ]
      );
      console.log("added to the database");
      mainMenu();
    });
};

// Add role
const addRole = () => {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What role would you like to add?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is employee's salary",
      },
      {
        name: "department_id",
        type: "input",
        message: "What department does this role belong to?",
      },
    ])
    .then((answers) => {

      db.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [
          answers.title, 
          answers.salary, 
          answers.department
        ]
      );
      console.log("added to the database");
      mainMenu();
    });
};

// Add employee
const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the employee's last name",
      },
      {
        name: "role_id",
        type: "input",
        message: "What is the role id for this employee?",
      },
      {
        name: "manager_id",
        type: "input",
        message: "What is manager's id number for this employee?",
      },
    ])
    .then((answers) => {

      db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [
          answers.first_name,
          answers.last_name,
          answers.role_id,
          answers.manager_id,
        ]
      );
      console.log("added to the database");
      mainMenu();
    });
};

// Update Employee Role
const updateRole = () => {
  inquirer
    .prompt([
      {
        name: "update_employee",
        type: "input",
        message: "What employee would you like to update?",
        // choices: [viewAllEmployees]
      },
      {
        name: "new_role",
        type: "input",
        message: "What is the employee's new role?",
      }
    ])
    .then((answers) => {
      db.query('UPDATE employee SET role_id= ? WHERE first_name = ?', [answers.new_role, answers.update_employee]
      );
      console.log("added to the database");
      mainMenu();
    });
};


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
init();

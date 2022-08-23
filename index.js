const mysql = require('mysql2');
const inquirer = require('inquirer');
const utils = require('util');


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'company_db'
    },
  );

  db.query = utils.promisify(db.query);


const openingPrompt = () => {
  inquirer.prompt ([
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
        "Quit"
      ]
    }
  ])
  .then((answers) => {

    console.log(answers);
  })
  .catch((error) => {
    console.log(error);
  })

}



// View all departments
// SELECT * FROM department;


// View all roles
// SELECT * FROM roles;

// View all employee
// SELECT * FROM employee;

// Create a new departments
const addDepartment = () => {
  inquirer.prompt([
    {
      name: "department_name",
      type: "input",
      message: "What Department would you like to add?"
    },
    {
      name: "department_id",
      type: "input",
      message: "What is the department id?"
    }
  ])
  .then((answers) => {
    console.log(answers);
  })
}

function init() {
  openingPrompt(),
  addDepartment()
};

init();
// Prompt the user for the "name" of the department

    // THEN run the query
    // INSERT INTO department (name)
    // VALUES ("Sales");

        // THEN ask the user what they want to do next

// Create a new role
// function()

// Get the existing department from the 'department' table

    // THEN // prompt the user for the "title", "salary", and "department" for the role

        // THEN Run the query
        // INSERT INTO role (title, salary, department_id)
        // VALUES ("?, ?, ?")

            // THEN ask the user what they want to do next
        

async function createPost() 
{
  const departments = await db.query("SELECT * FROM department");

  console.log(departments);

  const role = await db.query("SELECT * FROM role");

  console.log(role);

  const employee = await db.query("SELECT * FROM employee");

  console.log(employee);
}


createPost();


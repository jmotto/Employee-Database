const mysql2 = require('mysql2');
const utils = require('util');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'employee_db'
    },
  );

  db.query = utils.promisify(db.query);

// View all departments
// SELECT * FROM department;

// View all roles
// SELECT * FROM roles;

// View all employee
// SELECT * FROM employee;

// Create a new departments

// Prompt the user for the "name" of the department

    // THEN run the query
    // INSERT INTO department (name)
    // VALUES ("Sales");

        // THEN ask the user what they want to do next

// Create a new role

// Get the existing department from the 'department' table

    // THEN // prompt the user for the "title", "salary", and "department" for the role

        // THEN Run the query
        // INSERT INTO role (title, salary, department_id)
        // VALUES ("?, ?, ?")

            // THEN ask the user what they want to do next
        
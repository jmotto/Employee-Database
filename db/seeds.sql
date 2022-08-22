USE company_db

INSERT INTO department (department_name)
    VALUES 
        ("Sales"),
        ("Finance"),
        ("Engineering");


INSERT INTO role (title, salary, department_id)
    VALUES 
        ("Sales Lead", 120000, 1),
        ("Accountant", 200000, 2),
        ("Software Engineer", 150000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES 
        ("Jamie", "Otto", 1, 2),
        ("Jane", "Smith", 2, 3),
        ("John", "Jackson", 3, 1);
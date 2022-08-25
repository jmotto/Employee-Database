USE company_db

INSERT INTO department (department_name)
    VALUES 
        ("Sales"),
        ("Finance"),
        ("Engineering"),
        ("Legal");


INSERT INTO role (title, salary, department_id)
    VALUES 
        ("Sales Lead", 120000, 1),
        ("Salesperson", 80000, 1),
        ("Accountant", 200000, 2),
        ("Account Manager", 120000, 2),
        ("Lead Engineer", 150000, 3),
        ("Software Engineer", 120000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES 
        ("Arthur", "Apple", 1, NULL),
        ("Beth", "Bell", 2, NULL),
        ("Callie", "Carr", 3, NULL);
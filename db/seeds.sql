INSERT INTO departments (name)
VALUES  ("Administration"),
        ("Marketing"),
        ("Legal"),
        ("Human Resources"),
        ("Engineering");

INSERT INTO roles (title, department_id, salary)
VALUES  ("Administrator", 1, 325000),
        ("Admin Assistant", 1, 170000),
        ("Marketing Lead", 2, 250000),
        ("Marketer", 2, 170000),
        ("Legal Director", 3, 285000),
        ("Lawyer", 3, 225000),
        ("HR Director", 4, 130000),
        ("HR Generalist", 4, 130000),
        ("Engineering Manager", 5, 200000),
        ("Engineer", 5, 120000);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Steve", "Brule", 1, NULL),
        ("Dina", "Gumby", 3, NULL),
        ("Matthew", "Flooper", 5, NULL),
        ("Sarah", "Flooper", 7, NULL),
        ("Frances", "Manances", 9, NULL),
        ("Mark", "Bubert", 2, 1),
        ("Filipe", "Esparza", 4, 2),
        ("Marilyn", "Ackerman", 6, 3),
        ("Casca", "Grace", 8, 4),
        ("Levi", "Strauss", 10, 5);
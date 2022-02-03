INSERT INTO departments (name)
VALUES  ("Administration"),
        ("Marketing"),
        ("Legal"),
        ("Human Resources"),
        ("Engineering");

INSERT INTO roles (title, department_id, salary)
VALUES  ("Administrator", 1, 225000),
        ("Marketing Lead", 2, 180000),
        ("Lawyer", 3, 175000),
        ("HR Generalist", 4, 130000),
        ("Engineer", 5, 130000);

INSERT INTO employees (role_id, first_name, last_name, manager_id)
VALUES  (1, "Steve", "Brule", 1),
        (2, "Dina", "Gumby", 2),
        (3, "Matthew", "Flooper", 3),
        (4, "Sarah", "Flooper", 4),
        (5, "Frances", "Manances", 5);
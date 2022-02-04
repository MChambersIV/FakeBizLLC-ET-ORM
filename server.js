const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);


inquirer.prompt([
  {
  type: 'list',
  name: 'list_question',
  message: 'What would you like to do?',
  choices: ['View All Departments', 
  'View All Roles', 
  'View All Employees', 
  'Add A Department', 
  'Add A Role', 
  'Add An Employee',
  'Update An Employee Role'],
  },
  {
    type: 'input',
    name: 'departmentName',
    message: "What is this Deparment's name?",
    when: (answers) => answers.list_question === 'Add A Department'
  },
  {
    type: 'input',
    name: 'first_name',
    message: "What's their first name?",
    when: (answers) => answers.list_question === 'Add An Employee'
  },
  {
    type: 'input',
    name: 'last_name',
    message: "What's their last name?",
    when: (answers) => answers.list_question === 'Add An Employee'
  },
  {
    type: 'input',
    name: 'role_id',
    message: "What's their role ID? (Refer to Roles for ID)",
    when: (answers) => answers.list_question === 'Add An Employee'
  },
  {
    type: 'input',
    name: 'manager',
    message: "What's their manager's ID? (Refer to Employees Roster for Manager ID)",
    default: 'Has no Manager',
    when: (answers) => answers.list_question === 'Add An Employee'
  },
  {
    type: 'input',
    name: 'title',
    message: "What's this role's title?",
    default: 'Has no Manager',
    when: (answers) => answers.list_question === 'Add A Role'
  },
  {
    type: 'input',
    name: 'department_id',
    message: "What's the deparment ID for this role?",
    default: 'Has no Manager',
    when: (answers) => answers.list_question === 'Add A Role'
  },
  {
    type: 'input',
    name: 'salary',
    message: "What's this role's salary?",
    default: 'Has no Manager',
    when: (answers) => answers.list_question === 'Add A Role'
  },
]).then((answers) => {
  if (answers.list_question === 'View All Departments'){
    db.query(
      'SELECT * FROM departments',
      function(err, results) {
        console.log(results);
      }
    );
  } else if (answers.list_question === 'View All Roles'){
    db.query(
      'SELECT * FROM roles',
      function(err, results) {
        console.log(results);
      }
    );
  } else if (answers.list_question === 'View All Employees'){
    db.query(
      'SELECT * FROM employees',
      function(err, results) {
        console.log(results);
      }
    );
  } else if (answers.list_question === 'Add A Department') {
    const {departmentName} = answers;
  
      db.query(
        `INSERT INTO departments (name) VALUES ("${departmentName}");`,
        function(err, results) {
          console.log(results)
          inquirer;
        }
      )
  } else if (answers.list_question === 'Add A Role') {
    const {title, department_id, salary} = answers;
  
      db.query(
        `INSERT INTO roles (title, department_id, salary) VALUES ("${title}", ${department_id}, ${salary});`,
        function(err, results) {
          console.log(results);
        }
      )
  } else if (answers.list_question === 'Add An Employee') {
    const {first_name, last_name, role_id, manager_id} = answers; 

    db.query(
      `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${first_name}", "${last_name}", ${role_id}, ${manager_id});`,
      function(err, results) {
        console.log(results);
      }
    )
  } else if (answers.list_question === 'Update An Employee Role') {
    console.log(answers.list_question)
  
  }
  
});


  




  
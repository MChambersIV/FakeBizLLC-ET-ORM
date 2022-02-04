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


const addDeparment = [
  {
    type: 'input',
    name: 'departmentName',
    message: "What is this Deparment's name?",
  },
];

const addRole = [
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  },
];

const addEmployee = [
  {
  type: 'list',
  name: 'list_question',
  message: 'What would you like to do?',
  choices: ['View All Departments', 
  'View All Roles', 
  'View All Employees', 
  'Add A Deparment', 
  'Add A Role', 
  'Add An Employee',
  'Update An Employee Role'],
  },  
];




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
        `INSERT INTO departments (name) VALUES ("${departmentName}")`,
        function(err, results) {
          console.log(results);
        }
      )
  } else if (answers.list_question === 'Add A Role') {
    console.log(answers.list_question)
  } else if (answers.list_question === 'Add An Employee') {
    console.log(answers.list_question) 
  } else if (answers.list_question === 'Update An Employee Role') {
    console.log(answers.list_question)
  
  }
  
});


  




  
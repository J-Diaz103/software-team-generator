const inquirer = require('inquirer');
const fs = require('fs');
const { type, userInfo } = require('os');


class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        inquirer.prompt([
            {
                type: 'input',
                message: "what Employee name?",
                name: 'employee'
            }
        ]) 
        console.log(this.name, "Okay");
    }

    getId(){
        inquirer.prompt([
            {
                type:'input',
                message:'what is the ID number?',
                name:"id"
            }
        ])

    }
    
    getEmail(){
        inquirer.prompt([
            {
                type:'input',
                message:'what is the eamil?',
                name:"email"
            }
        ])

    }

    getRole(){
        inquirer.prompt([
            {
                type: 'list',
                message: " what type of team member do you want to add? ",
                choices:["Manager", "Engineer", "Intern"]
            }
        ])
        
    }
}

var employee1 = new Employee(this.name,);
employee1.getName();

module.exports = Employee;


const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

class Manger extends Employee{
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }
    
    getRole(){
        
    }
}
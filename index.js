const inquirer = require('inquirer');
const fs = require('fs');

//this will be to chose what tyoe team member to add
const teambuilder = () => {
    console.log("choose a team member to add")
    return inquirer.prompt([
        {
            type: 'list',
            message: " what type of team member do you want to add? ",
            choices:["Manager", "Engineer", "Intern"]
        }
    ])
}

// this will ask the questions for the manger info
const  managerBuilder = () => {[
    {
        type:'input',
        message:"What is the Manager name?",
        name: "manger"
    },
    {
        type:'input',
        message:'what is the ID number?',
        name:"ID"
    },
    {
        type:'input',
        message:'what is the eamil?',
        name:"email"
    },
    {
        type:'input',
        message:'what is the office number?',
        name:"ID"
    },
]}

// this will ask the questions for the engineer info
const  engineerBuilder = () => {[
    {
        type:'input',
        message:"What is the Engineer name?",
        name: "engineer"
    },
    {
        type:'input',
        message:'what is the ID number?',
        name:"ID"
    },
    {
        type:'input',
        message:'what is the eamil?',
        name:"email"
    },
    {
        type:'input',
        message:'what is the GitHub username?',
        name:"username"
    },
]}

// this will ask the questions for the Intern info
const  internBuilder = () => {[
    {
        type:'input',
        message:"What is the Intern name?",
        name: "Intern"
    },
    {
        type:'input',
        message:'what is the ID number?',
        name:"ID"
    },
    {
        type:'input',
        message:'what is the eamil?',
        name:"email"
    },
    {
        type:'input',
        message:'what is the school name?',
        name:"school"
    },
]}




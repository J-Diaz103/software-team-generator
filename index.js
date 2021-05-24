const inquirer = require('inquirer');
const fs = require('fs');

team = [];
//this will be to chose what tyoe team member to add
const teambuilder = () => {
    console.log("choose a team member to add")
    return inquirer.prompt([
        {
            type: 'list',
            message: " what type of team member do you want to add? ",
            choices:["Manager", "Engineer", "Intern"],
            name:'position'
        }
    ])
    .then(answers => {
        console.info('Answer:', answers.position);
        if (answers.position === "Manager") {
            managerBuilder();
        } else if(answers.position === "Engineer"){
            engineerBuilder();
        } else if( answers.position === "Intern"){
            internBuilder();
        }
      });
    
}

// this will ask the questions for the manger info
//added ending
const  managerBuilder = () => {
    return inquirer.prompt([
        {
            type:'input',
            message:"What is the Manager name?",
            name: "manager"
        },
        {
            type:'input',
            message:'what is the manager ID number?',
            name:"id"
        },
        {
            type:'input',
            message:'what is the manager eamil?',
            name:"email"
        },
        {
            type:'input',
            message:'what is the office number?',
            name:"officenum"
        },

    ])
    .then(answers => {
        
        console.info('Answer:', answers.manager);
        console.info('Answer:', answers.id);
        console.info('Answer:', answers.email);
        console.info('Answer:', answers.officenum);
        ending();
      });
    }
    
// this will ask the questions for the engineer info
//added ending
const  engineerBuilder = () => {
    return inquirer.prompt([
        {
            type:'input',
            message:"What is the Engineer's name?",
            name: "engineer"
        },
        {
            type:'input',
            message:'what is the ID number?',
            name:"id"
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

    ])
    .then(answers => {
        console.info('Answer:', answers.engineer);
        console.info('Answer:', answers.id);
        console.info('Answer:', answers.email);
        console.info('Answer:', answers.username);
        ending();
        });
    }

// this will ask the questions for the Intern info 
//added ending
const  internBuilder = () => {
    return inquirer.prompt([
        {
            type:'input',
            message:"What is the Intern name?",
            name: "intern"
        },
        {
            type:'input',
            message:'what is the ID number?',
            name:"id"
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

    ])
    .then(answers => {
        console.info('Answer:', answers.inter);
        console.info('Answer:', answers.id);
        console.info('Answer:', answers.email);
        console.info('Answer:', answers.school);
        ending();
        });
    }

// need an end function
const ending = () => {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "choice",
            message: "Do you want to add more members?"
          }
    ])
    .then(val => {
        // If the user says yes to another game, play again, otherwise quit the game
        if (val.choice) {
          teambuilder();
        } else { console.log("this will need to add the html for the cards")}
      });
}


teambuilder();

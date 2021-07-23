const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const template = require('./src/template');

team = [];
teamid=[]; 
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
            name: "managerName"
        },
        {
            type:'input',
            message:'what is the manager ID number?',
            name:"managerId"
        },
        {
            type:'input',
            message:'what is the manager eamil?',
            name:"email"
        },
        {
            type:'input',
            message:'what is the office number?',
            name:"officeNum"
        },

    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.email, answers.officeNum);
        team.push(manager);
        teamid.push(answers.managerId);
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
            name: "engineerName"
        },
        {
            type:'input',
            message:'what is the ID number?',
            name:"engineerId"
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
        const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.email, answers.username);
        team.push(engineer);
        teamid.push(answers.engineerId);
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
            name: "internName"
        },
        {
            type:'input',
            message:'what is the ID number?',
            name:"internId"
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
        const intern = new Intern(answers.internName, answers.internId, answers.email, answers.school);
        team.push(intern);
        teamid.push(answers.internId);
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
        } else { 
            // should use a for each loop to get each item in the team array
            // use the team id array to make sure that an id is not used more than once
            console.log("this will need to add the html for the cards");
            console.log(team);
            console.log(teamid);
            let builtTeam = template(team);
            console.log(builtTeam);
            fs.writeFileSync("team.html", builtTeam, function(err){
                if(err){
                    return console.log(err)
                }
            });
        }
      });
}


teambuilder();


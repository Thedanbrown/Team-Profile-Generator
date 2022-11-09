const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/htmlTemplate.js");

const { rejects } = require("assert");

const teamARR = [];

const managerQuestions = () => {
        return inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "What is the Manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Manager's employee ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?",
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
            }   else {
                    console.log("Please enter a valid email")
                    return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?"
    }])
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager (name, id, email, officeNumber);
        teamARR.push(manager);
        console.log(manager);
        engineerOrIntern();
    })
    
}

const engineerOrIntern = () => {
    return inquirer.prompt ([
    {
        type: 'list',
        name: 'engineerOrIntern',
        message: 'add an Engineer, Intern, or finished adding Members',
        choices: ['Engineer', 'Intern', 'Finished']
    }])
    .then(employeeData => {
        switch(employeeData.engineerOrIntern) {
            case 'Engineer': 
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            case 'Finished':
                writeOutHtml()
                break;
            default:
                engineerOrIntern();
                break;
        }
    })
}

const engineerQuestions = () => {
    return inquirer.prompt ([ 
    {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Engineer's employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the Engineer's email address?",
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
            }   else {
                    console.log("Please enter a valid email")
                    return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the Engineer's Github username?"
    }
    ])
    .then(engineerData => {
        const { name, id, email, github } = engineerData;
        const engineer = new Engineer (name, id, email, github);
        teamARR.push(engineer);
        engineerOrIntern();
    })
}

const internQuestions = () => {
    return inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "What is the Intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Intern's employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the Intern's email address?",
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
            }   else {
                    console.log("Please enter a valid email")
                    return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is the Intern's school?"
    }])
    .then(internData => {
        const { name, id, email, school } = internData;
        const intern = new Intern (name, id, email, school);
        teamARR.push(intern);
        engineerOrIntern();
    })
}

//function to start questions
    //manager questions 
    //then engineerOrIntern
    //then engineer/intern questions
    //then engineerOrIntern again ect

const writeOutHtml = () => {
    const html = generateHtml(teamARR);
    fs.writeFile('./dist/team.html', html , err => {
        if(err){
            rejects(err);
            return;
        } else (
            console.log('Team Profile Created')
        )
    } )
}

managerQuestions();

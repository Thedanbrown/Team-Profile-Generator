const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/htmlTemplate.js")

const managerQuestions = [ 
    {
        type: "input",
        name: "managerName",
        message: "What is the Manager's name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the Manager's employee ID number?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the Manager's email address?"
    },
    {
        type: "input",
        name: "managerOfficeNum",
        message: "What is the Manager's office number?"
    }
]

const engineerOrIntern = [
    {
        type: 'list',
        name: 'engineerOrIntern',
        message: 'add an Engineer, Intern, or finished adding Members',
        choices: ['Engineer', 'Intern', 'No More Members']
    },

]

const engineerQuestions = [ 
    {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?"
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's employee ID number?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's email address?"
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is the Engineer's Github username?"
    }
]

const internQuestions = [ 
    {
        type: "input",
        name: "internName",
        message: "What is the Intern's name?"
    },
    {
        type: "input",
        name: "internId",
        message: "What is the Intern's employee ID number?"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the Intern's email address?"
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is the Intern's school?"
    }
]

const writeHTML = teamData => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/teamIndex.html', teamData, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Team Page created!'
            });
        });
    });
};

//function to start questions
const init = () => {
    return inquirer.prompt(managerQuestions)
    //then engineerOrIntern
    //then engineer/intern questions
    //then engineerOrIntern again ect
}
//call to start app
init()
    .then(teamData => {
        return generateHTML(teamData);
    })
    .then(html => {
        return writeHTML(html)
    })
    .then(writeHTMLResponse =>{
        console.log(writeHTMLResponse.message)
    })
    .catch(err => {
        console.log(err)
    })

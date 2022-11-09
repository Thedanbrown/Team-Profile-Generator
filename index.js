//bringing in classes and modules
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/htmlTemplate.js");

const { rejects } = require("assert");
//array for all of our team members as questions are answered
const teamARR = [];

//function that generates the manager and then continues the questions with choices to add engineer/intern or finish
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
        //calls engineer or intern to let us choose to add either or finish
        engineerOrIntern();
    })
    
}

//function has user choose to add intern/engineer or finish the app
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
                //when finished is finally chosen the html file is generated with user data and a console message appears as confirmation
            case 'Finished':
                writeOutHtml()
                break;
            default:
                engineerOrIntern();
                break;
        }
    })
}

//questions to add an engineer then reopens choosing to add another intern/engineer or to finish the app
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

//questions to add an intern then reopens choosing to add another intern/engineer or to finish the app
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

//function for generating the html page into the dist folder
const writeOutHtml = () => {
    const html = generateHtml(teamARR);
    fs.writeFile('./dist/team.html', html , err => {
        if(err){
            rejects(err);
            return;
        } else (
            console.log('Team Profile Created!')
        )
    } )
}
// starts the application when node index.js is run in the terminal
managerQuestions();

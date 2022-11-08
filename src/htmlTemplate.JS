
const managerCard = manager => {
    return `
            <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h2>${manager.getName()}</h2>
                    <h3>${manager.getRole()}<h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getID()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
                    </ul>
                </div>
            </div> 
        `;
    }

const engineerCard = engineer => {
    return `
            <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h2>${engineer.getName()}</h2>
                    <h3>${engineer.getRole()}<h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.getID()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div> 
        `;
    }

const internCard = intern => {
    return `
            <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h2>${intern.getName()}</h2>
                    <h3>${intern.getRole()}<h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.getID()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div> 
        `;
    }

    
//TODO Generate Cards and Append to HTML
function generateHTML() {
    return `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Our Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    </head>
    <body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 p-3 h1 w-100 text-center bg-secondary text-white" id="navbar-text">Meet Our Team</span>
        </nav>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center" id="team">

            </div>
        </div>
    </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
</html>
`
}
module.exports = generateHTML;
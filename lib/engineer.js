const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
    //generates the card html whenever an engineer is added
    generateHtml() {
        return `
                <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                        <h2>${this.getName()}</h2>
                        <h3>${this.getRole()}<h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${this.getID()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${this.getGithub()}" target="_blank">${this.getGithub()}</a></li>
                        </ul>
                    </div>
                </div> 
            `;
        }
}

module.exports = Engineer;
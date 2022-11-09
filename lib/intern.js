const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
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
                            <li class="list-group-item">School: ${this.getSchool()}</li>
                        </ul>
                    </div>
                </div> 
            `;
        }
}

module.exports = Intern;
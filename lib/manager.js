const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOffice() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
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
                            <li class="list-group-item">Office Number: ${this.getOffice()}</li>
                        </ul>
                    </div>
                </div> 
            `;
        }
}



module.exports = Manager;
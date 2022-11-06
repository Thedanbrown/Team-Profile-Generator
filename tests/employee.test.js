const Employee = require("../lib/Employee")
const employee = new Employee('dan', 3434, 'thedanbrown@gmail.com');

describe('Employee', () => {
    it('creates new employee object', () => {
        expect(employee.name).toContain('');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toContain('@');
    });
    it('gets employee name', () => {
        expect(employee.getName()).toContain('');
    })
    it('gets employee ID number', () => {
        expect(employee.getID()).toEqual(expect.any(Number));
    })
    it('gets employee email', () => {
        expect(employee.getEmail()).toContain('@');
    })
    it('gets employee role', () => {
        expect(employee.getRole()).toContain('Employee');
    })
});
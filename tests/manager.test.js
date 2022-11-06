const Manager = require('../lib/Manager')
const manager = new Manager('dan', 3434, 'thedanbrown@gmail.com', 4);

describe('Manager', () => {
    it('creates new Manager object', () => {
        expect(manager.name).toContain('');
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toContain('@');
        expect(manager.officeNumber).toEqual(expect.any(Number))
    });
    it('gets manager name', () => {
        expect(manager.getName()).toContain('');
    })
    it('gets manager ID number', () => {
        expect(manager.getID()).toEqual(expect.any(Number));
    })
    it('gets manager email', () => {
        expect(manager.getEmail()).toContain('@');
    })
    it('gets manager Office Number', () => {
        expect(manager.getOffice()).toEqual(expect.any(Number));
    })
    it('gets manager role', () => {
        expect(manager.getRole()).toContain('Manager');
    })
});
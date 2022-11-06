const Intern = require('../lib/Intern')
const intern = new Intern('dan', 3434, 'thedanbrown@gmail.com', 'GA Tech' );

describe('Intern', () => {
    it('creates new Intern object', () => {
        expect(intern.name).toContain('');
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toContain('@');
        expect(intern.school).toContain('');
    });
    it('gets interns name', () => {
        expect(intern.getName()).toContain('');
    })
    it('gets intern ID number', () => {
        expect(intern.getID()).toEqual(expect.any(Number));
    })
    it('gets intern email', () => {
        expect(intern.getEmail()).toContain('@');
    })
    it('gets interns school', () => {
        expect(intern.getSchool()).toContain('');
    })
    it('gets intern role', () => {
        expect(intern.getRole()).toContain('Intern');
    })
});
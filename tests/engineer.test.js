const Engineer = require('../lib/Engineer')
const engineer = new Engineer('dan', 3434, 'thedanbrown@gmail.com', 'Thedanbrown' );

describe('Engineer', () => {
    it('creates new Engineer object', () => {
        expect(engineer.name).toContain('');
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toContain('@');
        expect(engineer.github).toContain('');
    });
    it('gets engineers name', () => {
        expect(engineer.getName()).toContain('');
    })
    it('gets engineer ID number', () => {
        expect(engineer.getID()).toEqual(expect.any(Number));
    })
    it('gets engineer email', () => {
        expect(engineer.getEmail()).toContain('@');
    })
    it('gets engineers github username', () => {
        expect(engineer.getGithub()).toContain('');
    })
    it('gets engineer role', () => {
        expect(engineer.getRole()).toContain('Engineer');
    })
});
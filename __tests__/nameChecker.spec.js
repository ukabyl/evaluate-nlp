import { checkForName } from '../src/client/js/nameChecker.js';

test("Picard is a Captain!", () => {
    expect(checkForName('Picard')).toBe('Captain')
});

test("Janeway is a Captain!", () => {
    expect(checkForName('Janeway')).toBe('Captain')
});

test("John is a User!", () => {
    expect(checkForName('John')).toBe('User')
});
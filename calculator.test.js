const { add } = require('./calculator');
/*step 1 empty string*/
describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });
});

/*step 2 a single number*/
test('should return the number for a single number', () => {
    expect(add('1')).toBe(1);
    expect(add('5')).toBe(5);
});

/*step 3 two numbers or multiple numbers */
test('should return the sum of two numbers', () => {
    expect(add('1,5')).toBe(6);
});

test('should return the sum of multiple numbers', () => {
    expect(add('1,2,3')).toBe(6);
});

/*step 4 add function to handle newlines between numbers */
test('should return the sum of numbers separated by newlines', () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('1\n2\n3')).toBe(6);
});




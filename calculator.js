function add(numbers) {
    if (numbers === '') return 0;
    /*return specify a custom delimiter */
    let delimiter = ',';

    if (numbers.startsWith('//')) {
        const delimiterLineEnd = numbers.indexOf('\n');
        delimiter = numbers.slice(2, delimiterLineEnd);
        numbers = numbers.slice(delimiterLineEnd + 1);
    }

    const nums = numbers.split(new RegExp(`[${delimiter}\n]`)).map(num => parseInt(num));
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };


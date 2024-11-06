function add(numbers) {
    if (numbers === '') return 0;
    /*return should the sum of numbers separated by newlines */
    const nums = numbers.split(/,|\n/).map(num => parseInt(num));
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };


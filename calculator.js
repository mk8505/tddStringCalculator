function add(numbers) {
    if (numbers === '') return 0;
    /*return a string of comma-separated numbers, processing that string into an array of integers and retune single array value */
    const nums = numbers.split(',').map(num => parseInt(num));
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };


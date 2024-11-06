function add(numbers) {
    if (numbers === '') return 0;
  
    let delimiter = ',';
    
    if (numbers.startsWith('//')) {
      const delimiterLineEnd = numbers.indexOf('\n');
      delimiter = numbers.slice(2, delimiterLineEnd);
      numbers = numbers.slice(delimiterLineEnd + 1);
    }
  
    const nums = numbers.split(new RegExp(`[${delimiter}\n]`)).map(num => parseInt(num));
  
    const negativeNumbers = nums.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };
  
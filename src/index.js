module.exports = function toReadable (number) {
    const integers = ["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundreds = ["","one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred", "one thousand"];

    if(number === 0) {
        return 'zero'
    }

    const result = []

    const i = number % 10;
    const t = Math.floor(number % 100 / 10)
    const h = Math.floor(number / 100)
    
    if(h > 0) {
        result.push(hundreds[h])
    }

    if (t === 1) {
        result.push(teens[i]);
    } else {
        if (t > 1) {
            result.push(tens[t - 1]);
        }
        if (i > 0) {
            result.push(integers[i]);
        }
    }
    console.log(t);
    return result.join(' ').trim();
}

// problem :1
// integer-to-roman
function intToRoman(num) {
    const values = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];
    
    let result = "";
    
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i].value) {
            result += values[i].symbol;
            num -= values[i].value;
        }
    }
    
    return result;
}




// problem :2
// roman-to-integer
function romanToInt(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];

        if (next && current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}




// problem :3
// valid-parentheses

function isValid(s) {
    const stack = [];
    const bracketMap = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (char in bracketMap) {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

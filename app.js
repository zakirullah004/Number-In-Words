let allNumbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
};

function convertNumbertoWord(num){
    if(allNumbers[num]) return allNumbers[num]

    let word = "";

    if(num >= 100000){
        word += convertNumbertoWord(Math.floor(num/10000)) + " Lack "
        num %= 100000
    }
    if(num >= 1000){
        word += convertNumbertoWord(Math.floor(num/1000)) + " Thousand "
        num %= 1000
    }
    if(num >= 100){
            word += convertNumbertoWord(Math.floor(num / 100)) + " Hundred ";
            num %= 100;
    }

    if(num > 20){
        if(word != "") word += 'and ';

        word += convertNumbertoWord(Math.floor(num / 10)*10);
        num %= 10;

        if(num % 10 > 0){
            word += " " +allNumbers[num%10]
        }

    }else if(num % 100 > 0){
       word += allNumbers[num]
    }


    return word

}
console.log(convertNumbertoWord(190340));
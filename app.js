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

    // out of range 

    if(num > 100000000){
        word = "Out of range"
        num = 0;
    }

    // million 
    if(num >= 1000000){
        word += convertNumbertoWord(Math.floor(num/1000000)) + " Million"
        num %= 1000000;
    }

    //lac
    if(num >= 100000){
        word += convertNumbertoWord(Math.floor(num/100000)) + " Lack "
        num %= 100000
    }

    //thousand
    if(num >= 1000){
        word += convertNumbertoWord(Math.floor(num/1000)) + " thousand "
        num %= 1000
    }

    // hundred
    if(num >= 100){
            word += convertNumbertoWord(Math.floor(num / 100)) + " hundred ";
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
        if(word != "") word += 'and ';
       word += allNumbers[num]
    }


    return word

}


let convertBtn = document.getElementById("convertBtn")
let input = document.querySelector("#input")
let resultText =  document.querySelector("#result")

convertBtn.addEventListener('click',function(e){
    e.preventDefault()

    let toNum = +input.value.trim()

    if(isNaN(toNum) || toNum < 0){
        alert("please write positive number")
    }else{

        let result = convertNumbertoWord(toNum)
        resultText.innerHTML = `${toNum} : ${result}`
        
    }
    input.focus()
    input.value = "";


})
// let result = convertNumbertoWord(120);

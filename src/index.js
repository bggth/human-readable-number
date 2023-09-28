let zero = (number) => {
    let english0 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return english0[number];
}

let ten = (number) => {
    let english10 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    return english10[number];
}

let tens = (number) => {
    let english20 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    return english20[number / 10];
}

let hundred = (number) => {
    let english0 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return english0[number / 100] + ' hundred'
}

let toReadable_ = (number) => {
    let result = ''
    let functions = [zero, tens, hundred];
    let numberString = number.toString();
    let digits = numberString.split('').reverse();
    let prev = -1;
    try {
        for (let i=0; i<digits.length; i++) {
            let current = digits[i]*10**i;
            if (current == 10) {
                result = ten(prev);
            } else {
                result = functions[i](current) + ' ' + result;
                prev = current;    
            }
        }
    }
    catch {
        //console.log('error')
    }
    if (number == 0)
        result = 'zero';
    result = result.trim();
    result = result.replace('  ', ' ')
    //console.log(number, result)
    return result;
}

let test = () => {
    for (let i = 0; i <= 22; i++) {
        console.log('--------');
        toReadable_(i);
    }
}

module.exports = function toReadable (number) {
  return toReadable_(number);
}

test();
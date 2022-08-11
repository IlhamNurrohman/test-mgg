let numbers = [1,2,3,4,5,6,7,8,9];

const total = numbers.reduce((accumulator, currentValue, value) => {
    return accumulator + currentValue - value
}, 0)
console.log(total);
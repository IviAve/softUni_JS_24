 function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);

        if (num % 2 === 0) {
            sum += num;
        }

    }
    console.log(sum);


 }

sumEvenNumbers(['1', '2', '3', '4', '5', '6'])
sumEvenNumbers(['3', '5', '7', '9'])
sumEvenNumbers(['2', '4', '6', '8', '10'])

// Write a program, which receives an array of strings,
// parse them into numbers, and sum only the even numbers.
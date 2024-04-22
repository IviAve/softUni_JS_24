function arrayManipulator(array, commands) {

    for (let arr of commands) {
        let tokens = arr.split(' ');
        let command = tokens.shift();

        if (command === 'add') {

            let idx = Number(tokens.shift());
            let element = Number(tokens.shift());
            array.splice(idx, 0, element);


        } else if (command === 'addMany') {
            let idx = Number(tokens.shift());

            for (let item of tokens) {
                let num = Number(item);

                array.splice(idx, 0, num);
                idx++;
            }
        } else if (command === 'contains') {

            let searchNum = Number(tokens.shift());
            // let idx = array.
            console.log(array.indexOf(searchNum));

        } else if (command === 'remove') {
            let idx = Number(tokens.shift());
            array.splice(idx, 1)

        } else if (command === 'shift') {

            for (const rotatedNum of array) {

                let num = Number(tokens.shift());

                for (let i = 0; i < num; i++) {
                    let shiftedNum = array.shift();
                    array.push(shiftedNum);
                }
            }
        } else if (command === 'sumPairs') {
            let pairedNums = [];
            for (let i = 0; i < array.length; i += 2) {
                if(i + 1 < array.length){
                    pairedNums.push(array[i] + array[i + 1]);

                }else{
                    pairedNums .push(array[i]);
                }
                

            }

            array = pairedNums;

        } else if (command === 'print') {
            console.log(`[ ${array.join(', ')} ]`);
        }

    }

}

// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// )
// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
// )
arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]
    )


// Write a function that receives an array of integers and an array of
// string commands and executes them over the array. The commands are as follows:
// •	add <index> <element> – adds element at the specified index
//  (elements right from this position inclusively are shifted to the right).
// •	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
// •	contains <element> – prints the index of the first occurrence of the specified element (if exists)
// in the array or -1 if the element is not found.
// •	remove <index> – removes the element at the specified index.
// •	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
// o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// •	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// •	print – stop receiving more commands and print the last state of the array in the following format:
//          `[ {element1}, {element2}, …elementN} ]`
//   Note: The elements in the array must be joined by comma and space (, ).

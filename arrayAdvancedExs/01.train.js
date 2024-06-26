function train(array) {

    let train = array.shift().split(' ').map(Number);

    let maxCapacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        if (command[0] === 'Add') {
            let newWagonWithPas = Number(command[1]);

            train.push(newWagonWithPas);

        } else {

            for (let j = 0; j < train.length; j++) {
                let pasingersInWagon = train[j];
                let newPasingers = Number(command[0])


                if ((pasingersInWagon + newPasingers) <= maxCapacity) {
                    train[j] += newPasingers;
                    break;
                }
            }
        }

    }

    console.log(train.join(' '));

}


train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)


// You will be given an array of strings.
// The first element will be a string containing wagons (numbers).
//  Each number inside the string represents the number of passengers that are currently in a wagon.
// The second element in the array will be the max capacity of each wagon (single number).
// The rest of the elements will be commands in the following format:
// •	Add {passengers} – add a wagon to the end with the given number of passengers.
// •	{passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
// At the end, print the final state of the train (all the wagons separated by a space).

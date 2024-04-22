function movingTarget(array) {
    
    let sequence = array.shift().split(' ');

    let command = array.shift();

    while (command !== 'End') {
        
        let [action,index,value] = command.split(' ');

        index = Number(index);
        value = Number(value);


        switch (action) {
            case 'Shoot':
                
            if (index >= 0 && index < sequence.length) {
                sequence[index] -= value;
                if (sequence[index] <= 0) {
                    sequence.splice(index,1);

                }
            }
                break;
                case 'Add':
                
            if (index >= 0 && index < sequence.length) {
                sequence.splice(index,0,value)
            }else{
                console.log('Invalid placement!');
            }
                break;

                case 'Strike':
                
            if (index - value >= 0 && index + value < sequence.length) {
                sequence.splice(index - value,value * 2 + 1)
                
            }else{
                console.log('Strike missed!');
            }
                break;
        
            
        }
        command = array.shift();
    }
    console.log(sequence.join('|'));
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
console.log(`Invalid placement!
    52|100
    `);

movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])

console.log(`Strike missed!
1|2|3|4|5
`);



// You are at the shooting gallery again, and you need a program that helps you keep track of moving targets.
//  On the first line, you will receive a sequence of targets with their integer values, split by a single space. 
//  Then, you will start receiving commands for manipulating the targets until the "End" command. 
//  The commands are the following:
// •	"Shoot {index} {power}"
// o	Shoot the target at the index if it exists by reducing its value by the given power (integer value). 
// o	Remove the target if it is shot. A target is considered shot when its value reaches 0.
// •	"Add {index} {value}"
// o	Insert a target with the received value at the received index if it exists. 
// o	If not, print: "Invalid placement!"
// •	"Strike {index} {radius}"
// o	Remove the target at the given index and the ones before and after it depending on the radius.
// o	If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.
//  Example:  "Strike 2 2"
// 	{radius}	{radius}	{strikeIndex}	{radius}	{radius}		

// •	"End"
// o	Print the sequence with targets in the following format and end the program:
// "{target1}|{target2}…|{targetn}"
// Input / Constraints
// •	On the first line, you will receive the sequence of targets – integer values [1-10000].
// •	On the following lines, until the "End" will be receiving the command described above – strings.
// •	There will never be a case when the "Strike" command would empty the whole sequence.
// Output
// •	Print the appropriate message in case of any command if necessary.
// •	In the end, print the sequence of targets in the format described above.
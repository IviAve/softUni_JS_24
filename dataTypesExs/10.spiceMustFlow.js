function spiceMustFlow (startYield){

    let days = 0;
    let spices = 0;
    let miningConsumes = 26;

    while (startYield >= 100){
        spices += startYield - miningConsumes;
        days++;
        startYield -= 10;
    }
    if(spices >= 26){
spices -= miningConsumes;
    }
    console.log(days);
    console.log(spices);
}

spiceMustFlow(111)
spiceMustFlow(450)

// Spice is Love, Spice is Life. And most importantly, Spice must flow. 
// It must be extracted from the scorching sands of Arrakis, under the constant threat of giant sandworms. 
// To make the work as efficient as possible, the Duke has tasked you with the creation 
//of management software. 
// Write a program that calculates the total amount of spice that can be extracted from a source.
//  The source has a starting yield, which indicates how much spice can be mined on the first day.
//   After it has been mined for a day, the yield drops by 10, meaning on the second 
//day it’ll produce 10 less 
//   spice than on the first, on the third day 10 less than on the second, and so on (see examples). 
//   A source is considered profitable only while its yield is at least 100 – 
//   when less than 100 spices are expected in a day, abandon the source. 
// The mining crew consumes 26 spices every day at the end of their shift 
// and an additional 26 after the mine has been exhausted. Note that the 
// workers cannot consume more spice than there is in storage. 
// When the operation is complete, print on the console on two separate 
// lines how many days the mine has operated and the total amount of spice extracted. 
// Input 
// You will receive a number, representing the starting yield of the source. 
// Output 
// Print on the console on two separate lines how many days the mine has
//  operated and the total amount of spice extracted.
// Constraints 
// •	The starting yield will be a number within range [0…228].

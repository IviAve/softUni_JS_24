function towns(list) {
    
    let townInfo = {};

    list.forEach(info => {
        let [townName,latitude,longitude] = info.split(' | ');
        townInfo.town = townName;
         townInfo.latitude = Number(latitude).toFixed(2);
         townInfo.longitude = Number(longitude).toFixed(2);

      console.log(townInfo);
    });

    // for (let info of list) {
        
    //     let [townName,latitude,longitude] = info.split(' | ');

    //     townInfo.town = townName;
    //     townInfo.latitude = Number(latitude).toFixed(2);
    //     townInfo.longitude = Number(longitude).toFixed(2);

    //     console.log(townInfo);
    // }

   
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
towns(['Plovdiv | 136.45 | 812.575'])


// You’re tasked to create and print objects from a text table. 
// You will receive the input as an array of strings, where each string represents a table row,
//  with values on the row separated by pipes " | " and spaces.
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 
// The latitude and longitude columns will always contain valid numbers. 
// Check the examples to get a better understanding of your task.
// The output should be objects. Latitude and longitude must be parsed 
// to numbers and formatted to the second decimal point!

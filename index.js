import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/
console.log(fifaData[0]["Home Team Name"]);
// /*(b) Away Team name for 2014 world cup final
console.log(fifaData[0]["Away Team Name"]);
// (c) Home Team goals for 2014 world cup final
console.log(fifaData[0]["Home Team Goals"]);
// (d) Away Team goals for 2014 world cup final
console.log(fifaData[0]["Away Team Goals"]);
// (e) Winner of 2014 world cup final 
console.log(fifaData[0]["Win conditions"]);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter((game) => game.Stage ==="Final");
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function 
`getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data,callback) {
    return callback(data).map((game) => game.Year);
   
}
console.log(fifaData, getFinals);

/* Task 5: Implement a higher-order function called `getWinners`, 
that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, callback) {
return callback (data).map((game) =>{
    const winner = game["Win conditions"].match;
    if (game["Home Team Goals"] > game["Away Team Goals"]){
    return game["Home Team Name"];
}
    else (game["Away Team Goals"] > game["Home Team Goals"])
    return game["Away Team Name"];
    return winner;
});


console.log(getWinners(getFinals()));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, getWinners, getYears, getFinals) {
const results = [];
const winner = getWinners(data, getFinals);
const years = getYears(data, getFinals);
for (let i=0; i<getWinners.length; i++){
    result.push('In the ${years[i]}, ${winner[i]} won the world cup!');
}
return results
};

console.log(getWinnersByYear(fifData,getWinners, getYears, getFinals));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter 
`data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
const homeGoals = data.reduce((a, c) => a + c["Home Team Goals"], 0) /data.length;
const awayGoals = data.reduce((a, c) => a + c["Away Team Goals"], 0) /data.length;
return {home, away};


}
}
console.log(getAverageGoals(fifaData));


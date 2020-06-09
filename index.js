import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/
console.log(filterYear2014);
console.log(filterYear2014[0]["Home Team Name"]);
// /*(b) Away Team name for 2014 world cup final
console.log(filterYear2014[0]["Away Team Name"]);
// (c) Home Team goals for 2014 world cup final
console.log(filterYear2014[0]["Home Team Goals"]);
// (d) Away Team goals for 2014 world cup final
console.log(filterYear2014[0]["Away Team Goals"]);
// (e) Winner of 2014 world cup final 
console.log(filterYear2014[0]["Win conditions"]);

const filterYear2014 = fifaData.filter((state) =>
{
    return state.Year ===2014 && state.Stage ==="Final";

})

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
console.log('home');

function getFinals() {
    const finalsData  = fifaData.filter((state) =>
    {
        return state.Stage ==="Final";
    
    });
    return finalsData;
}
console.log(getFinals())

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function 
`getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {

    const years = callbacks.map((state) =>{
        return {Year: stateYear};
    });
return years;
}

console.log(getYears(getFinals()));

/* Task 5: Implement a higher-order function called `getWinners`, 
that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
let winners = cb.map((state) =>{
    if (state["Home Team Goals"] > state["Away Team Goals"]){
    return state["Home Team Name"];
}
    else{
        return state["Away Team Name"]
    }
});
return winners;
}


console.log(getWinners(getFinals()));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(win, year) {
let yearlyResults = win.map(
    (state, index) => 'In ${year[index].Year}, ${state} won the world cup!'
);
return yearlyResults;
};

console.log(getWinnersByYear(getWinners(getFinals()), getYears(getFinals())));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter 
`data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
const homeGoals = data.reduce((total, state) => {
    return (total += state ["Home Team Goals"]);
}, 0);
const awayGoals = data.reduce((total, state) => {
    return (total += state ["Away Team Goals"]);
}, 0);
let goalAverage = (homeGoals + awayGoals) / data.length;
return goalAverage.toFixed(2);

}

console.log(getAverageGoals(fifaData));


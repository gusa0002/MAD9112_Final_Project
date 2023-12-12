
// VERSION 1

function getDaysUntilChristmas() {
    let christmas = 25;
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    console.log(christmas,  currentDay);
    for (let i = currentDay; i < christmas; i++) {
        console.log(christmas - i);
    }
    console.log('This is Christmas!');


}
getDaysUntilChristmas()








const monthsValue = document.getElementsByClassName("selectedmonth");
const daysValue = document.getElementsByClassName("selecteddays");
const yearValue = document.getElementsByClassName("selectedyear");
const btnFindRoom = document.getElementById("btnFindRoom");
const database = firebase.database();


// Gets the Month value
//Useful for changing date of boxes at top.
function getMonthValue(monthsValue) {
    alert(monthsValue.selectedIndex);
    const monthNumber = monthsValue.selectedIndex;
}

function getDayValue(daysValue) {
    alert(daysValue.selectedIndex);
     const dayNumber = daysValue.selectedIndex;
} 

function getYearValue(yearValue) {
    alert(yearValue.selectedIndex);
     const yearNumber = yearValue.selectedIndex;
} 

btnFindRoom.addEventListener('click', e => {
    //Write to database
    database.child("Date").set(monthsValue);
    )};
 

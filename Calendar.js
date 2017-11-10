
var monthsValue = document.getElementsByClassName("selectedmonth");
var daysValue = document.getElementsByClassName("selecteddays");
var yearValue = document.getElementsByClassName("selectedyear");
var btnFindRoom = document.getElementById("btnFindRoom");
var btnAddTime = document.getElementById("btnAddTime");
var cellId;
var monthNumber = 0;
var yearNumber = 0;
var dayNumber = 0;
var user = firebase.auth().currentUser;
var database = firebase.database();
var uid, email;




// Gets the Month value
//Useful for changing date of boxes at top.
function getMonthValue(monthsValue) {
    //alert(monthsValue.selectedIndex);
    monthNumber = monthsValue.selectedIndex;
}
//Gets the desired day value
function getDayValue(daysValue) {
    //alert(daysValue.selectedIndex);
    dayNumber = daysValue.selectedIndex;
} 

//Gets the desired year value
function getYearValue(yearValue) {
    //alert(yearValue.selectedIndex);
     yearNumber = yearValue.selectedIndex;
}

function turnRed(cellId) {
    
    var cell = document.getElementById(cellId);
    var beforeAt = email.substr(0, email.indexOf('@'));
    var timeStamp = Math.floor(Date.now());
    console.log(timeStamp);
     database.ref('Rooms/' + cellId).set({
        UserEmail: beforeAt,
        TimeStamp: timeStamp
    });
    
   
    //var timeStamp = Math.floor(Date.now());
    
    if(cell.className == "t"){
        cell.className = "t2";
    } else if(cell.className == "t2"){
        cell.className = "t";
    }
}

function uploadDate() {
    database.ref('users/' + uid).set({
        theDate: (monthNumber + '/' + dayNumber + '/' + yearNumber) 
    });
}

//Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
        console.log("Logged in");
        uid = firebaseUser.uid;
        email = firebaseUser.email;
        console.log(email);
    }else{
        console.log('Not logged in');
    }
});
 

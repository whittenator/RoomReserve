
var monthsValue = document.getElementsByClassName("selectedmonth");
var daysValue = document.getElementsByClassName("selecteddays");
var yearValue = document.getElementsByClassName("selectedyear");
var btnFindRoom = document.getElementById("btnFindRoom");
var btnAddTime = document.getElementById("btnAddTime");
var cellId, btnId;
var monthNumber = 0;
var yearNumber = 0;
var dayNumber = 0;
var user = firebase.auth().currentUser;
var database = firebase.database();
var uid, email, savedTimeStamp;
var hourInMs = 3600000;
var now = Date.now();
var timeLeft = 0;
var hiddenBtn = "hide";




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


function turnRed(cellId, btnId) {
    
    var cell = document.getElementById(cellId);
    let btn = document.getElementById(btnId);
    btn.className = "hide";
    
    var beforeAt = email.substr(0, email.indexOf('@'));
    cell.className = "t2";
    
    
    
    
     database.ref('Rooms/' + cellId).set({
        UserEmail: beforeAt,
        TimeStamp: firebase.database.ServerValue.TIMESTAMP,
        BtnClassName: hiddenBtn,
        BtnId: btnId
    });
    
  //Delete after timestamp is of a certain time
    var reference = database.ref('Rooms/' + cellId);
    var cutoff = now -1*60*60*1000;
    var old = reference.orderByChild("TimeStamp").endAt(cutoff).limitToLast(1);
    /*var listener = old.on('child_added', function(snapshot) {
        
    });*/
    
   
                          
        
       
    
    
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

window.onload = function(){
   var query = firebase.database().ref("Rooms").orderByKey();
    query.once("value")
      .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var btnId = childSnapshot.child("BtnId").val();
                document.getElementById(btnId).className = "hide";
                console.log(btnId);
                document.getElementById(key).className = "t2";
                console.log(key);
                var childData = childSnapshot.val();
                console.log(childData);
            });
            });
           
    
}
 


const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogOut = document.getElementById("btnLogOut");
var txtEmail = document.getElementById("txtEmail");
var txtPassword = document.getElementById("txtPassword");
var auth = firebase.auth();


btnLogin.addEventListener('click', e => {
    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
    
    
    
    
});

//add signup event
btnSignUp.addEventListener('click', e => {
    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
    
    
});

//Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
        console.log("Logged in");
        window.location = "Calendar.html";
    }else{
        console.log('Not logged in');
        console.log(firebaseUser);
    }
});

btnLogOut.addEventListener('click', e => {
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
        console.log("User Signed Out!");
}).catch(function(error) {
  // An error happened.
        console.log(error);
}); 
    
});
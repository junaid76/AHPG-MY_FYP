
const userneedForm = document.getElementById('need-form');






// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
       console.log('user sign in');
      setupUI(user);
    
  } else {
    console.log('user sign out');
    setupUI();
    
  }
});







// signup



const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    window.location = '/pages/index1.html';

  });
});




// ///////////////////////////////logout/////////////////////////////////////////
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  window.location = '/index.html';
});
// ///////////////////////////////logout/////////////////////////////////////////
// ///////////////////////////////logout/////////////////////////////////////////
const logout1 = document.querySelector('#logout1');
logout1.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  window.location = '/index.html';
});
// ///////////////////////////////logout/////////////////////////////////////////




// login User
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
    window.location = '/pages/index1.html';
  });

});





/* ======================================================================
  Admin Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ 
		username: "junaidmalik7654@gmail.com",
		password: "junaid24852324"
	},
	{
		username: "nomanali7654@gmail.com",
		password: "junaid24852324"
	},
	{
		username: "junaidmalik7654@gmail.com",
		password: "junaid24852324"
	}

]



$( "#adminbtn" ).click(function() {
	var username = document.getElementById('login-admin-email').value
	var password = document.getElementById('login-admin-password').value

	for(var i = 0; i < objPeople.length; i++) {
		
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			
      window.location = '/pages/admin.html';
			return
		}
      // window.location = '/pages/admin.html';
	}
	console.log("incorrect username or password")
 alert("Incorrect Username or Password");

});

var objPeoplep = [
	{ 
		usernamep: "junaidmalik7754@gmail.com",
		passwordp: "junaid24852324"
	},
	{
		usernamep: "nomanali7854@gmail.com",
		passwordp: "junaid24852324"
	}


]

$( "#paramedicbtn" ).click(function() {
	var usernameparamedic = document.getElementById('login-paramedic-email').value
	var passwordparamedic = document.getElementById('login-paramedic-password').value

	for(var i = 0; i < objPeoplep.length; i++) {
		
		if(usernameparamedic == objPeoplep[i].usernamep && passwordparamedic == objPeoplep[i].passwordp) {
			console.log(usernameparamedic + " is logged in!!!")
			
      window.location = '/pages/paramedic.html';
			return
		}
      // window.location = '/pages/admin.html';
	}
	console.log("incorrect username or password")
 alert("Incorrect Username or Password");

});


// function getInfo() {
// 	var username = document.getElementById('username').value
// 	var password = document.getElementById('password').value

// 	for(var i = 0; i < objPeople.length; i++) {
// 		// check is user input matches username and password of a current index of the objPeople array
// 		if(username == objPeople[i].username && password == objPeople[i].password) {
// 			console.log(username + " is logged in!!!")
// 			// stop the function if this is found to be true
// 			return
// 		}
// 	}
// 	console.log("incorrect username or password")
// }
//User Auth




 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBWyLJ7Np6kykNDHddLPk4200K2EXDAD6A",
    authDomain: "notify-1512840467914.firebaseapp.com",
    databaseURL: "https://notify-1512840467914.firebaseio.com",
    projectId: "notify-1512840467914",
    storageBucket: "notify-1512840467914.appspot.com",
    messagingSenderId: "936663775412"
  };
  firebase.initializeApp(config);


  $(document).ready(function(){


    //  reveal login information
      $(".authBar").hover(function() {
        console.log("quit hovering");
        $(".authBar").css("background", "transparent");
        $(".authBar").animate({ top: "0px", right: "0px", width: "300px"}, "slow");
        $(".authBar").empty();
        $('.authBar').html(
          `<input type="email" id="txtEmail"  placeholder="Email">
          <input type="password" id="txtPassword" placeholder="Password"><br>
          <button id="btnLogin" class="btn btn-info">Log in</button>  
          <div id="authBtnLayoutAndMessage">
            <button id="btnSignUp" class="btn btn-warning hide">Sign Up</button>
            <button id="btnLogout" class="btn btn-info hide">Log out</button>
            <div id="authMessage"></div>
          </div>
          </div>`
        )
        $('#btnLogout').css("display", "none");
      },function(){
        console.log("mouseout");
        $(".authBar").animate({ top: "0px", right: "0px", width: "50px" }, "slow");
        $(".authBar").empty();
        $(".authBar").append(
          `<div id="blot">L</div>
          <div id="blot">O</div>
          <div id="blot">G</div>
          <div id="blot">I</div>
          <div id="blot">N</div>
          `);        
      }
    );
    

//login user on click
$("#btnLogin").on('click', e => {
  //get email and password
  const email = $("#txtEmail").val();
  console.log(email + " is logged in");
  const password = $("#txtPassword").val();
  const auth = firebase.auth();

  //sign in
  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch(e => console.log(e.message));

  //clear text boxes
  $("#txtEmail").val("");
  $("#txtPassword").val("");

  
});

//sign up user on click
$("#btnSignUp").on('click', e => {
  //get email and password
  //NEED check for valid email!
  const email = $("#txtEmail").val();
  console.log(email + " just signed up");
  const password = $("#txtPassword").val();
  const auth = firebase.auth();

  //create user
  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise
  	.catch(e => console.log(e.message));

  //clear text boxes
  $("#txtEmail").val("");
  $("#txtPassword").val("");
  
});

//sign out currently authenticated user on click
$("#btnLogout").on('click', e => {
  firebase.auth().signOut();
  console.log("user just signed out");
  //auth message to user
  $("#authMessage").html("See you tomorrow!");
});

  //add realtime event listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
  	if(firebaseUser) {
  		console.log(firebaseUser);
  		$("#btnLogout").removeClass('hide');
  		$("#btnSignUp").addClass('hide');
  		//auth message to user
  		$("#authMessage").html("You're in. Go find a show!");
  	} else {
  		console.log("not logged in");
  		$("#btnLogout").addClass('hide');
  		$("#btnSignUp").removeClass('hide');
  		
  	}
  });

});
  
  
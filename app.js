import "./style.css";
var count = 0;
function btnfn() {
  var loguser = document.getElementById("username").value;
  var logpass = document.getElementById("pass").value;
  for (var i = 0; i < count; i++) {
    if (
      loguser.localeCompare(MainUser[i]) &&
      logpass.localeCompare(MainPass[i])
    ) {
      window.location.assign("hello.html");
      console.log("login");
    } else {
      alert("Username or password Mismatch");
      console.log("login1");
    }
  }
  event.preventDefault();

  /*if (loguser == "a" && logpass == "ab") {
    alert("successful !");
    window.location.assign("hello.html");
  } else {
    alert("Username or password Mismatch");
  }
  event.preventDefault();*/
}

function regRed(event) {
  window.location.assign("Register.html");
  event.preventDefault();
}

var MainUser = [];
var MainPass = [];
var MainEmail = [];

function RegBtn(event) {
  var Regusername = document.getElementById("Rusername").value;
  var Regpassword = document.getElementById("Rpass").value;
  var email = document.getElementById("email").value;

  MainUser[count] = Regusername;
  MainPass[count] = Regpassword;
  MainEmail[count] = email;
  count = count + 1;
  if (Regusername == null || Regpassword == null || email == null) {
    alert("Fill all the fields");
  } else {
    console.log("hello");
    alert("Succesfully Registered!!");
    window.location.replace("index.html");
  }

  event.preventDefault();
}

// import "./Style.css";
// import "./Style1.css";

// import products from "products.json";
var count = 0;
function btnfn(event) {
  event.preventDefault();
  var loguser = document.getElementById("username").value;
  var logpass = document.getElementById("pass").value;
  // for (var i = 0; i < count; i++) {
  //   if (
  //     loguser.localeCompare(MainUser[i]) &&
  //     logpass.localeCompare(MainPass[i])
  //   ) {
  //     window.location.assign("digitalworld.html");
  //     console.log("login");
  //   } else {
  //     alert("Username or password Mismatch");
  //     console.log("login1");
  //   }
  // }
  // event.preventDefault();

  if (loguser === 'a' && logpass === 'ab') {
    alert("successful !");
    window.location.replace("new/index.html");
  } else {
    alert("Username or password Mismatch");
  }
  return false;
}

function regRed() {
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

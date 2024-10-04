// import "./Style.css";
// import "./Style1.css";

// import products from "products.json";
// var count = 0;
function btnfn(event) {
  event.preventDefault();

  var storedName = localStorage.getItem("Rusername");
  var storedPw = localStorage.getItem("Rpass");

  var loguser = document.getElementById("username");
  var logpass = document.getElementById("pass");

  if (loguser.value == storedName && logpass.value === storedPw) {
    alert("successful !");
    window.location.replace("index.html");
  } else {
    alert("Username or password Mismatch");
  }
  return false;
}

function regRed() {
  window.location.assign("Register.html");
  event.preventDefault();
}

// function RegBtn(event) {
//   var Rusername = document.getElementById('Rusername');
//   var Rpass = document.getElementById('Rpass');
//   var email = document.getElementById('email');

//   if (Rusername.value.length == 0 || Rpass.value.length == 0 || email.value.length == 0) {
//     alert("Fill all the fields");
//   } else {
//     localStorage.setItem('Rusername',Rusername.value);
//     localStorage.setItem('Rpass',Rpass.value);
//     sendemail();
//     window.location.replace("login.html");
//   }

//   event.preventDefault();
// }

function sendemail() {
  var Rusername = document.getElementById("Rusername");
  var Rpass = document.getElementById("Rpass");
  var email = document.getElementById("email");

  if (
    Rusername.value.length == 0 ||
    Rpass.value.length == 0 ||
    email.value.length == 0
  ) {
    alert("Fill all the fields");
  } else {
    localStorage.setItem("Rusername", Rusername.value);
    localStorage.setItem("Rpass", Rpass.value);
  }

  var param = {
    User: document.getElementById("Rusername").value,
    Password: document.getElementById("Rpass").value,
    Email: document.getElementById("email").value,
  };
  emailjs
    .send("service_u72riia", "template_7a5t00r", param)
    .then((res) => {
      document.getElementById("Rusername").value = "";
      document.getElementById("Rpass").value = "";
      document.getElementById("email").value = "";
      console.log(res);
      alert("Successfully Regsitered! Check your mail");
      window.location.replace("login.html");
    })
    .catch((err) => console.log(err));
  event.preventDefault();
}

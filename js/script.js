function myIcon() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function validateForm() {
  let x = document.forms["subscribeForm"]["email"].value;
  if (x == "") {
    alert("Please enter your email address");
    return false;
  }
  else{
  alert("Continue to subscribe. Thank you.");
  }
}

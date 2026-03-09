
document.getElementById("login-btn").addEventListener("click", function () {

    // get the username input
    const numberInput = document.getElementById("input-username");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    // get the pin input
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

    // match username and password
    if (contactNumber == "admin" && pin == "admin123") {

        alert("Login Success");
      window.location.href = "home.html";

    } else {

        alert("Login Failed"); 
        return;

    }

});
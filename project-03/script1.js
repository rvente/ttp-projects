// Part 1
function myFunction1() {
    document.getElementById("demo").innerHTML = "I'm right!";
}

function myFunction2() {
    document.getElementById("demo").innerHTML = "No, I'm right!";
}

// Part 2
function hoverCall() {
    alert("I said don't hover over me!");
}

// Part 4
function checkPassword() {
    pswd = document.getElementById("pswd").value;
    if (pswd !== "12345678")
        alert("Incorrect password!");
    else
        document.getElementById("head1").innerHTML = "You're signed in!";

}

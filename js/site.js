//Displays a message to the User
function displayHundo() {
    let startValue = 0;
    let endValue = 100;
    // Get the numbers from the UI
    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;
    // alert the User
    alert("Start Value = " + startValue + " End Value" +
        endValue);

}
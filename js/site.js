//Displays a message to the User
function displayHundo() {

    let startValue = 0;
    let endValue = 100;

    // Get the numbers from the UI
    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;

    // Validate our Numbers
    // convert the numbers into intergers or whole numbers
    //limit the start value and the end value
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //check to see if they are a number (start and end values)

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // both umbers are intergers
        // get the numbers from the start value to the end value
        let numbers = generateNumbers(startValue, endValue);

        // display the numbers on the page
        displayNumbers(numbers)
    } else {
        //one or more are not intergers
    }
}


//Generate numbers from start value to end value
function generateNumbers(startValue, endValue) {

    //loop over the numbers until we hit the end of the value
    let numbers = [];
    for (let index = startValue; index <= endValue; index++) {
        //add each number to the array
        numbers.push(index);
    }
    //return the array of numbers
    return numbers;
}

//Display the numbers to the page
function displayNumbers(numbers) {

    //0 is the first index value
    //99 last index value
    //length = 100
    let startValue = numbers[0];
    let endIndex = numbers.length;

    let ptag = document.getElementById("results");

    for (let index = 0; index < endIndex; index++) {

        //get the actual number
        let number = numbers[index];
        ptag.innerHTML += number + " | ";
    }
}
//get values from the user. We need to get the fizz and the buzz value.
function getValues(){

    //get the user values form the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //We need to validate our input
    //parse into Integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        //we call generateNumbers
        let numbers = generateNumbers(fizzValue,buzzValue);
        //we call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter intergers");
    }

    //we call fizzBuzz

    //call displayData and write the values to the screen

}

function fizzBuzz(fizzValue, buzzValue)
{
    let returnArray =[];

    //loop from 1 to 100

    //we need to check the current in three steps
    //check to see if divisible by Both ( 3 and 5)
    //if so push 'Fizz' into an array and not the number

    //check to see if diviisble by fizz value ( 3)
    //if so push 'Fizz' into an array and not the number

    //check to see if divisible by buzz value (5)
    //if so push 'Buzz' into an array and not the number

    //if none then push the number into the array

    returnArray;
}

function displayData(fbArray){
//loop over the array and create a tablerow for each item.

//add all the rows to the table.
}
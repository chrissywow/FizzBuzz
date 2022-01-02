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
        //call fizzBuzz
        let fbArray = fizzBuzz(fizzValue,buzzValue);
        //we call displayNumbers
        displayData(fbArray);
    } else {
        alert("You must enter intergers");
    }
}

// Do fizz Buzz
function fizzBuzz(fizzValue, buzzValue)
{
    let returnArray =[];
   //loop from 1 to 100
    for (let i = 1; i <=100; i++){
    //check to see if divisible by Both ( 3 and 5)
    //check to see if diviisble by fizz value ( 3)
    //check to see if divisible by buzz value (5)
        if(i % fizzValue == 0 && i% buzzValue == 0){
            returnArray.push('FizzBuzz');
        }else if (i % fizzValue == 0){
            returnArray.push('Fizz');

        }else if (i % buzzValue == 0){
            returnArray.push('Buzz');
        }else{
            returnArray.push(i);
        }
    }
    return returnArray;
}

function displayData(fbArray){
//loop over the array and create a tablerow for each item.


//get table body element from the page
let tableBody = document.getElementById("results");

//get the template row
let templateRow = document.getElementById("fbTemplate");

//clear the table first
tableBody.innerHTML = "";

for (let index = 0; index < fbArray.length; index += 5) {

    let tableRow = document.importNode(templateRow.content, true);
    
    //grab use the to put into array
    let rowCols = tableRow.querySelectorAll("td");
    rowCols[0].textContent = fbArray[index];
    rowCols[1].textContent = fbArray[index+1];
    rowCols[2].textContent = fbArray[index+2];
    rowCols[3].textContent = fbArray[index+3];
    rowCols[4].textContent = fbArray[index+4];

    tableBody.apeendChild(tableRow);

}
        

//add all the rows to the table.
}
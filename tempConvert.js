/* Write a function that converts an inputed Fahrenheit value
into an outputed Celsius value. Assume the input value uses
h1 tags*/

document.querySelector('h1').addEventListener('click', convert)

function convert() {
    // get the integer Fahrenheit value value from html input
    let enteredValue = Number(document.querySelector('input').value)
    // convert value Fahrenheit value to Celsius
    let temp = enteredValue * 1.8 + 32
    // show value to the user 
    document.querySelector('h2').innerText = temp

}
/*


*/
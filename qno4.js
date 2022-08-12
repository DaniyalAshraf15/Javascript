//Return string in alphabetical order
function alphabetical() {
    var string =(String (prompt('Please enter a string')).toLowerCase()); 
    string = string.split("").sort().join("");
    return string; 
}
console.log(alphabetical());
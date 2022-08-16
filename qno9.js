//Javascript function that accepts arguments and returns the type of the arguments passed
//objects function bolean string undefined number
function checkType(type) {
    // if(!isNaN(type)){
    //     return `${type} is a number`;
    // }
     return typeof type;
}

console.log(checkType('s'))
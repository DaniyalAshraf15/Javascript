// function reverse(){
//     var num = prompt('Write any number');
//     console.log(num);
// }
// reverse();
function reverse_a_number()

{
    var num = prompt('Write any number');
	n = String(num);
	return n.split("").reverse().join("");
}

console.log('Reversed Number is' ,(reverse_a_number()));
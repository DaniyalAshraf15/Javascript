function test_prime(n)
{
  debugger

  if (n===1)
  {
    return "Neither prime nor Composite";
  }
  else if(n === 2)
  {
    return 'Prime';
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return 'Not prime';
      }
    }
    return 'Prime';  
  }
}
var num = +prompt('Write a number to check whether a number is prime.');

console.log(test_prime(num));

// function isPrime () {
// var num = prompt('Write a number');
// if(num % 1 === 0 && num % num === 0 &&){
// console.log('Prime')
// }
// else{
//     console.log('not prime');
// }
// }
// isPrime();
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(4));

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
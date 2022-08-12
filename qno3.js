// JavaScript function for creating all combinations of words
//Write a JavaScript function that generates all combinations of a string.
function substrings(str1)
{
var array1 = [];
debugger;
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
    debugger;
   array1[x]=str1.substring(x, y);
   console.log('hey',array1);
    }
    debugger;
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);
console.log(slent,'check1234');
for (var i = 0; i < slent ; i++)
{
    debugger;
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
        console.log(combi,'combi');
    }
    
    console.log(temp,'temp');
}
  console.log(combi.join("\n"));
}


substrings("dog");

function longestString (){
    var str = prompt("Please enter a string");
    str = str.split(" ");
    var longestWord = "";
    for(var i=0; i<str.length; i++){
    if(str[i].length > longestWord.length){
        longestWord = str[i];
    }
    
}
return longestWord;
}
console.log(longestString());

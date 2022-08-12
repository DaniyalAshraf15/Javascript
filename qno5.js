function convertUpper (){
    const mySentence = "my name is daniyal";

    const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()); //using regex
    debugger
    console.log(finalSentence);
}
convertUpper();

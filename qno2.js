//Word is Palindrome or not
function isPalindrome() {
var word= String(prompt('Write a word to check whether it is a palindrome Word or not.'));
if (word.split('').reverse().join('') === word){
    return 'Word is Palindrome';
}
else{
    return 'Word is not Palindrome';
}
}
console.log(isPalindrome());
var arr = [23, 21, 34, 36];
var temp_arr = [...new Set(arr)].slice(0); //clone array
console.log(temp_arr);

var second_largest_value = temp_arr.sort()[temp_arr.length - 2];


console.log('Second largest value',second_largest_value);

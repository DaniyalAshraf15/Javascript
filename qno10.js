function value(){
    var arr = [23, 21, 34, 36,13,16,30,40];
    var temp_arr = [...new Set(arr)].slice(0); //clone array
    
    debugger;
    var second_largest_value = temp_arr.sort()[temp_arr.length - 2];
    var second_smallest_value = temp_arr.sort()[1]
    console.log(arr.sort());
    
    
    console.log('Second largest value',second_largest_value);
    console.log('Second smallest value',second_smallest_value)
    
}
value();

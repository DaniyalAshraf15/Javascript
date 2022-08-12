function func(){
    return new Promise(function(resolve, reject){
        setTimeout( function(){
            console.log('Done');
            const random = Math.random();0
            if(random > 0.5){
                resolve(random);
            }
            else{
                reject(random)
            }
        },2000)
    })
    
}
// func().then( function(data){
//     console.log(data,'resolve')
// }).catch( function(err){
//     console.log(err,'reject')
// })

async function hello(){
    try{
return await func();
    }
    catch(err){
        console.log(err)
    }
};
hello().then(alert);

//Callback function
//Callback function hell

// function func(callback){

//     setTimeout( function(){
//         console.log('Done');
//         callback("stringx");

//     },5000)
// }
// func(function(data){
//     console.log(data)
// });





















// var letters = [];
// var words = 'racecar';
// console.log(words);
// var rwords = '';
// debugger;
// for( var i =0; i < words.lenght; i++){
//     letters.push(words[i]);
// }
// for( var i =0; i < words.lenght; i++){
//    rwords += letters.pop();
// }
// console.log(rwords)
// alert('words');

// var arr= [{"group":"1a","age":22,"name":"John"},null,{"group":"1a","age":17,"name":"Mary"},{"group":"2b","age":18,"name":"Alise"},{"group":"2c","age":19,"name":"Alex"},null,{"group":"2b","age":16,"name":"Mark"}]
// console.log(arr)

// // let filterArray = arr.filter(val=>val?.age >= 18)
// console.log(filterArray);

// function generateOutput(data) {
//   const { group, age, name } = data;
//   let output = questions.map(q=>{
//     let com = comments.filter(c=>q.questionId===c.questionId)
    
//     if(!com) return {...q}
//     com = com.map(c=>{
//         let rep = replies.filter(r=>r.commentId===c.commentId)
//         return {...c,replies:rep}
//     })
//     return {...q,comments:com}
// })

//   return output;
// }

//  function practice(){
//     debugger;
//    var arr2 = arr.filter(function(d){return d.age > 18} );
//    console.log(arr2);
//    alert("chekc")
//  }
//  practice();
//  const arr = [32, 33, 16, 40]; 
//  const result = arr.filter(checkAdult);
 
//  function checkAdult(age) {
//    var arr2= age >= 18;
//    console.log(arr2);
//  }
//  checkAdult();
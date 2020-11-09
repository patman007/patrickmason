const teacher = ['a', 'b', 'c', 'd', 'b', 'd', 'a', 
'c', 'd', 'a', 'b','a', 'b', 'c', 'd', 'b', 'd', 
'a', 'c', 'd', 'a', 'b'];

const student = ['a', 'b', 'c', 'c', 'b', 'd', 'a', 
'c', 'b', 'a', 'b','a', 'b', 'b', 'd', 'c', 'a', 
'd', 'c', 'd', 'a', 'i dont know'];

// ATTEMPT 2 - WITH FOR EACHArray.map() method
function compare(teacher, student) {
    let finalArray = [];

    teacher.forEach((el) => student.forEach((e2) => { 
        if(el === e2) {
        finalArray.push(el)
        }
        else {
            finalArray.push(el)
        }
      }  
  ));  
  return finalArray;
}
compare(console.log(finalArray))

// ATTEMPT 3 - WITH Array.map() method




// // ATTEMPT 3 - WITH FOR .. IN LOOP
// var score = 0;
// for (var i in teacher) {
//     console.log(teacher);
//     if(teacher === student){
//         score += score + 4;        
//     } else if(teacher !== student) {
//         score += score - 1;
//     }
//     console.log(score)
//     return(score)   
// }
// console.log(score)
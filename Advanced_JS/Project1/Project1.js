teacher = ['a', 'b', 'c', 'd', 'b', 'd', 'a', 
'c', 'd', 'a', 'b','a', 'b', 'c', 'd', 'b', 'd', 
'a', 'c', 'd', 'a', 'b'];

student = ['a', 'b', 'c', 'c', 'b', 'd', 'a', 
'c', 'b', 'a', 'b','a', 'b', 'b', 'd', 'c', 'a', 
'd', 'c', 'd', 'd', 'c'];

// const studentSorted = student.slice().sort();
// teacher.length === student.length && teacher.slice().sort().every(function(value, index) {
//     return value === studentSorted[index];
// });

//Answer: false
//The answers array does not have the exact same strings as 
//the teachers array for the answers to questions on the exam


// function compare(a,b) {
//     if (a < b) return 1;
//     if (b > a) return -1;
  
//     return 0;
// }


function compare(a, b) {
    let student_answer = a.student_answer;
    let teacher_answer = b.teacher_answer;
  
    
    let comparison = 0;
    if (student_answer > teacher_answer) {
      comparison = 1;
      
    } else if (student_answer < teacher_answer) {
      comparison = -1;
    }
    return comparison.sort();
  }



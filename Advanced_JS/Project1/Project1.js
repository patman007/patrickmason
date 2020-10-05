const teacher = ['a', 'b', 'c', 'd', 'b', 'd', 'a', 
'c', 'd', 'a', 'b','a', 'b', 'c', 'd', 'b', 'd', 
'a', 'c', 'd', 'a', 'b'];

const student = ['a', 'b', 'c', 'c', 'b', 'd', 'a', 
'c', 'b', 'a', 'b','a', 'b', 'b', 'd', 'c', 'a', 
'd', 'c', 'd', 'a', 'i dont know'];

//ATTEMPT 1
var score = 0;

//loop thru first array
for(let i = 0; i < teacher.length; i++) {    
    if (teacher[i] === student[i]) {
      score = score + 4;
    } else if (student[i] && teacher[i] !== student[i]) {
      score = score - 1;
    };
  };

console.log('The score is ', score);


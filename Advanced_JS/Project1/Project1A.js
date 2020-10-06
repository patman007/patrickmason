const teacher = ['a', 'b', 'c', 'd'];

const student = ['a', 'b', 'c', 'c'];

// ATTEMPT 6 - WITH Array.map() method


// ATTEMPT 7 - WITH FOR .. IN LOOP
var score = 0;
for (var i in teacher) {
    console.log(teacher);
    if(teacher === student){
        score += score + 4;        
    } else if(teacher !== student) {
        score += score - 1;
    }
    console.log(score)
    return(score)   
}
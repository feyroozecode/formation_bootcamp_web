
const name = "Ibrahim Ahmad";
let age = 8;
let poids = 60.5;
var isStudent = true;
const students = ["Ali", "Moussa", "Omar"]

console.log(`Name: ${name}, Age: ${age}, Student: ${isStudent}`);

console.table(students);

function isMajor(age){
    if(age >= 18){
        return true;
    }
    return false;
}

console.log(isMajor(age) ? "Is a major" : "Is not a major");
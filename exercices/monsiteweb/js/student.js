const student = {
    name: 'Ibrahim Ahmad',
    age: 18,
    poids: 60.5,
    subjects: ['Math', 'Science', 'History', "Quraan"]
}

console.log(`Name: ${student.name}, Age: ${student.age}, Poids: ${student.poids}`);
console.table(student.subjects);

for (let i ; i < student.subjects.length; i++) {
    console.log(`Subject ${i + 1}: ${student.subjects[i]}`);
}
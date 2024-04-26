let students = [
    ["male", 24, "Ivan", "Ivanov"],
    ["female", 22, "Maria", "Petrova"],
    ["male", 18, "Georgi", "Georgiev"],
    ["male", 21, "Nikolai", "Nikolov"],
  ];
  let maxAge = students[0][1];
  let oldestStudent = students[0]; 
  for (let i = 1; i < students.length; i++) {
    const studentAge = students[i][1];
    if (studentAge >= maxAge) {
      maxAge = studentAge;
      oldestStudent = students[i];
    }
  }
  console.log(
    `The oldest student is ${oldestStudent[2]} ${oldestStudent[3]}. He is ${maxAge} years old.`
  );
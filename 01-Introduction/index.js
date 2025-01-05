const studentsData = ["jorden", "myth", "michell", "keren", "john"];

const findStudent = (studentsData, studentName) => {
  for (let i = 0; i < studentsData.length; i++) {
    if (studentsData[i] === studentName) {
      return studentsData[i] + i;
    }
  }
};
console.log(findStudent(studentsData, "myth"));

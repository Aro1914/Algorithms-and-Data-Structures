const gradesList = [4, 73, 67, 38, 33];

const gradingStudents = grades => {
    const results = grades.map(grade => {
        if (grade < 38) return grade;
        let result = (5 * (Math.ceil(grade / 5)));
        if ((result - grade) < 3) return result;
        else return grade;
    });
    return results;
};

console.log(gradingStudents(gradesList));

function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.study = function () {
        console.log(`${this.name} is studying.`);
    };
}
Student.prototype.getGrade = function () {
    return `${this.name}'s grade is ${this.grade}.`;
};
const student1 = new Student("Abhi", "A");
const student2 = new Student("Bindhu", "B");
const student3 = new Student("Charu", "C");
student1.study();
student2.study();
student3.study();
console.log(student1.getGrade());
console.log(student2.getGrade());
console.log(student3.getGrade());

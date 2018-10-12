class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
}

let firstStudent = new Student("Colt", "Steele", 12);

console.log(firstStudent.fullName());
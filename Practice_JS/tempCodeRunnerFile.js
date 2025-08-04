function admissionProcess(greet, fees){
    console.log(greet + this.name + fees);
}

const student1 = {name: "Shiva"}
const student2 = {name: "Sagar"}

const studentData1 = admissionProcess.bind(student1,"Hello, ", " Your Fees: 2 Lacs");
const studentData2 = admissionProcess.bind(student2,"Hello, ", " Your Fees: 5 Lacs");

studentData1();
studentData2();
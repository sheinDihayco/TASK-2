import React from "react";
import Student from "./component/Student";
import "./Student.css" 
  
function App() {
  const studentRecords = [
    { name: "Sheinalie Dihayco", department: "BSIT", fGrade: "1.5", status: true },
    { name: "Louie Tahanlangit", department: "BSIT", fGrade: "1.1", status: true },
    { name: "Ashielamae Aguipo", department: "BSIT", fGrade: "1.2", status: true },
    { name: "Alaiza Jean Natad", department: "BSIT", fGrade: "1.5", status: true },
    { name: "Zean Algarme", department: "BSIT", fGrade: "1.5", status: true },
    { name: "Junrih Rizada", department: "BSIT", fGrade: "1.4", status: true },
  ];

  return (
    <div className="App">
      <h1>Student Records</h1>
      <Student studentRecords={studentRecords} />
    </div>
  );
}

export default App;

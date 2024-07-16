import React from "react";
import Student from "./component/Student";
import "./Student.css"

function App() {
  const studentRecords = [
    { name: "Sheinalie Dihayco", department: "Science", fGrade: "90", status: true },
    { name: "Louie Tahanlangit", department: "Commerce", fGrade: "90", status: true },
    { name: "Ashielamae Aguipo", department: "Arts", fGrade: "80", status: true },
    { name: "Alaiza Jean Natad", department: "Science", fGrade: "59", status: false },
    { name: "Zean Algarme", department: "Commerce", fGrade: "85", status: true },
    { name: "Junrih Rizada", department: "Science", fGrade: "99", status: true },
    { name: "Kerwin Tapic", department: "Commerce", fGrade: "96", status: true },
    { name: "Keneth Denampo", department: "Arts", fGrade: "82", status: true },
    { name: "Ritch Birao", department: "Science", fGrade: "80", status: true },
     { name: "Juan Cruz", department: "Arts", fGrade: "40", status: false },
  ];

  return (
    <div className="App">
      <Student studentRecords={studentRecords} />
    </div>
  );
}

export default App;

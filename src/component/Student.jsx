import React from "react";

export default function Student({ studentRecords }) {
  return (
    <div className="App">
      <h1>Student Records</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Names</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {studentRecords.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.status ? student.fGrade : "N/A"}</td>
              <td>{student.status ? "Active" : "Fail"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

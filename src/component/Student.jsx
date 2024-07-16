import React from "react";

export default function Student({ studentRecords }) {
  return (
      <div className="App">
          <div>  
            <ol>
                {studentRecords.map((studRecs) => (
                <li key={studRecs}>
                    {studRecs.name} {studRecs.department} {studRecs.fGrade} {studRecs.status ? "PASSED" : "FAILED"}
                </li>
                ))}
            </ol>
        </div>
    </div>
  );
}

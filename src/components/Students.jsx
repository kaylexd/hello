import React from "react";
import Student from "./Student";

export default function Students() {
  const students = [
    {
      name: "Apple",
      department: "Science",
      finalGrade: "null",
      status: "Fail",
    },
    { name: "Mae", department: "Science", finalGrade: "null", status: "Fail" },
    { name: "Ray", department: "Science", finalGrade: "78", status: "Pass" },
    { name: "Jay", department: "Arts", finalGrade: "77", status: "Pass" },
    { name: "Rin", department: "Arts", finalGrade: "83", status: "Pass" },
    { name: "Ky", department: "Arts", finalGrade: "95", status: "Pass" },
    { name: "Kaye", department: "Commerce", finalGrade: "94", status: "Pass" },
    {
      name: "Orange",
      department: "Commerce",
      finalGrade: "87",
      status: "Pass",
    },
    { name: "Zen", department: "Commerce", finalGrade: "89", status: "Pass" },
    { name: "Ai", department: "Arts", finalGrade: "99", status: "Pass" },
  ];
  return (
    <div>
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>(No.|</th>
            <th>Student Names|</th>
            <th>Department|</th>
            <th>Final Grade|</th>
            <th>Status)</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student
              key={index}
              index={index}
              name={student.name}
              department={student.department}
              finalGrade={student.finalGrade}
              status={student.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

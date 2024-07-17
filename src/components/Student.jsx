import React from "react";

export default function Student({
  index,
  name,
  department,
  finalGrade,
  status,
}) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{department}</td>
      <td>{status === "Pass" ? finalGrade : "-"}</td>
      <td>{status}</td>
    </tr>
  );
}

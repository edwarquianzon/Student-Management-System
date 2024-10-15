import React from "react";
import Table from "./Table";

export const calculateAge = (birthDay) => {
  const today = new Date();
  const birthDate = new Date(birthDay);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const StudentTable = ({ students }) => {
  return (
    <Table.TableContainer>
      <Table.THead>
        <Table.Row>
          <Table.ColumnHeader style={{ padding: "10px 20px" }}>
            Last Name
          </Table.ColumnHeader>
          <Table.ColumnHeader style={{ padding: "10px 20px" }}>
            First Name
          </Table.ColumnHeader>
          <Table.ColumnHeader style={{ padding: "10px 20px" }}>
            Course
          </Table.ColumnHeader>
          <Table.ColumnHeader style={{ padding: "10px 20px" }}>
            Birthdate (YYYY/MM/DD)
          </Table.ColumnHeader>
          <Table.ColumnHeader style={{ padding: "10px 20px" }}>
            Age
          </Table.ColumnHeader>
        </Table.Row>
      </Table.THead>

      <Table.TBody>
        {students.map((student) => (
          <Table.Row key={student.id}>
            <Table.Column>{student.lastName}</Table.Column>
            <Table.Column>{student.firstName}</Table.Column>
            <Table.Column>{student.course}</Table.Column>
            <Table.Column>{student.birthDay}</Table.Column>
            <Table.Column>{calculateAge(student.birthDay)}</Table.Column>
          </Table.Row>
        ))}
      </Table.TBody>
    </Table.TableContainer>
  );
};

export default StudentTable;

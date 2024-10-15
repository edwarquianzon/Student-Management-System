import React from "react";
import Table from "./Table";

const StudentHeader = ({ text }) => {
  return (
    <Table.Row>
      <Table.ColumnHeader
        style={{ color: "red", fontSize: "24px" }}
        colSpan="5"
      >
        {text}
      </Table.ColumnHeader>
    </Table.Row>
  );
};

export default StudentHeader;

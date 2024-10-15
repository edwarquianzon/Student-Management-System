import React, { useState } from "react";
import "./App.css";
import StudentTable, { calculateAge } from "./components/StudentTable";
import SearchBar from "./components/SearchBar";
import StudentHeader from "./components/StudentHeader";
import DateFilter from "./components/DateFilter";

const students = [
  {
    id: 1,
    lastName: "Quianzon",
    firstName: "Edward",
    course: "IT",
    birthDay: "2001/03/05",
  },
  {
    id: 2,
    lastName: "James",
    firstName: "Lebron",
    course: "IS",
    birthDay: "2002/03/05",
  },
  {
    id: 3,
    lastName: "Jordan",
    firstName: "Mike",
    course: "CS",
    birthDay: "2010/03/05",
  },
  {
    id: 4,
    lastName: "King",
    firstName: "John",
    course: "DS",
    birthDay: "2005/03/05",
  },
  {
    id: 5,
    lastName: "Wmby",
    firstName: "Yamma",
    course: "IT",
    birthDay: "2006/03/05",
  },
  {
    id: 6,
    lastName: "Curry",
    firstName: "Step",
    course: "CS",
    birthDay: "1991/03/05",
  },
  {
    id: 7,
    lastName: "King",
    firstName: "Step",
    course: "IS",
    birthDay: "1991/03/05",
  },
  {
    id: 8,
    lastName: "Wmby",
    firstName: "Edward",
    course: "DS",
    birthDay: "1991/03/05",
  },
  {
    id: 9,
    lastName: "Jordan",
    firstName: "Edward",
    course: "IS",
    birthDay: "1991/03/05",
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const filteredStudents = students.filter((student) => {
    const age = calculateAge(student.birthDay).toString();
    const birthDate = new Date(student.birthDay);

    const isWithinDateRange =
      (!minDate || birthDate >= new Date(minDate)) &&
      (!maxDate || birthDate <= new Date(maxDate));

    return (
      isWithinDateRange &&
      (student.firstName.toLowerCase().includes(query.toLowerCase()) ||
        student.lastName.toLowerCase().includes(query.toLowerCase()) ||
        student.course.toLowerCase().includes(query.toLowerCase()) ||
        age.includes(query))
    );
  });

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          textAlign: "center",
          marginLeft: "180px",
        }}
      >
        <StudentHeader text="STUDENT INFORMATION" />
      </div>

      <div style={{ marginBottom: "20px" }}>
        Search:
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      <DateFilter
        minDate={minDate}
        setMinDate={setMinDate}
        maxDate={maxDate}
        setMaxDate={setMaxDate}
      />
      <div>
        <StudentTable students={filteredStudents} />
      </div>
    </div>
  );
}

export default App;

// src/components/SearchResult.js
import React from "react";
import "./SearchResult.css";

const mockResults = [
  {
    id: 1,
    fullName: "Ada Lovelace",
    matricNumber: "CSC001",
    department: "Computer Science",
    level: "400",
    gender: "Female",
  },
  {
    id: 2,
    fullName: "Chike Obi",
    matricNumber: "MTH002",
    department: "Mathematics",
    level: "300",
    gender: "Male",
  },
];

const SearchResult = () => {
  return (
    <div className="search-result-container">
      <h2>Search Results</h2>
      {mockResults.length === 0 ? (
        <p>No student found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Matric Number</th>
              <th>Department</th>
              <th>Level</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {mockResults.map((student) => (
              <tr key={student.id}>
                <td>{student.fullName}</td>
                <td>{student.matricNumber}</td>
                <td>{student.department}</td>
                <td>{student.level}</td>
                <td>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchResult;
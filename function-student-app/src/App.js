import React, { useRef, useState } from "react";

const App = () => {
  const [studentList, setStudentList] = useState([
    { name: "abc", roll: 1, contact: "8327903859", branch: "IT" },
    { name: "efg", roll: 2, contact: "4392847934", branch: "CS" },
    { name: "hij", roll: 3, contact: "7489379878", branch: "EC" },
  ]);

  const [branchList] = useState(["CS", "IT", "CV", "EC", "ME"]);
  const [defaultBranch, setDefaultBranch] = useState("All");

  const rollRef = useRef();
  const nameRef = useRef();
  const contactRef = useRef();
  const branchRef = useRef();

  const handleAddStudent = (e) => {
    e.preventDefault();
    const roll = rollRef.current.value;
    const name = nameRef.current.value;
    const contact = contactRef.current.value;
    const branch = branchRef.current.value;

    if (!roll || !name || !contact || branch === "Select Option") return;

    const newStudent = { roll, name, contact, branch };
    setStudentList([...studentList, newStudent]);

    rollRef.current.value = "";
    nameRef.current.value = "";
    contactRef.current.value = "";
    branchRef.current.value = "Select Option";
  };

  const handleRemove = (roll) => {
    const updatedList = studentList.filter((student) => student.roll !== roll);
    setStudentList(updatedList);
  };

  return (
    <>
      <div className="bg-dark text-white text-center p-3">
        <h3>Student List</h3>
      </div>

      <div className="container mt-4 mb-3">
        <form onSubmit={handleAddStudent}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Roll No:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Roll No"
                ref={rollRef}
              />
            </div>
            <div className="col-md-6">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                ref={nameRef}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label>Contact:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Contact Number"
                ref={contactRef}
              />
            </div>
            <div className="col-md-6">
              <label>Branch:</label>
              <select className="form-control" ref={branchRef}>
                <option>Select Option</option>
                {branchList.map((branch, i) => (
                  <option key={i} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success px-4">
              Add Student
            </button>
          </div>
        </form>
      </div>

      <div className="container mb-3 text-center">
        {branchList.map((branch, i) => (
          <button
            key={i}
            onClick={() => setDefaultBranch(branch)}
            className="btn btn-outline-primary m-1"
          >
            {branch} (
            {studentList.filter((s) => s.branch === branch).length})
          </button>
        ))}
        <button
          onClick={() => setDefaultBranch("All")}
          className="btn btn-outline-danger m-1"
        >
          All ({studentList.length})
        </button>
      </div>

      <div className="container">
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Contact</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {studentList
              .filter(
                (student) =>
                  student.branch === defaultBranch || defaultBranch === "All"
              )
              .map((student, index) => (
                <tr key={index}>
                  <td>{student.roll}</td>
                  <td>{student.name}</td>
                  <td>{student.branch}</td>
                  <td>{student.contact}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleRemove(student.roll)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;

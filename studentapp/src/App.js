import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [
        { name: "abc", roll: 1, contact: 832790385943, branch: "IT" },
        { name: "efg", roll: 2, contact: 4392847934, branch: "CS" },
        { name: "hij", roll: 3, contact: 7489379878, branch: "EC" },
      ],
      branch: ["CS", "IT", "CV", "EC", "ME"],
      defaultBranch: "All",
      count: 1,
      error: {
        roll: "",
        name: "",
        contact: "",
        branch: "",
      },
      success: {
        roll: "",
        name: "",
        contact: "",
        branch: "",
      },
    };
  }

  addStudent = () => {
    let roll = this.rollInput.value.trim();
    let name = this.nameInput.value.trim();
    let contact = this.contactInput.value.trim();
    let branch = this.branchInput.value;

    let error = { roll: "", name: "", contact: "", branch: "" };
    let success = { roll: "", name: "", contact: "", branch: "" };
    let isValid = true;

    if (!roll) {
      error.roll = "Roll No is required";
      isValid = false;
    } else if (isNaN(roll)) {
      error.roll = "Roll No must be a number";
      isValid = false;
    } else if (this.state.studentList.some((s) => s.roll == roll)) {
      error.roll = "Roll No must be unique";
      isValid = false;
    } else {
      success.roll = "Valid Roll Number";
    }

    if (!name) {
      error.name = "Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
      error.name = "Name must contain only letters";
      isValid = false;
    } else {
      success.name = "Valid Name";
    }

    if (!contact) {
      error.contact = "Contact number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(contact)) {
      error.contact = "Contact must be exactly 10 digits";
      isValid = false;
    } else {
      success.contact = "Valid Contact Number";
    }

    if (branch === "Select Option" || !branch) {
      error.branch = "Please select a branch";
      isValid = false;
    } else {
      success.branch = "Branch Selected";
    }

    if (!isValid) {
      this.setState({
        error,
        success: { roll: "", name: "", contact: "", branch: "" },
      });
      return;
    }

    const newStudent = {
      roll,
      name,
      contact,
      branch,
    };

    this.setState((prevState) => ({
      studentList: [...prevState.studentList, newStudent],
      error: { roll: "", name: "", contact: "", branch: "" },
      success: { roll: "", name: "", contact: "", branch: "" },
    }));
  };

  removeStudent = (roll) => {
    let index = this.state.studentList.findIndex((student) => {
      return student.roll === roll;
    });
    this.state.studentList.splice(index, 1);
    this.setState({ studentList: [...this.state.studentList] });
  };
  render() {
    return (
      <>
        <div
          style={{
            height: "80px",
            backgroundColor: "black",

            textAlign: "center",
            width: "100%",
            padding: "20px",
          }}
        >
          <span
            style={{
              margin: "20%",
              fontSize: "25px",
              color: "aliceblue",

              fontWeight: "bolder",
            }}
          >
            Student List
          </span>
        </div>
        <form style={{ marginLeft: "20%" }} className="row g-2  mt-4">
          <div className="col-md-5">
            <label style={{ fontSize: "20px" }} className="form-label">
              Roll No :
            </label>
            <input
              style={{ height: "45px", fontSize: "15px" }}
              placeholder="Enter Roll no."
              type="text"
              className="form-control"
              id="inputEmail4"
              ref={(roll) => (this.rollInput = roll)}
            />
            <small style={{ color: "red" }}>{this.state.error.roll}</small>
            <small style={{ color: "green" }}>{this.state.success.roll}</small>
          </div>
          <div className="col-md-5">
            <label style={{ fontSize: "20px" }} className="form-label">
              Name :
            </label>
            <input
              style={{ height: "45px", fontSize: "15px" }}
              type="text"
              placeholder="Enter Your Name"
              className="form-control"
              ref={(student_name) => (this.nameInput = student_name)}
            />
            <small style={{ color: "red" }}>{this.state.error.roll}</small>
            <small style={{ color: "green" }}>{this.state.success.roll}</small>
          </div>
          <div className="col-md-5">
            <label style={{ fontSize: "20px" }} className="form-label">
              Contact :
            </label>
            <input
              style={{ height: "45px", fontSize: "15px" }}
              type="text"
              placeholder="Enter Contact No."
              className="form-control"
              ref={(contact) => (this.contactInput = contact)}
            />
            <small style={{ color: "red" }}>{this.state.error.contact}</small>
            <small style={{ color: "green" }}>
              {this.state.success.contact}
            </small>
          </div>
          <div className="col-md-5">
            <label style={{ fontSize: "20px" }} className="form-label">
              Branch :
            </label>
            <select
              ref={(branch) => (this.branchInput = branch)}
              style={{ height: "45px", fontSize: "15px" }}
              className="form-select"
              aria-label="Default select example"
            >
              <option defaultValue={""}>Select Option</option>
              {this.state.branch.map((branch, index) => {
                return <option key={index}>{branch}</option>;
              })}
            </select>
            <small style={{ color: "red" }}>{this.state.error.branch}</small>
            <small style={{ color: "green" }}>
              {this.state.success.branch}
            </small>
          </div>
        </form>

        <button
          style={{
            height: "50px",
            width: "200px",
            fontSize: "20px",
            color: "white",
            borderRadius: "20px",
            borderColor: "Black",
            backgroundColor: "green",
            fontWeight: "bolder",
            marginLeft: "45%",
          }}
          className="mt-4 ml-2"
          onClick={this.addStudent}
        >
          Add Student
        </button>

        <hr />
        <div className="d-flex justify-content-center flex-wrap gap-4 ">
          <button
            onClick={() => this.setState({ defaultBranch: "CS" })}
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-primary"
          >
            CS (
            {
              this.state.studentList.filter((student) => {
                return student.branch === "CS";
              }).length
            }
            )
          </button>
          <button
            onClick={() => this.setState({ defaultBranch: "IT" })}
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-secondary"
          >
            IT (
            {
              this.state.studentList.filter((student) => {
                return student.branch === "IT";
              }).length
            }
            )
          </button>
          <button
            onClick={() => this.setState({ defaultBranch: "EC" })}
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-success"
          >
            EC (
            {
              this.state.studentList.filter((student) => {
                return student.branch === "CS";
              }).length
            }
            )
          </button>

          <button
            onClick={() => this.setState({ defaultBranch: "CV" })}
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-info"
          >
            CV (
            {
              this.state.studentList.filter((student) => {
                return student.branch === "CV";
              }).length
            }
            )
          </button>
          <button
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-light"
          >
            EC (
            {
              this.state.studentList.filter((student) => {
                return student.branch === "EC";
              }).length
            }
            )
          </button>
          <button
            onClick={() => this.setState({ defaultBranch: "ME" })}
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-dark"
          >
            ME (
            {
              this.state.studentList.filter((student) => {
                return student.branch === "ME";
              }).length
            }
            )
          </button>
          <button
            onClick={() => this.setState({ defaultBranch: "ALL" })}
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-danger"
          >
            ALL ({this.state.studentList.length})
          </button>
        </div>
        <hr />

        <table className="table">
          <thead style={{ fontSize: "20px" }}>
            <tr>
              <th scope="col">ROLL NO.</th>
              <th scope="col">NAME</th>
              <th scope="col">BRANCH</th>
              <th scope="col">CONTACT</th>
              <th scope="col">REMOVE</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "15px" }}>
            {this.state.studentList
              .filter((student) => {
                return (
                  student.branch === this.state.defaultBranch ||
                  this.state.defaultBranch === "All"
                );
              })
              .map((student, index) => {
                return (
                  <tr key={index}>
                    <td className="col">{student.roll}</td>
                    <td className="col">{student.name}</td>
                    <td className="col">{student.branch}</td>
                    <td className="col">{student.contact}</td>
                    <td className="col">
                      <button
                        onClick={() => {
                          this.removeStudent(student.roll);
                        }}
                        style={{ fontSize: "12px" }}
                        className="btn btn-danger"
                      >
                        REMOVE
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    );
  }
}
export default App;

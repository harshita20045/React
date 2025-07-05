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
    };
  }
  addStudent=()=>{

  }
  render() {
    return (
      <>
        <div
          style={{
            height: "60px",
            backgroundColor: "black",
            paddingTop: "12px",
            paddingLeft: "45%",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: "25px",
              color: "aliceblue",
              fontWeight: "bolder",
            }}
          >
            Student List
          </span>
        </div>
        <form class="row g-2  mt-2">
          <div class="col-md-5">
            <label
              style={{ fontSize: "20px" }}
              for="inputEmail4"
              class="form-label"
            >
              Roll No :
            </label>
            <input
              style={{ height: "45px", fontSize: "15px" }}
              placeholder="Enter Roll no."
              type="text"
              class="form-control"
              id="inputEmail4"
              ref={(roll)=>this.rollInput=roll}
            />
          </div>
          <div class="col-md-5">
            <label
              style={{ fontSize: "20px" }}
              for="inputPassword4"
              class="form-label"
            >
              Name :
            </label>
            <input
              style={{ height: "45px", fontSize: "15px" }}
              type="text"
              placeholder="Enter Your Name"
              class="form-control"
              id="inputPassword4"
            />
          </div>
          <div class="col-md-5">
            <label
              style={{ fontSize: "20px" }}
              for="inputEmail4"
              class="form-label"
            >
              Contact :
            </label>
            <input
              style={{ height: "45px", fontSize: "15px" }}
              type="text"
              placeholder="Enter Contact No."
              class="form-control"
              id="inputEmail4"
            />
          </div>
          <div class="col-md-5">
            <label
              style={{ fontSize: "20px" }}
              for="inputPassword4"
              class="form-label"
            >
              Branch :
            </label>
            <select
              style={{ height: "45px", fontSize: "15px" }}
              class="form-select"
              aria-label="Default select example"
            >
              <option selected>Select Option</option>
              <option value="1">CS</option>
              <option value="2">IT</option>
              <option value="3">EC</option>
              <option value="4">CV</option>
              <option value="5">ME</option>
            </select>
          </div>
        </form>

        <button
          style={{
            height: "40px",
            width: "80px",
            fontSize: "20px",
            color: "white",
            backgroundColor: "green",
            fontWeight: "bolder",
            marginLeft: "2px",
          }}
          className="mt-4 ml-2"
          onClick={this.addStudent}
        >
          ADD +
        </button>

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
            {this.state.studentList.map((student, index) => {
              return (
                <tr>
                  <td class="col">{student.roll}</td>
                  <td class="col">{student.name}</td>
                  <td class="col">{student.branch}</td>
                  <td class="col">{student.contact}</td>
                  <td class="col">
                    <button
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

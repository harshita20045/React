import { useState } from "react";

function App() {
  const [branchList, setBranchList] = useState(["CS", "IT", "EC", "CV", "ME"]);

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
          
            />
          
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
            
            />
         
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
        
            />
           
          </div>
          <div className="col-md-5">
            <label style={{ fontSize: "20px" }} className="form-label">
              Branch :
            </label>
            <select
           
              style={{ height: "45px", fontSize: "15px" }}
              className="form-select"
              aria-label="Default select example"
            >
              <option defaultValue={""}>Select Option</option>
              
            </select>
          
          
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
       
        >
          Add Student
        </button>

        <hr />
        <div className="d-flex justify-content-center flex-wrap gap-4 ">
          <button
          
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-primary"
          >
            CS (
           
            )
          </button>
          <button
    
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-secondary"
          >
            IT (
         
            )
          </button>
          <button
           
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-success"
          >
            EC (
          
            )
          </button>

          <button
           
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-info"
          >
            CV (
           
            )
          </button>
          <button
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-light"
          >
            EC (
           
            )
          </button>
          <button
          
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-dark"
          >
            ME (
        
            )
          </button>
          <button
    
            style={{ height: "40px", width: "100px", fontSize: "15px" }}
            type="button"
            className="btn btn-danger"
          >
            ALL ()
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
           
          </tbody>
        </table>
    </>
  );
}

export default App;

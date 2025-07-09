import { useState } from "react";
import data from "./Data";

function App() {
  const [taskList, setTaskList] = useState(data);
  return (
    <>
      <div className="bg-danger p-3 d-flex justify-content-center">
        <span
          style={{
            color: "antiquewhite",
            fontFamily: "cursive",
            fontSize: "33px",
            fontWeight: "bold",
          }}
        >
          To Do App
        </span>
      </div>

      <div style={{ backgroundColor: "azure" }} className="row p-5">
        <div className="col-md-6">
          <label style={{ fontSize: "20px", fontWeight: "bolder" }}>
            Task Name :{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Task"
          />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: "20px", fontWeight: "bolder" }}>
            Priority :{" "}
          </label>
          <select className="form-control">
            <option value="">High</option>
            <option value="">Normal</option>
            <option value="">Low</option>
          </select>
        </div>

        <button
          type="button"
          style={{ marginLeft: "2px" }}
          className="mt-5 btn btn-danger"
        >
          Add
        </button>
      </div>

      <div style={{ backgroundColor: "azure" }} className="d-flex ml-3 pb-5">
        <button className="ml-3 btn btn-success">Active ()</button>
        <button className="ml-3 btn btn-primary">Deactive ()</button>
      </div>
      <hr />
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>No.</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Deactive</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task,index)=>{
            
            return <tr>
              <td>{1}</td>
              <td>{task.taskName}</td>
              <td>{task.date}</td>
              <td>{task.status}</td>
            </tr>
          })}</tbody>
      </table>
    </>
  );
}

export default App;

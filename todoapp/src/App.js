import { useRef, useState } from "react";
import data from "./Data";

function App() {
  const [taskList, setTaskList] = useState(data);
  const [defaultStatus, setDefaultStatus] = useState("all");
  console.log(taskList);

 let taskName = useRef(null);
let taskPriority = useRef(null);

const add = () => {
  let name = taskName.current.value;
  let priority = parseInt(taskPriority.current.value);
  let status = "active";
  let date = new Date().toISOString().split("T")[0];

  if (!name || !priority) return alert("Please fill both fields!");

  let newTask = { taskName: name, status, priority, date };

  setTaskList([...taskList, newTask]);

};

  const deactive = (index) => {
    const updatedTasks = taskList.map((task, i) =>
      i === index ? { ...task, status: "deactive" } : task
    );
    setTaskList(updatedTasks);
  };
  const active = (index) => {
    const updatedTasks = taskList.map((task, i) =>
      i === index ? { ...task, status: "active" } : task
    );
    setTaskList(updatedTasks);
  };

  const handleDeactive = () => {
    setDefaultStatus("deactive");
  };
  const handleActive = () => {
    setDefaultStatus("active");
  };
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
          ref={taskName}
            type="text"
            className="form-control"
            placeholder="Enter Your Task"
          />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: "20px", fontWeight: "bolder" }}>
            Priority :{" "}
          </label>
          <select ref={taskPriority} className="form-control">
            <option value="1">High</option>
            <option value="2">Normal</option>
            <option value="3">Low</option>
          </select>
        </div>

        <button
          type="button"
          style={{ marginLeft: "2px" }}
          className="mt-5 btn btn-danger"
          onClick={()=>add()}
        >
          Add
        </button>
      </div>

      <div style={{ backgroundColor: "azure" }} className="d-flex ml-3 pb-5">
        <button className="ml-3 btn btn-success" onClick={() => handleActive()}>
          Active ({taskList.filter((task)=>task.status=="active").length})
        </button>
        <button
          className="ml-3 btn btn-primary"
          onClick={() => handleDeactive()}
        >
          Deactive ({taskList.filter((task)=>task.status=="deactive").length})
        </button>
      </div>
      <hr />
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>No.</th>
            <th>Task</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskList
            .filter((task) => {
              return task.status == defaultStatus || defaultStatus == "all";
            })
            .map((task) => {
              const realIndex = taskList.indexOf(task);
            
              return (
                <tr style={{backgroundColor:task.priority==1?"rgb(232, 56, 71)":task.priority==2?"yellow":"green",fontWeight:"600"}} key={realIndex}>
                  <td>{realIndex + 1}</td>
                  <td>{task.taskName}</td>
                  <td>{task.date}</td>
                  <td>
                    {task.priority === 1
                      ? "High"
                      : task.priority === 2
                      ? "Normal"
                      : "Low"}
                  </td>
                  <td>
                    {task.status == "active" ? (
                      <button
                        className="btn btn-dark"
                        onClick={() => deactive(realIndex)}
                      >
                        Deactive{" "}
                      </button>
                    ) : (
                      <button
                        className="btn btn-dark"
                        onClick={() => active(realIndex)}
                      >
                        Active{" "}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default App;

import { useRef, useState } from "react";
import data from "./Data";
import Header from "./components/Header";
import Input from "./components/Input";
import ActiveButton from "./components/ActiveButton";
import PriorityButton from "./components/PriorityButton";
import Table from "./components/Table";

function App() {
  const [taskList, setTaskList] = useState(data);
  const [defaultStatus, setDefaultStatus] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

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
      <Header />
      <Input data={add} name={taskName} priority={taskPriority} />
      <ActiveButton
        handleActive={handleActive}
        taskList={taskList}
        handleDeactive={handleDeactive}
        defaultStatus={defaultStatus}
      
      />
      <PriorityButton
        setPriorityFilter={setPriorityFilter}
        taskList={taskList}
          defaultStatus={defaultStatus}
      />
<Table taskList={taskList} priorityFilter={priorityFilter}  deactive={deactive} active={active} defaultStatus={defaultStatus}/>
      
    </>
  );
}

export default App;

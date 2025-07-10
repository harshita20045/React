function PriorityButton({ setPriorityFilter, taskList,defaultStatus }) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          style={{backgroundColor:"rgb(113, 194, 238)"}}
          className="ml-3 btn"
          disabled={taskList.filter((task) => task.priority === 1).length === 0}
          onClick={() => setPriorityFilter("1")}
        >
          {/* High ({taskList.filter((task) => task.priority === 1).length}) */}
          High(
          {defaultStatus == "all"
            ? taskList.filter((task) => task.priority === 1).length
            : defaultStatus == "active"
            ? taskList
                .filter((task) => task.priority === 1)
                .filter((task) => task.status == "active").length
            : taskList
                .filter((task) => task.priority === 1)
                .filter((task) => task.status == "deactive").length}
          )
        </button>
        <button
          type="button"
          style={{backgroundColor:"rgb(161, 210, 245)"}}
          className="ml-3 btn"
          disabled={taskList.filter((task) => task.priority === 2).length === 0}
          onClick={() => setPriorityFilter("2")}
        >
          Normal ( {defaultStatus == "all"
            ? taskList.filter((task) => task.priority === 2).length
            : defaultStatus == "active"
            ? taskList
                .filter((task) => task.priority === 2)
                .filter((task) => task.status == "active").length
            : taskList
                .filter((task) => task.priority === 2)
                .filter((task) => task.status == "deactive").length})
        </button>
        <button
          type="button"
          style={{backgroundColor:"rgb(201, 229, 248)"}}
          className="ml-3 btn"
          disabled={taskList.filter((task) => task.priority === 3).length === 0}
          onClick={() => setPriorityFilter("3")}
        >
          Low ( {defaultStatus == "all"
            ? taskList.filter((task) => task.priority === 1).length
            : defaultStatus == "active"
            ? taskList
                .filter((task) => task.priority === 3)
                .filter((task) => task.status == "active").length
            : taskList
                .filter((task) => task.priority === 3)
                .filter((task) => task.status == "deactive").length})
        </button>
        <button
          type="button"
          className="ml-3 btn btn-secondary"
          onClick={() => setPriorityFilter("all")}
        >
          Show All
        </button>
      </div>
      <hr />
    </>
  );
}

export default PriorityButton;

function Table({ taskList, priorityFilter, deactive, active, defaultStatus }) {
  return (
    <>
      <table className="table">
        <thead  style={{backgroundColor:"rgb(239, 249, 250)"}}>
          <tr >
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
              const statusMatch =
                defaultStatus === "all" || task.status === defaultStatus;
              const priorityMatch =
                priorityFilter === "all" ||
                task.priority === parseInt(priorityFilter);
              return statusMatch && priorityMatch;
            })

            .sort((a, b) => a.priority - b.priority)
            .map((task) => {
              const realIndex = taskList.indexOf(task);

              return (
                <tr
                  style={{
                    backgroundColor:
                      task.priority == 1
                        ? "rgb(113, 194, 238)"
                        : task.priority == 2
                        ? "rgb(161, 210, 245)"
                        : "rgb(201, 229, 248)",
                    fontWeight: "600",
                  }}
                  key={realIndex}
                >
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

export default Table;

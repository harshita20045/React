function ActiveButton({handleActive,handleDeactive,taskList,defaultStatus}){

  return <>
  
      <div style={{ backgroundColor: "azure" }} className="d-flex ml-3 pb-5">
        <button
          className="ml-3 btn btn-success"
          onClick={() => handleActive()}
          disabled={defaultStatus=="active"}
        >
          Active ({taskList.filter((task) => task.status == "active").length})
        </button>
        <button
          className="ml-3 btn btn-primary"
          onClick={() => handleDeactive()}
          disabled={defaultStatus=="deactive"}
        >
          Deactive (
          {taskList.filter((task) => task.status == "deactive").length} )
        </button>
      </div>
      <hr />
  </>
}
export default ActiveButton;
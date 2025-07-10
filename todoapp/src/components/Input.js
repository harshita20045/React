function Input({data,name,priority}){
  return <>
  <div style={{ backgroundColor: "azure" }} className="row p-5">
        <div className="col-md-6">
          <label style={{ fontSize: "20px", fontWeight: "bolder" }}>
            Task Name :{" "}
          </label>
          <input
            ref={name}
            type="text"
            className="form-control"
            placeholder="Enter Your Task"
          />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: "20px", fontWeight: "bolder" }}>
            Priority :{" "}
          </label>
          <select ref={priority} className="form-control">
            <option value="1">High</option>
            <option value="2">Normal</option>
            <option value="3">Low</option>
          </select>
        </div>

        <button
          type="button"
          style={{ marginLeft: "2px" }}
          className="mt-5 btn btn-danger"
          onClick={() => data()}
        >
          Add
        </button>
      </div>
  </>
}
export default Input;
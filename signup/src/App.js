import { Component } from "react";

import image from "./image.png";

class App extends Component {


  constructor(){

    super();
    this.state ={

      userList :[{name:"",password:"",email:"",contact:""}]
    }
  }

  addUser=()=>{

    window.alert("Do you want ot Sign Up ?");

    let name=this.nameInput.value.trim();
    let password=this.passwordInput.value.trim();
    let email=this.emailInput.value.trim();
    let contact=this.contactInput.value.trim();
console.log(contact)
    let add={name,password,email,contact}

    this.setState({userList:[...this.state.userList,add]})
    }
  render() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <div style={{ height: "100%", width: "50%" }}>
            <img src={image} style={{ height: "100%", width: "100%" }} />
          </div>
          <div
            style={{
              height: "100%",
              width: "50%",
              float: "left",
              padding: "30px",
            }}
          >
            <form>
              <h1 style={{ textAlign: "center" }}>Sign Up</h1>
              <div style={{ width: "100%", margin: "40px", display: "flex" }}>
                <label style={{ fontSize: "23px", fontWeight: "bolder" }}>
                  {" "}
                  Name :
                </label>
                <input  ref={(name)=>{ this.nameInput=name}}
                  style={{
                    marginLeft: "70px",
                    height: "30px",
                    width: "50%",
                    fontSize: "15px",
                  }}
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div style={{ width: "100%", margin: "40px", display: "flex" }}>
                <label style={{ fontSize: "23px", fontWeight: "bolder" }}>
                  Email :
                </label>
                <input  ref={(email)=>{ this.emailInput=email}}
                  style={{
                    marginLeft: "73px",
                    height: "30px",
                    width: "50%",
                    fontSize: "15px",
                  }}
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div style={{ width: "100%", margin: "40px", display: "flex" }}>
                <label style={{ fontSize: "23px", fontWeight: "bolder" }}>
                  Password :
                </label>
                <input ref={(password)=>{ this.passwordInput=password}}
                  style={{
                    marginLeft: "30px",
                    height: "30px",
                    width: "50%",
                    fontSize: "15px",
                  }}
                  type="password"
                  placeholder="Enter your Password"
                />
              </div>
              <div style={{ width: "100%", margin: "40px", display: "flex" }}>
                <label style={{ fontSize: "23px", fontWeight: "bolder" }}>
                  Contact :
                </label>
                <input  ref={(contact)=>{this.contactInput=contact}}
                  style={{
                    marginLeft: "45px",
                    height: "30px",
                    width: "50%",
                    fontSize: "15px",
                  }}
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div style={{ width: "100%", margin: "40px", display: "flex" }}>
                <input type="checkbox" /> I agree to all the information given
                by me is corrct.
              </div>

              <button
              onClick={this.addUser}
              
                style={{
                  marginLeft: "40%",
                  height: "40px",
                  width: "150px",
                  borderRadius: "20px",
                  fontSize: "15px",
                  backgroundColor: "skyblue",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div style={{  border: "2px solid black" }}>
          <h2  style={{textAlign:"center"}}>Entry of the Users :</h2>

          <table>
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>

            <tbody>

              
              {this.state.userList.map((user,index)=>{
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.password}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                </tr>
              })}
            </tbody>
          </table>


        </div>
      </>
    );
  }
}
export default App;

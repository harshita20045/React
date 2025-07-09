import { Component } from "react";

import girl from "./girl.webp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
    };
  }

  checkName = () => {
    let name = this.nameInput.value;
    let nameSms = document.getElementById("nSmall");
    if (name.length === 0) {
  nameSms.innerHTML = "Name is required";
} else if (name.length < 2) {
  nameSms.innerHTML = "Name should contain at least 2 characters";
} else {
  nameSms.innerHTML = "";
}

  };

  checkEmail = () => {
  let email = this.emailInput.value;
  let emailSms = document.getElementById("eSmall");
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.length === 0) {
    emailSms.innerHTML = " ";
  } else if (!pattern.test(email)) {
    emailSms.innerHTML = "Invalid email format";
  } else {
    emailSms.innerHTML = "";
  }
};

checkPassword = () => {
  let password = this.passwordInput.value;
  let passSms = document.getElementById("pSmall");
  if (password.length === 0) {
    passSms.innerHTML = " ";
  } else if (password.length < 6) {
    passSms.innerHTML = "Password should be at least 6 characters";
  } else {
    passSms.innerHTML = "";
  }
};

checkContact = () => {
  let contact = this.contactInput.value;
  let contactSms = document.getElementById("cSmall");
  const pattern = /^[0-9]{10}$/;
  if (contact.length === 0) {
    contactSms.innerHTML = " ";
  } else if (!pattern.test(contact)) {
    contactSms.innerHTML = "Enter a valid 10-digit contact number";
  } else {
    contactSms.innerHTML = "";
  }
};

  addUser = (e) => {
  e.preventDefault();

  const name = this.nameInput.value.trim();
  const email = this.emailInput.value.trim();
  const password = this.passwordInput.value.trim();
  const contact = this.contactInput.value.trim();

  let valid = true;

  if (name.length < 2) {
    document.getElementById("nSmall").innerHTML = "Name should be at least 2 characters";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("eSmall").innerHTML = "Invalid email format";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("pSmall").innerHTML = "Password should be at least 6 characters";
    valid = false;
  }

  const contactPattern = /^[0-9]{10}$/;
  if (!contactPattern.test(contact)) {
    document.getElementById("cSmall").innerHTML = "Enter a valid 10-digit contact number";
    valid = false;
  }

  if (!valid) return;

  const user = { name, email, password, contact };

  this.setState({
    userList: [...this.state.userList, user],
  });

  this.nameInput.value = "";
  this.emailInput.value = "";
  this.passwordInput.value = "";
  this.contactInput.value = "";

  document.getElementById("nSmall").innerHTML = "";
  document.getElementById("eSmall").innerHTML = "";
  document.getElementById("pSmall").innerHTML = "";
  document.getElementById("cSmall").innerHTML = "";
};

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            height: "100vh",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              backgroundColor: "magenta",
              width: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={girl}
              style={{
                height: "100%",
                opacity: 0.5,
                width: "100%",
                objectFit: "cover",
              }}
              alt="signup"
            />
          </div>
          <div
            style={{
              width: "50%",
              padding: "40px",
              backgroundColor: "#f2f9ff",
            }}
          >
            <form onSubmit={this.addUser}>
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                  color: "#333",
                }}
              >
                Sign Up
              </h1>
              {/* NAME FIELD */}
<div
  style={{
    marginBottom: "25px",
    display: "flex",
    alignItems: "flex-start",
  }}
>
  <label
    style={{
      fontSize: "18px",
      fontWeight: "600",
      width: "30%",
      marginTop: "8px",
    }}
  >
    Name :
  </label>
  <div style={{ width: "65%", display: "flex", flexDirection: "column" }}>
    <input
      onKeyUp={this.checkName}
      ref={(name) => {
        this.nameInput = name;
      }}
      style={{
        height: "35px",
        padding: "5px 10px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
      type="text"
      placeholder="Enter your name"
    />
    <small id="nSmall" style={{ color: "red", fontSize: "13px" }}></small>
  </div>
</div>

{/* EMAIL FIELD */}
<div
  style={{
    marginBottom: "25px",
    display: "flex",
    alignItems: "flex-start",
  }}
>
  <label
    style={{
      fontSize: "18px",
      fontWeight: "600",
      width: "30%",
      marginTop: "8px",
    }}
  >
    Email :
  </label>
  <div style={{ width: "65%", display: "flex", flexDirection: "column" }}>
    <input
      onKeyUp={this.checkEmail}
      ref={(email) => {
        this.emailInput = email;
      }}
      style={{
        height: "35px",
        padding: "5px 10px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
      type="email"
      placeholder="Enter your email"
    />
    <small id="eSmall" style={{ color: "red", fontSize: "13px" }}></small>
  </div>
</div>

{/* PASSWORD FIELD */}
<div
  style={{
    marginBottom: "25px",
    display: "flex",
    alignItems: "flex-start",
  }}
>
  <label
    style={{
      fontSize: "18px",
      fontWeight: "600",
      width: "30%",
      marginTop: "8px",
    }}
  >
    Password :
  </label>
  <div style={{ width: "65%", display: "flex", flexDirection: "column" }}>
    <input
      onKeyUp={this.checkPassword}
      ref={(password) => {
        this.passwordInput = password;
      }}
      style={{
        height: "35px",
        padding: "5px 10px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
      type="password"
      placeholder="Enter your password"
    />
    <small id="pSmall" style={{ color: "red", fontSize: "13px" }}></small>
  </div>
</div>

{/* CONTACT FIELD */}
<div
  style={{
    marginBottom: "25px",
    display: "flex",
    alignItems: "flex-start",
  }}
>
  <label
    style={{
      fontSize: "18px",
      fontWeight: "600",
      width: "30%",
      marginTop: "8px",
    }}
  >
    Contact :
  </label>
  <div style={{ width: "65%", display: "flex", flexDirection: "column" }}>
    <input
      onKeyUp={this.checkContact}
      ref={(contact) => {
        this.contactInput = contact;
      }}
      style={{
        height: "35px",
        padding: "5px 10px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
      type="text"
      placeholder="Enter your contact"
    />
    <small id="cSmall" style={{ color: "red", fontSize: "13px" }}></small>
  </div>
</div>


              <div
                style={{
                  marginBottom: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  required
                  style={{ marginRight: "10px" }}
                />
                <span>
                  I agree to all the information given by me is correct.
                </span>
              </div>

              <button
                type="submit"
                style={{
                  display: "block",
                  margin: "0 auto",
                  height: "45px",
                  width: "160px",
                  borderRadius: "25px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  backgroundColor: "#00aaff",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div
          style={{
            border: "2px solid black",
            margin: "40px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2
            style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}
          >
            Entry of the Users :
          </h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#00aaff", color: "white" }}>
                <th style={{ padding: "12px", border: "1px solid #ccc" }}>
                  Name
                </th>
                <th style={{ padding: "12px", border: "1px solid #ccc" }}>
                  Password
                </th>
                <th style={{ padding: "12px", border: "1px solid #ccc" }}>
                  Email
                </th>
                <th style={{ padding: "12px", border: "1px solid #ccc" }}>
                  Contact
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user, index) => (
                <tr
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                  }}
                  key={index}
                >
                  <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                    {user.name}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                    {user.password}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                    {user.email}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                    {user.contact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default App;

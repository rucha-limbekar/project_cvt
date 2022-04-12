import React from 'react';
import axios from 'axios';
import "./mainmenu.css"

const initialState={
  hname: "",
    email: "",
    contactNo: "",
    regNo: "",
    address: "",
    username: "",
    password: "",
    pincode:"",
    hospital:{},

    hnameErr: "",
    emailErr: "",
    contactNoErr: "",
    regNoErr:"",
    addressErr:"",
    usernameErr:"",
    passwordErr:"",
    pincodeErr:""
}

class HospitalRegisterForm extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = initialState;
      }

      handleChange = (e) =>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({[nm]:val});

      }
      validate = () => {
        let hnameErr = "";
        let emailErr= "";
        let contactNoErr= "";
        let regNoErr= "";
        let addressErr="";
        let usernameErr="";
        let passwordErr="";
        let pincodeErr="";
        if (this.state.hname.trim() == 0 || this.state.hname.length < 2) {
          hnameErr = "Hospital Name cannot be empty and should contain at least 2 characters";
        }
        if (!this.state.email.includes("@")) {
          emailErr = "Invalid Email";
        }
      
        if (!(this.state.contactNo.length === 10)) {
          contactNoErr = "Invalid contact number";
        }
        if (!(this.state.adharNo.length === 12)) {
          adharNoErr = "Invalid Aadhar Number ";
        }
        if (!(this.state.address.length === 16)) {
          addressErr = "Address Length Should be upto 12 ";
        }
        if (!(this.state.username.length === 8)) {
          usernameErr = "Username should contain 8 characters ";
        }
        if (!(this.state.password.length === 8)) {
          passwordErr = "Password should contain 8 characters ";
        }
        
        if (fnameErr || lnameErr || emailErr ||contactnoErr || adharNoErr ||addressErr || passwordErr || usernameErr) {
          this.setState({ fnameErr ,lnameErr,emailErr,contactnoErr,adharNoErr,addressErr,passwordErr,usernameErr});
          return false;
        }
        return true;
      }

      submitData = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios
          .post('http://localhost:9090/hospital/hospitalregister', this.state)
          .then(response => {
            alert("Registration Successful!")
            this.props.history.push("/login");
          })
          .catch(error => {
            alert("Duplicate Username/Password")
            this.props.history.push("/hospitalregister");
          })
      }

      render(){
        return(
          <div>
            <div className="container"><br/>
              <h1 className="header2">Hospital Registration</h1>
              
              
              <form className="hospital">
                <div className="form-group">
                <label className="lb" for="hname">Enter Hospital Name :</label>
                <input type="text" id="hname" className="form-control" name="hname"onChange={this.handleChange} />
                </div>
                
                <div className="form-group" >
                    <label className="lb" for="email">Enter EmailID :</label>
                    <input type="text" id="email" className="form-control" name="email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group" >
                    <label className="lb" for="contactNo">Enter Contact No. :</label>
                    <input type="number" id="contactNo" className="form-control" name="contactNo" onChange={this.handleChange} />
                    </div>

                    <div className="form-group"  >
                    <label className="lb" for="regNo">Enter Register No. :</label>
                    <input type="text" id="regNo" className="form-control" name="regNo" onChange={this.handleChange} />
                    </div>

                    <div className="form-group" >
                    <label className="lb"  for="address">Enter Address :</label>
                    <input type="text"  id="address" className="form-control" name="address" onChange={this.handleChange} />
                    </div>

                    <div className="form-group" >
                    <label className="lb" for="pincode">Enter Pincode:</label>
                    <input type="number" id="pincode" className="form-control" name="pincode" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group" >
                    <label className="lb" for="username">Enter Username  :</label>
                    <input type="text" id="username" className="form-control" name="username" onChange={this.handleChange}/>
                    </div>

                <div className="form-group">
                <label className="lb" for="password"> Enter Password :</label>
                <input type="password" id="password" className="form-control" name="password"onChange={this.handleChange} /><br/>
                </div>
                <div className="form-group"class="rows">
                <button type="button"onClick={this.submitData}  class="btn btn-primary col-md-5" style={{marginLeft:"25px"}}>SUBMIT</button>  
                <button  class="btn btn-primary col-md-5" style={{marginLeft:"20px"}}>RESET</button> 
               
                </div>
            </form>
            </div>
        
        </div>
        )
    }

}

export default HospitalRegisterForm;
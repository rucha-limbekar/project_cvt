import React from 'react';
import axios from 'axios';

class Loginpage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username:"",
            newPassword:"",
            cnfPassword:"",        
            loginerror:""
        }
    }

    handleChange=(e)=>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({[nm]:val});
    }


    forgotpassword = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios
            .patch("http://localhost:9090/admin/changepassword", this.state)
            .then(response => {
                alert("Updated  Successful!")
                this.props.history.push("/login");
            })
            .catch(error => {
                //alert("Duplicate Username/Password")
                this.setState({loginerror:"Password should be same"});
            })
    }

    render(){
        return(
            <div className="container">
           <h1 className="header">Forgot password</h1>
           <form className="loginstyle">
            <div>
                
                <label className="lb"  for="username">Username</label>
                <input type="username" class="form-control rounded-pill" id="username"name="username"onChange={this.handleChange}required/>
        
            </div>
            <div>
                <label className="lb"  for="newPassword">Enter new Password</label>
                <input type="password" class="form-control rounded-pill" name="newPassword" id="newPassword" onChange={this.handleChange}required/>
            </div>

            <div>
                <label className="lb"  for="cnfPassword">Confirm Password</label>
                <input type="password" class="form-control rounded-pill" name="cnfPassword" id="cnfPassword" onChange={this.handleChange}required/>
            </div>

            <br/>
            <button type="submit" className="btn btn-primary  col-md-6 rounded-pill"style={{marginLeft:"26%"}}  onClick={this.forgotpassword}>Forgot</button><br></br>
            <span style={{color:"Red",fontSize:"20px"}}> {this.state.loginerror} </span>
            
            </form>
            
            
            </div>
        )
    }

}
export default Loginpage;
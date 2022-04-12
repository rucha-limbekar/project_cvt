import React from 'react';
import mystore from './store';

class Loginpage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:"",
            parent:{},
            hospital:{},
            admin:{},
            loginerror:""
        }
    }

    handleChange=(e)=>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({[nm]:val});
    }

    submitData=(e)=>{

        e.preventDefault();     //to avoid page refresh
        const reqoptions = {      
        method: 'POST',    
        headers: {
            'Content-Type': 'application/json'
               },
        body: JSON.stringify({       
        username: this.state.username,        
        password: this.state.password,
        })
        }

        fetch("http://localhost:9090/login",reqoptions)
        .then(resp => resp.text())
        .then(data => {if(data.length!==0)
            {
                const json = JSON.parse(data);
                console.log("in login page object :"+json);
               
               if(json.pid)
                {
                    this.setState({parent:json});
                    localStorage.setItem("loggedinuser",JSON.stringify(this.state.parent));
                    mystore.dispatch({type:'LOGGEDIN'});
                    this.setState({loginerror:"You Have Successfully Logged In as parent"});
                                    
                   this.props.history.push("/parenthome");
                }
                else if(json.hid)
                {
                    this.setState({hospital:json});
                    localStorage.setItem("loggedinhosp",JSON.stringify(this.state.hospital));
                    mystore.dispatch({type:'LOGGEDIN'});
                    this.setState({loginerror:"You Have Successfully Logged as hospital"});
                    this.props.history.push("/hospitalhome");
                }
                else 
                {
                    this.setState({admin:json});
                    localStorage.setItem("loggedinadmin",JSON.stringify(this.state.admin));
                    mystore.dispatch({type:'LOGGEDIN'});
                    this.setState({loginerror:"You Have Successfully Logged as admin"});
                    this.props.history.push("/adminhome");
                   
                }
               
            }
            else
            {
                this.setState({loginerror:"Wrong_id/password"});
            }
        
        })
    }

    render(){
        return(
            <div className="container">
           <h1 className="header">Sign In</h1>
           <form className="loginstyle">
            <div>
                
                <label className="lb"  for="username">Username</label>
                <input type="username" class="form-control rounded-pill" id="username"name="username"onChange={this.handleChange}required/>
        
            </div>
            <div>
                <label className="lb"  for="password">Password</label>
                <input type="password" class="form-control rounded-pill" name="password" id="password"onChange={this.handleChange}required/>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary  col-md-6 rounded-pill"style={{marginLeft:"26%"}}  onClick={this.submitData}>Sign In</button><br></br>
            <a href='/forgotpassword'>Forgot password</a>
            </form>
            {this.state.loginerror}
            </div>
        )
    }

}
export default Loginpage;
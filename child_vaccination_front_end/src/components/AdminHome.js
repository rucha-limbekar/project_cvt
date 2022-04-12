import React from 'react';
import axios from 'axios';
import { BrowserRouter, Link } from 'react-router-dom';

class AdminHome extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleChange=(e)=>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({[nm]:val});
    }

    logout = (e) => {
        e.preventDefault();
        //mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinadmin");
        this.props.history.push("/");
    }



    render(){
        return(
            <div>
                <BrowserRouter>
                    <ul className="nav" style={{ marginLeft: "20%" }}>
                        <li className="nav-items"><Link className="nav-link" to="/getallparent"><b className="b">Get All Parent</b> </Link> </li>
                        <li className="nav-items"><a className="nav-link" href="/getallhospital"><b className="b">Get All Hospital</b></a></li>
                        <li className="nav-items"> <Link className="nav-link" to="/getparenthistory"><b className="b">Parent History</b></Link></li>
                        <li className="nav-items"> <Link className="nav-link" to="/gethospitalhistory"><b className="b">Hospital History</b></Link></li>
                        
                    </ul>
                </BrowserRouter>
                <h2 style={{ color: 'gold' }}>Welcome Admin</h2>

                <button type="submit" class="btn btn-info col-md-2 rounded-pill" onClick={this.logout}>Sign Out</button><br />
            </div>
        )
    }

}
export default AdminHome;
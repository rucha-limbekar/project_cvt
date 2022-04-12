import React from "react";
import axios from "axios";
import { BrowserRouter, Link } from 'react-router-dom';

class HospitalHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aadharno: "",
            childs: [],
            hospital: JSON.parse(localStorage.getItem("loggedinhosp")),
        }
    }

    componentDidMount = () => {
        axios
            .get(`http://localhost:9090/hospital/getallchilds/${this.state.hospital.hid}`)
            .then(res => {
                //alert(res);
                this.setState({ childs: res.data });
            });
    }

    logout = () => {
        //mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinhosp");
        this.props.history.push("/");
    }

    updateStatus = (cid) => {

        axios.patch(`http://localhost:9090/hospital/changeStatus/${cid}`)
            .then(res => {

                this.props.history.push("/hospitalhome");
            });
    }

    render() {

        return (
            <div>
                <div>
                    <BrowserRouter>
                        <ul className="nav" style={{ marginLeft: "20%" }}>
                            <li className="nav-items"> <Link className="nav-link" to="/edithospital"><b className="b">Edit profile</b></Link></li>                         
                            <li className="nav-items"> <a className="nav-link" href="/addvaccine"><b className="b">Add vaccine</b></a></li>
                            <li className="nav-items"> <a className="nav-link" href="/getallhospitalvaccine"><b className="b">Get all vaccine</b></a></li>
                            <li className="nav-items"> <Link className="nav-link" to="/logout"><b className="b">Logout</b></Link></li>
                        </ul>
                    </BrowserRouter>
                </div>

                <div><br /><br />
                    <h3 style={{ color: 'wheat' }}>Child List</h3>


                    <table cellSpacing={15} className="table table-bordered table-striped table-dark" style={{ width: "70%" }}>


                        <thead>
                            <th>Child ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>DOB</th>
                            <th>STATUS</th>
                            <th>Action</th>

                        </thead>
                        {this.state.childs.map(child =>

                            <tbody>
                                <td>{child.cid}</td>
                                <td>{child.cname}</td>
                                <td>{child.clname}</td>
                                <td>{child.dob}</td>
                                <td>{child.status}</td>
                                <td><button type="button" className="btn  btn-info  rounded-pill" onClick={() => this.updateStatus(child.cid)}>Update</button></td>


                            </tbody>)
                        }
                    </table>
                </div>
                <button type="submit" className="btn btn-info col-md-2 rounded-pill" onClick={this.logout}>Sign Out</button><br />

            </div>
        )
    }

}

export default HospitalHome;

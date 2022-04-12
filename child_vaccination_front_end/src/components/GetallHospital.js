import React from 'react';
import axios from 'axios';
import './mainmenu.css';

class GetallHospital extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hospitalData :[]
        }
    }
    componentDidMount = () => {
        axios
            .get(`http://localhost:9090/admin/getallhospital`)
            .then(res => {
                //alert(res);
                this.setState({ hospitalData: res.data });
            });
    }
    backtoHome  = (e) => {
        this.props.history.push("/adminhome");
    }

    delete = (hid) => {

        axios.delete(`http://localhost:9090/admin/deleteHospital/${hid}`)
            .then(res => {

                this.props.history.push("/getallhospital");
            });
    }

    render(){
        return(
            <div>
             <button class="btn btn-primary col-md-1" type="button" onClick={this.backtoHome} style={{ float: "right" }} >Back</button><br/>
                <div><br /><br />
                    <h3 style={{ color: 'wheat' }}>All Hospitals</h3>

                     <table className="table table-bordered table-striped table-dark" style={{ width: "70%" }} responsive="xl">

                        <thead>
                            <th>Name</th>                           
                            <th>Email</th>
                            <th>Contact No</th>
                            <th>Address</th>
                            <th>Pincode</th>
                            <th>Reg No</th>
                            <th>Creation Date</th>    
                            <th>Action</th>                        
                        </thead>                       
                        {this.state.hospitalData.map(h =>

                            <tbody>
                                <td>{h.hname}</td>
                                <td>{h.email}</td>
                                <td>{h.contactNo}</td>
                                <td>{h.address}</td>
                                <td>{h.pincode}</td>
                                <td>{h.regNo}</td>
                                <td>{h.creationDate}</td>
                                <td><button type="button" className="btn  btn-info  rounded-pill" style={{color :"white"}} onClick={() => this.delete(h.hid)}>Delete</button></td>
                                                            
                            </tbody>)
                        }
                       
                    </table>
                </div>
            </div>
        )
    }


}
export default GetallHospital;
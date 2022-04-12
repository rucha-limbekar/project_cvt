
import React from 'react';
import axios from 'axios';
import './mainmenu.css';

class GethospitalHistory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hospitalData :[]
        }
    }
    componentDidMount = () => {
        axios
            .get(`http://localhost:9090/admin/gethospitalhistory`)
            .then(res => {
                //alert(res);
                this.setState({ hospitalData: res.data });
            });
    }
    backtoHome  = (e) => {
        this.props.history.push("/adminhome");
    }

    render(){
        return(
            <div>
             <button class="btn btn-primary col-md-1" type="button" onClick={this.backtoHome} style={{ float: "right" }} >Back</button><br/>
                <div><br /><br />
                    <h3 style={{ color: 'wheat' }}>Hospital History</h3>


                    <table className="table table-bordered table-striped table-dark" style={{ width: "70%" }} responsive="xl">
        

                        <thead>
                            <th>Hospital ID</th>
                            <th>Name</th>
                            <th>Reg No</th>
                            <th>New Address</th>
                            <th>Old Address</th>
                            <th>New Pincode</th>
                            <th>New Contactno</th>
                            <th>Old Contactno</th>
                            <th>Creation Date</th>
                            <th>New Email</th>
                            <th>Old Email</th>
                            <th>Action</th>

                        </thead>
                        
                        {this.state.hospitalData.map(h =>

                            <tbody>
                                <td>{h.newhid}</td>
                                <td>{h.newhname}</td>
                                <td>{h.newreg_no}</td>
                                <td>{h.newaddress}</td>
                                <td>{h.oldaddress}</td>
                                <td>{h.newpincode}</td>
                                <td>{h.newcontactno}</td>
                                <td>{h.oldcontactno}</td>
                                <td>{h.creation_date}</td>
                                <td>{h.newemail}</td>
                                <td>{h.oldemail}</td>
                                <td>{h.action}</td>
                                
                            </tbody>)
                        }
                       
                    </table>
                </div>
            </div>
        )
    }


}
export default GethospitalHistory;
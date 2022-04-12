
import React from 'react';
import axios from 'axios';
import './mainmenu.css';

class GetparentHistory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            parentData :[]
        }
    }
    componentDidMount = () => {
        axios
            .get(`http://localhost:9090/admin/getparenthistory`)
            .then(res => {
                //alert(res);
                this.setState({ parentData: res.data });
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
                    <h3 style={{ color: 'wheat' }}>Parent History</h3>


                    <table className="table table-bordered table-striped table-dark" style={{ width: "70%" }} responsive="xl">
                        <thead>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Aadhar No</th>
                            <th>New Email</th>
                            <th>Old Email</th>
                            <th>New Address</th>
                            <th>Old Address</th>
                            <th>New Contactno</th>
                            <th>Old Contactno</th>
                            
                            <th>Action</th>

                        </thead>
                        
                        {this.state.parentData.map(p =>

                            <tbody>
                                <td>{p.newfname}</td>
                                <td>{p.newlname}</td>
                                <td>{p.newadhar_no}</td>
                                <td>{p.newemail}</td>
                                <td>{p.oldemail}</td>
                                <td>{p.newaddress}</td>
                                <td>{p.oldaddress}</td>
                                <td>{p.newcontactno}</td>
                                <td>{p.oldcontactno}</td>                              
                                <td>{p.action}</td>                               
                            </tbody>)
                        }
                       
                    </table>
                </div>
            </div>
        )
    }


}
export default GetparentHistory;
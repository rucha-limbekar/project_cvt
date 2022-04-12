import axios from 'axios';
import React from 'react';


class GetAllVaccines extends React.Component {

    constructor(props) {
        super(props)
        this.state = {   
            vaccines:[],
            hospital: JSON.parse(localStorage.getItem("loggedinhosp"))

        }
    }


    componentDidMount = () => {
        axios
            .get(`http://localhost:9090/hospital/getallvaccines/${this.state.hospital.hid}`)
            .then(res => {
               // alert(res);
                this.setState({ vaccines: res.data });
            });
    }

    updateData = (vid) => {
       
            this.props.history.push(`/updatevaccines/${vid}`);
    }
    backtoHome  = (e) => {
        e.preventDefault();
        this.props.history.push("/hospitalhome");
    }


    render() {

        return (
            <div><br /><br />
            <button class="btn btn-primary col-md-1" type="button" onClick={this.backtoHome} style={{ float: "right" }} >Back</button><br/>

                   <h3 style={{ color: 'wheat' }}>Vaccines List</h3>
                   <table className="table table-bordered table-striped table-dark" style={{ width: "70%" }}>

                       <thead>
                           <th>Vaccine ID</th>
                           <th>Vaccine Name</th>
                           <th>Description</th>
                           <th>Brand</th>
                           <th>Type</th>
                           <th>Price</th>

                       </thead>
                       {this.state.vaccines.map(vaccine =>

                           <tbody>
                               <td>{vaccine.vid}</td>
                               <td>{vaccine.vname}</td>
                               <td>{vaccine.description}</td>
                               <td>{vaccine.brand}</td>
                               <td>{vaccine.type}</td>
                               <td>{vaccine.price}</td>
                               <td><button type="button" className="btn  btn-info  rounded-pill" style={{color :"white"}} onClick={() => this.updateData(vaccine.vid)}>Update</button></td>
                           </tbody>)
                       }
                   </table>
               </div>
            
        )
    }

}

export default GetAllVaccines;
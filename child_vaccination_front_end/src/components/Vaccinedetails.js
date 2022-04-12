import axios from 'axios';
import React from 'react';


class Vaccinedetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
            vaccines: [],
           
        }
    }

    componentDidMount = () => {
        axios
            .get(`http://localhost:9090/parent/getallvaccines`)
            .then(res => {
               // alert(res);
                this.setState({ vaccines: res.data });
            });
    }
    backtoHome  = (e) => {
        this.props.history.push("/parenthome");
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
                            </tbody>)
                        }
                    </table>
                </div>

        )
    }
}

export default Vaccinedetails;

import axios from 'axios';
import React from 'react';


class UpdateHospital extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hospital: JSON.parse(localStorage.getItem("loggedinhosp")),
            email: "",
            address: "",
            mobile: ""
        }
    }

    handleChange = (e) => {
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({ [nm]: val });

    }

    updateData = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios
            .patch(`http://localhost:9090/hospital/updatehospital/${this.state.hospital.hid}`, this.state)
            .then(response => {
                alert("Updated  Successful!")
                this.props.history.push("/hospitalhome");
            })
            .catch(error => {
                alert("Duplicate Username/Password")
                this.props.history.push("/edithospital");
            })
    }
    backtoHome  = (e) => {
        e.preventDefault();
        this.props.history.push("/hospitalhome");
    }


    render() {

        return (
            <div>
                 <button class="btn btn-primary col-md-1" type="button" onClick={this.backtoHome} style={{ float: "right" }} >Back</button><br/>
                <div className="container"><br />
                    <h1 className="header2">Hospital Updation</h1>

                    <form>
                        {/* <Form.Group className="mb-3" controlId="formBasicempid">
                            <Form.Label>EmailID :</Form.Label>
                            <Form.Control type="text" placeholder="Enter empid"
                                value={this.state.hospital.email}
                            />
                        </Form.Group> */}


                        {/* <div>
                            <Form className="create-form">
                                <Form.Field>
                                    <label>Email</label>
                                    <input placeholder='Email' onChange={this.handleChange} />
                                </Form.Field>

                            </Form>
                        </div> */}


                        <div className="form-group" class="col-md-3">
                            <label className="lb" for="email"> EmailID :</label>
                            <input type="text" id="email" className="form-control" value={this.state.hospital.email} name="email" onChange={this.handleChange} />
                        </div>
                        <div className="form-group" class="col-md-3">
                            <label className="lb" for="contactNo">Enter Contact No. :</label>
                            <input type="number" id="contactNo" className="form-control" value={this.state.hospital.contactNo} name="contactNo" onChange={this.handleChange} />
                        </div>


                        <div className="form-group" class="col-md-3">
                            <label className="lb" for="address">Enter Address :</label>
                            <input type="text" id="address" className="form-control" value={this.state.hospital.address} name="address" onChange={this.handleChange} />
                        </div>

                        <br></br>
                        <div className="form-group" class="col-md-3">
                            <button type="button" onClick={this.updateData} class="btn btn-primary col-md-5" style={{ marginLeft: "25px" }}>Update</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }

}

export default UpdateHospital;
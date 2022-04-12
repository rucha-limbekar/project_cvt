import axios from 'axios';
import React from 'react';

class AddVaccine extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            vname: "",
            description: "",
            brand: "",
            type: "",
            price:"" ,   
            hospital: JSON.parse(localStorage.getItem("loggedinhosp"))

        }
    }

    handleChange = (e) => {
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({ [nm]: val });
    }

    // componentDidMount = () => {
    //     axios
    //         .get(`http://localhost:9090/admin/getallhospital`)
    //         .then(res => {
    //             alert(res);
    //             this.setState({ hospitals: res.data });
    //         });
    // }

    submitData = (e) => {
        e.preventDefault()     
        axios
            .post(`http://localhost:9090/hospital/addVaccine/${this.state.hospital.hid}`, this.state)
            .then(response => {
                alert("Vaccine added successfully...")
                this.props.history.push("/hospitalhome");
            })
            .catch(error => {
                alert(error)
                this.props.history.push("/addvaccine");
            })
    }

    backtoHome  = (e) => {
        this.props.history.push("/hospitalhome");
    }

    render() {
        return (

            <div className="container form-center" >
             <button class="btn btn-primary col-md-1" type="button" onClick={this.backtoHome} style={{ float: "right" }} >Back</button><br/>

             

                <h1 className="header">Add Vaccine</h1><br/>
                <form>
                    <div className="form-group" class="col-md-2">
                        <label className="lb" for="vname">Enter Vaccine Name :</label>
                        <input type="text" id="vname" className="form-control" name="vname" onChange={this.handleChange} required />
                    </div>

                    <div className="form-group" class="col-md-2">
                        <label className="lb" for="description">Enter Description :</label>
                        <input type="text" id="description" className="form-control" name="description" onChange={this.handleChange} required />
                    </div>


                    <div className="form-group" class="col-md-2">
                        <label className="lb" for="brand">Enter Brand :</label>
                        <input type="text" id="brand" className="form-control" name="brand" onChange={this.handleChange} required /><br />
                    </div>


                    <div className="form-group" class="col-md-2">
                        <label className="lb" for="type">Enter Type of vaccine :</label>
                        <input type="text" id="type" className="form-control" name="type" onChange={this.handleChange} required /><br />
                    </div>


                    <div className="form-group" class="col-md-2">
                        <label className="lb" for="price">Enter Price :</label>
                        <input type="number" id="price" className="form-control" name="price" onChange={this.handleChange} required /><br />
                    </div>

                    
                    <div className="form-group" class="rows">
                        <button class="btn btn-primary col-md-1" type="submit" onClick={this.submitData}>SUBMIT</button>&nbsp;&nbsp;&nbsp;
                        <button class="btn btn-primary col-md-1" type="reset">RESET</button> <br /><br />
                        {/* <-- <button  class="btn btn-primary col-md-2">ADD CHILD</button> -->*/}

                    </div>

                </form>

            </div>
        )
    }

}

export default AddVaccine;
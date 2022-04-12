import axios from 'axios';
import React from 'react';


class UpdateVaccine extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            vid:this.props.match.params.vid,
            vname: "",
            description: "",
            brand: "",
            type: "",
            price:"" ,
            vaccine:{}, 
            //hospital: JSON.parse(localStorage.getItem("loggedinhosp"))  
        }
    }


    componentDidMount = () => {
        axios
            .get(`http://localhost:9090/hospital/getvaccine/${this.state.vid}`)
            .then(res => {
               
                this.setState({ vaccine: res.data });
            });
    }



    handleChange = (e) => {
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({ [nm]: val });

    }

    updateData = (e) => {
        e.preventDefault()
        axios
        .patch(`http://localhost:9090/hospital/updateVaccine/${this.state.vid}`, this.state)
        .then(response => {
            alert("Vaccine updated successfully...")
            this.props.history.push("/hospitalhome");
        })
        .catch(error => {
            alert(error)
            this.props.history.push("/hospitalhome");
        })
    }
    backtoHome  = (e) => {
        e.preventDefault();
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
                       <input type="text" id="vname" className="form-control" value={this.state.vname} name="vname" onChange={this.handleChange} required />
                   </div>

                   <div className="form-group" class="col-md-2">
                       <label className="lb" for="description">Enter Description :</label>
                       <input type="text" id="description" className="form-control" value={this.state.description} name="description" onChange={this.handleChange} required />
                   </div>


                   <div className="form-group" class="col-md-2">
                       <label className="lb" for="brand">Enter Brand :</label>
                       <input type="text" id="brand" className="form-control" name="brand" value={this.state.brand} onChange={this.handleChange} required /><br />
                   </div>


                   <div className="form-group" class="col-md-2">
                       <label className="lb" for="type">Enter Type of vaccine :</label>
                       <input type="text" id="type" className="form-control" name="type" value={this.state.type} onChange={this.handleChange} required /><br />
                   </div>


                   <div className="form-group" class="col-md-2">
                       <label className="lb" for="price">Enter Price :</label>
                       <input type="number" id="price" className="form-control" name="price" value={this.state.price} onChange={this.handleChange} required /><br />
                   </div>

                   
                   <div className="form-group" class="rows">
                       <button class="btn btn-primary col-md-1" type="submit" onClick={this.updateData}>Update</button>&nbsp;&nbsp;&nbsp;
                       <button class="btn btn-primary col-md-1" type="reset">RESET</button> <br /><br />
                       {/* <-- <button  class="btn btn-primary col-md-2">ADD CHILD</button> -->*/}

                   </div>

               </form>

           </div>
        )
    }

}

export default UpdateVaccine;
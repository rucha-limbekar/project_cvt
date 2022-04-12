import React, { Component } from 'react';
import axios from 'axios';

class Certificate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cid: this.props.match.params.cid,
            child: {}
        }

    }
    componentDidMount() {
        axios
             .get(`http://localhost:9090/parent/getchild/${this.state.cid}`)
             .then(resp => resp.text())
             .then(data => {          
                    const json = JSON.parse(data);
                    this.setState({child: json });                    
             })
             .catch(error => {
                //alert("Duplicate Username/Password")
                 this.props.history.push("/parenthome");
               })
    }
    
    printcertificate = (e) => {
        window.print()
    }

    backtoHome = (e) => {
        //e.preventDefault();
        this.props.history.push("/parenthome");
    }


    render() {
        return (

            <div style={{ size: "100%" }}>
                <button class="btn btn-primary col-md-1" type="button" onClick={this.backtoHome} style={{ float: "right" }} >Back</button><br />

                <table class="center" style={{ margin: "auto", width: "100%", height: "100%", border: "6px double Black", backgroundColor: "white" }} >
                    <tr><td style={{ textAlign: "center" }}><h1 style={{ font: "40px", padding: "top 10px" }}>Ministry of Health & Family Welfare</h1></td></tr>
                    <tr>
                        <td><center><img src="http://127.0.0.1:5500/src/images/ministry.jpg" alt="logo" style={{ width: "70px" }} /></center></td>
                    </tr>
                    <tr><td ><h1 style={{ color: "rgb(94, 64, 193)", font: " 40px" }}><center>Certificate for COVID-19 Vaccination</center></h1></td></tr>
                    <tr><td style={{ font: "30px" }}><center>This Certificate is greatfully presented to </center></td></tr>
                    <tr><td style={{ font: "47px"}}><center>{this.state.child.cname}&nbsp;&nbsp;&nbsp;{this.state.child.clname}</center></td></tr>
                    <tr><td style={{ font: "26px" }}><center>for it's valuable support to biggest vaccination drive <br /> in <b>India</b></center></td></tr>
                    <tr>
                        <td><center><img src="http://127.0.0.1:5500/src/images/logo.png" alt="sign" style={{ width: "100px", padding: "20px" }} /></center></td>
                    </tr>
                </table>

                <button onClick={this.printcertificate}>PRINT</button>
            </div>
        );
    }
}
export default Certificate;
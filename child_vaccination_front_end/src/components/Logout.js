import React from 'react';


class Logout extends  React.Component {


    componentDidMount = () => {
        localStorage.removeItem("loggedinuser");
        this.props.history.push("/");
    }

}

export default Logout;
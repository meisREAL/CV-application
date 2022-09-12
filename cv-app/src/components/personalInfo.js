import React, { Component } from "react";

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="inputs">
                <div className="inputFields">
                    <label>Name</label>
                    <input type='text' name='name' />
                </div>
                <div className="inputFields">
                    <label>Surname</label>
                    <input type='text' name='surname' />
                </div>
                <div className="inputFields">
                    <label>Email</label>
                    <input type='email' name='email' />
                </div>
                <div className="inputFields">
                    <label>Phone number</label>
                    <input type='tel' name='tel' />
                </div>
            </div>
        );
    }
}

export default PersonalInfo;
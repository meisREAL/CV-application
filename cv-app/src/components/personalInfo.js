import React, { Component } from "react";

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.props.handleChange(e)
        // console.log(name, value)
    }

    render() {
        const { name, surName, email, phone } = this.props;

        return (
            <div className="inputs">
                <div className="inputFields">
                    <label>Name</label>
                    <input type='text' name='name'
                        value={name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="inputFields">
                    <label>Surname</label>
                    <input type='text' name='surName'
                        value={surName}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="inputFields">
                    <label>Email</label>
                    <input type='email' name='email'
                        value={email}
                        onChange={this.handleChange}

                    />
                </div>
                <div className="inputFields">
                    <label>Phone number</label>
                    <input type='tel' name='phone'
                        value={phone}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default PersonalInfo;
import React, { Component } from "react";

class PersonalInfo extends Component {

    render() {
        const { personalInfo, handleChange } = this.props;
        return (
            <div className="inputs">
                <div className="inputFields">
                    <label>Name</label>
                    <input type='text' name='name'
                        value={personalInfo.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputFields">
                    <label>Surname</label>
                    <input type='text' name='surName'
                        value={personalInfo.surName}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputFields">
                    <label>Email</label>
                    <input type='email' name='email'
                        value={personalInfo.email}
                        onChange={handleChange}

                    />
                </div>
                <div className="inputFields">
                    <label>Phone number</label>
                    <input type='tel' name='phone'
                        value={personalInfo.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default PersonalInfo;
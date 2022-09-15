import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        // code goes here
    }

    render() {
        return (
            <div className="inputs">
                <div className="inputFields">
                    <label>School name</label>
                    <input type='text' name="school" />
                </div>
                <div className="inputFields">
                    <label>Subject</label>
                    <input type='text' name="subject" />
                </div>
                <div className="inputFields">
                    <label>Study from</label>
                    <input type='text' name="studyFrom" />
                </div>
                <div className="inputFields">
                    <label>Study till</label>
                    <input type='text' name="studyTill" />
                </div>
            </div>
        );
    }
}

export default Education;
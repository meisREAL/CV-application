import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e);
    }

    render() {
        const { school, subject, studyFrom, studyTill } = this.props
        return (
            <div className="inputs">
                <div className="inputFields">
                    <label>School name</label>
                    <input type='text' name="school" value={school}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="inputFields">
                    <label>Subject</label>
                    <input type='text' name="subject" value={subject}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="inputFields">
                    <label>Study from</label>
                    <input type='text' name="studyFrom" value={studyFrom}
                        onChange={this.handleChange} />
                </div>
                <div className="inputFields">
                    <label>Study till</label>
                    <input type='text' name="studyTill" value={studyTill}
                        onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

export default Education;
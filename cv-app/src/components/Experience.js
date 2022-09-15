import React, { Component } from "react";

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.handleChange(e);
    }

    render() {
        const { company, position, description, years } = this.props
        return (
            <div className="inputs">
                <div className="inputFields">
                    <label>Company name</label>
                    <input type='text' name="company" value={company}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="inputFields">
                    <label>Position held</label>
                    <input type='text' name="position" value={position}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="inputFields">
                    <label>Short job description</label>
                    <textarea type='text' name="description" value={description}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="inputFields">
                    <label>Experience in years</label>
                    <input type='text' name="years" value={years}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default Experience
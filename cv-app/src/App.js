import React, { Component } from "react";
import PersonalInfo from "./components/personalInfo";

class App extends Component {
    constructor() {
        super();

        this.state = {
            personalInfo: {
                name: '',
                surName: '',
                email: '',
                phone: '',
            },
            education: {
                schoolName: '',
                subject: '',
                degree: '',
                start: '',
                end: '',
            },
            workExperience: {
                company: '',
                position: '',
                jobDescription: '',
                start: '',
                end: '',
            },
            information: [],
            educationList: [],
            workList: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitChange = this.onSubmitChange.bind(this);
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            personalInfo: {
                [name]: value,
                [name]: value,
                [name]: value,
                [name]: value,
            }
        });
    }

    onSubmitChange = e => {
        e.preventDefault();
        this.setState({
            information: this.state.information.concat(this.state.personalInfo),
            personalInfo: {
                name: '',
                surName: '',
                email: '',
                phone: '',
            }
        })
    }

    render() {
        const { personalInfo } = this.state
        return <div id="mainWindow">
            <div id="inputFields">
                <form onSubmit={this.onSubmitChange}>
                    <PersonalInfo personalInfo={personalInfo} handleChange={this.handleChange} />
                    <input type='submit' />
                </form>
            </div>
            <div id="outputFields">your formed cv</div>
        </div>;
    }
}

export default App;
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
            educationList: [],
            workList: [],
        }
    }
    render() {
        return <div id="mainWindow">
            <div id="inputFields">
                <form>
                    <PersonalInfo />
                </form>
            </div>
            <div id="outputFields">your formed cv</div>
        </div>;
    }
}

export default App;
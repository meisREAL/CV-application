import React, { Component } from "react";

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
        return <div>Hello world</div>;
    }
}

export default App;
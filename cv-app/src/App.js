import React, { Component } from "react";
import PersonalInfo from "./components/personalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";


class App extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            surName: '',
            email: '',
            phone: '',
            personalInfo: [],

            school: '',
            subject: '',
            studyFrom: '',
            studyTill: '',
            education: [],

            company: '',
            position: '',
            description: '',
            years: '',
            experience: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmitChange = this.onSubmitChange.bind(this);
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmitChange = (e) => {
        e.preventDefault();
        this.setState({
            personalInfo: [
                ...this.state.personalInfo,
                {
                    name: this.state.name,
                    surname: this.state.surName,
                    email: this.state.email,
                    phone: this.state.phone,
                }
            ],
            education: [
                ...this.state.education,
                {
                    school: this.state.school,
                    subject: this.state.subject,
                    studyFrom: this.state.studyFrom,
                    studyTill: this.state.studyTill,
                }
            ],
            experience: [
                ...this.state.experience,
                {
                    company: this.state.company,
                    position: this.state.position,
                    description: this.state.description,
                    years: this.state.years,
                }
            ],
            name: '',
            surName: '',
            email: '',
            phone: '',
            school: '',
            subject: '',
            studyFrom: '',
            studyTill: '',
            company: '',
            position: '',
            description: '',
            years: '',
        })
    }

    render() {
        const { name, surName, email, phone, school, subject, studyFrom,
            studyTill, company, position, description, years } = this.state
        return <div id="mainWindow">
            <div id="inputFields">
                <form onSubmit={this.onSubmitChange}>
                    <PersonalInfo name={name} surName={surName} email={email} phone={phone}
                        handleChange={this.handleInputChange}
                    />
                    <Education school={school} subject={subject} studyFrom={studyFrom}
                        studyTill={studyTill} handleChange={this.handleInputChange} />
                    <input type='submit' />
                    <Experience company={company} position={position} description={description}
                        years={years} handleChange={this.handleInputChange} />
                </form>
            </div>
            <div id="outputFields">your formed cv</div>
        </div>;
    }
}

export default App;
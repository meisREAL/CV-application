import React, { Component } from "react";
import PersonalInfo from "./components/personalInfo";

class App extends Component {
    constructor() {
        super();

        this.state = {
            // personalInfo: {
            //     name: '',
            //     surName: '',
            //     email: '',
            //     phone: '',
            // },
            // education: {
            //     schoolName: '',
            //     subject: '',
            //     degree: '',
            //     start: '',
            //     end: '',
            // },
            // workExperience: {
            //     company: '',
            //     position: '',
            //     jobDescription: '',
            //     start: '',
            //     end: '',
            // },
            // information: [],
            // educationList: [],
            // workList: [],

            name: '',
            surName: '',
            email: '',
            phone: '',
            personalInfo: [],

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmitChange = this.onSubmitChange.bind(this);
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            // personalInfo: {
            //     // name: value,
            //     // surName: value,
            //     // email: value,
            //     // phone: value,
            // },
            // personalInfo: {
            //     [name]: value,
            //     // [name]: value,
            //     // [name]: value,
            //     // [name]: value,
            // }
            [name]: value

        });
    }

    onSubmitChange = e => {
        e.preventDefault();
        this.setState({
            personalInfo: this.state.personalInfo.concat(this.state.name, this.state.surName,
                this.state.email, this.state.phone)
        })
        console.log(this.personalInfo)
    }

    render() {
        const { name, surName, email, phone } = this.state
        return <div id="mainWindow">
            <div id="inputFields">
                <form onSubmit={this.onSubmitChange}>
                    <PersonalInfo name={name} surName={surName} email={email} phone={phone}
                        handleChange={this.handleInputChange}
                    />
                    <input type='submit' />
                </form>
            </div>
            <div id="outputFields">your formed cv</div>
        </div>;
    }
}

export default App;
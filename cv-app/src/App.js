import React, { Component } from "react";
import PersonalInfo from "./components/personalInfo";

class App extends Component {
    constructor() {
        super();

        this.state = {
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
            name: '',
            surName: '',
            email: '',
            phone: ''
        })
        console.log(this.state.personalInfo)
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
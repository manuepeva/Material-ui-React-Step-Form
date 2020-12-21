import React, { Component } from 'react'
import FormUserD from "./formUserD/FormUserD"
import FormPersonalD from './formPersonalD/FormPersonalD'
import Confirm from './confirm/Confirm'

export default class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        ocupation: '',
        city: '',
        bio: ''
    }
    // Proceed to next step
    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }
    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const {step} = this.state
        const {firstName, lastName, email, ocupation, city, bio} = this.state
        const values = {firstName, lastName, email, ocupation, city, bio}
        switch(step){
            case 1:
            return (
                <FormUserD 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
            case 2:
            return  (
                <FormPersonalD 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
            )
            case 3:
            return (
                <Confirm 
                
                />
            )
            case 4:
            return <h1>Success</h1>

        }
    }
}

import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import layout from './stylesFormUD.module.css'

class FormUserD extends Component {
    continue  =  e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const {values, handleChange} = this.props

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar>
                        <h1>Enter User Details</h1>
                    </AppBar>
                    <br />
                    <div className="fields">
                    <TextField 
                    label="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('First Name')}
                    defaultValue={values.firstName}
                    />
                    <br />
                    <TextField 
                    label="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('Last Name')}
                    defaultValue={values.lastName}
                    />
                    <br />
                    <TextField 
                    label="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('Email')}
                    defaultValue={values.email}
                    />
                    <br />
                    <Button 
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    variant="contained"
                    onClick={this.continue}
                    />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserD

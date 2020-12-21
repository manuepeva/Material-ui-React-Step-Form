import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import layout from './stylesFormUD.module.css'
import Container from '@material-ui/core/Container'
import {createMuiTheme} from '@material-ui/core/styles'
import {green, salmon} from '@material-ui/core/colors'
import {Toolbar, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


const theme = createMuiTheme({
    container: {
        marginTop: '3rem'
    },
    palette:{
        primary: {
            main: green[400]
        }
    }
})

class FormUserD extends Component {
    continue  =  e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const {values, handleChange} = this.props

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar>
                    <Toolbar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={{marginLeft: '30%'}}>Enter User Details</Typography>
                    </Toolbar>
                    </AppBar>
                    <Container fixed style={{marginTop: '9%', marginLeft: '36%'}}>
                    <br />
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
                    variant="contained"
                    >Continue</Button>
                    </Container>
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

import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import {createMuiTheme} from '@material-ui/core/styles'
import {green, salmon} from '@material-ui/core/colors'
import {Toolbar, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


const theme = createMuiTheme({
    Container: {
        marginTop: '3rem'
    },
    palette:{
        primary: {
            main: green[400]
        }
    }
})

class FormPersonalD extends Component {
    continue  =  e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back  =  e => {
        e.preventDefault()
        this.props.prevStep()
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
                        <Typography variant="h6" style={{marginLeft: '30%'}}>Enter Personal Details</Typography>
                    </Toolbar>
                    </AppBar>
                    <Container fixed style={{marginTop: '9%', marginLeft: '36%'}}>
                    <br />
                    <TextField 
                    label="Enter Your Occupation"
                    floatingLabelText="Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                    />
                    <br />
                    <TextField 
                    label="Enter Your City"
                    floatingLabelText="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                    />
                    <br />
                    <TextField 
                    label="Enter Your Bio"
                    floatingLabelText="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                    />
                    <br />
                    <Button 
                    label="Continue"
                    color="primary"
                    style={styles.button}
                    variant="contained"
                    onClick={this.continue}
                    variant="contained"
                    >Continue</Button>
                    <Button 
                    label="Back"
                    color="primary"
                    style={styles.button}
                    variant="contained"
                    onClick={this.back}
                    variant="contained"
                    >Back</Button>
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

export default FormPersonalD

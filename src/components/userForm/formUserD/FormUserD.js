import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import layout from './stylesFormUD.module.css'
import Container from '@material-ui/core/Container'
import {createMuiTheme} from '@material-ui/core/styles'
import {green, yellow} from '@material-ui/core/colors'
import {Toolbar, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


const theme = createMuiTheme({
    container: {
        marginTop: '3rem'
    },
    palette:{
        primary: {
            main: green[400]
        },
        secondary: {
            main: yellow[200]
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
                    floatinglabeltext="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    required
                    />
                    <br />
                    <TextField 
                    label="Enter Your Last Name"
                    floatinglabeltext="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    required
                    />
                    <br />
                    <TextField 
                    label="Enter Your Email"
                    floatinglabeltext="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    required
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

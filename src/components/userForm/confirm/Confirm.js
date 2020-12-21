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
import {ListItem} from '@material-ui/core/ListItem'

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

class Confirm extends Component {
    continue  =  e => {
        e.preventDefault()
        // Process Form
        this.props.nextStep()
    }
    render() {
        const {values: {firstName, lastName, email, occupation,
        city, bio}} = this.props

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar>
                    <Toolbar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={{marginLeft: '30%'}}>Confirm User Data</Typography>
                    </Toolbar>
                    </AppBar>
                    <Container fixed style={{marginTop: '9%', marginLeft: '36%'}}>
                    
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

export default Confirm

import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import {createMuiTheme} from '@material-ui/core/styles'
import {green, purple} from '@material-ui/core/colors'
import {Toolbar, IconButton, Typography, ListItemText} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {ListItem, List} from '@material-ui/core'

const theme = createMuiTheme({
    Container: {
        marginTop: '3rem'
    },
    palette:{
        primary: {
            main: green[400]
        },
        secondary: {
            main: purple[400]
        }
    }
})

class Confirm extends Component {
    continue  =  e => {
        e.preventDefault()
        // Process Form
        this.props.nextStep()
    }
    back  =  e => {
        e.preventDefault()
        this.props.prevStep()
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
                    <List>
                        <ListItemText 
                        primary="First Name"
                        secondary={firstName}
                        />
                        <ListItemText
                        primary="Last Name"
                        secondary={lastName}
                        />
                        <ListItemText
                        primary="Email"
                        secondary={email}
                        />
                        <ListItemText 
                        primary="Occupation"
                        secondary={occupation}
                        />
                        <ListItemText 
                        primary="City"
                        secondary={city}
                        />
                        <ListItemText 
                        primary="Bio"
                        secondary={bio}
                        />
                    </List>
                    <Button 
                    label="Confirm & Continue"
                    color="primary"
                    style={styles.button}
                    variant="contained"
                    onClick={this.continue}
                    variant="contained"
                    >Continue</Button>
                      <Button 
                    label="Back"
                    color="secondary"
                    primary={true}
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

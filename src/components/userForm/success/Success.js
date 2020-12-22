import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles'
import {Toolbar, IconButton, Typography, ListItemText, Container} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar/AppBar'
import {green, purple} from '@material-ui/core/colors'

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


class Success extends Component {
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
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar>
                    <Toolbar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={{marginLeft: '30%'}}>Success!</Typography>
                    </Toolbar>
                    </AppBar>
                    <Container style={{marginTop: '12%', marginLeft: '16%'}}>
                    <Typography variant="h3" style={{marginLeft: '0%'}}>Thank You for Your Submission</Typography>
                        <p style={{margin: '2% 0 0 12%'}}>You Will Get an Email with further instructions</p>
                    </Container>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default Success

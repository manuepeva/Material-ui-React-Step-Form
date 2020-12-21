import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {green, purple} from '@material-ui/core/colors'
import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import ContainerCmp from './components/ContainerCmp'
import { Container, Toolbar } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'



const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg, #FE6B8B, #FFBE53)',
    border: 'solid 1px green',
    color: 'white',
    padding: '15px',
    margin: '30px',
    borderRadius: '20px'
  }
})

const theme = createMuiTheme({
  typography: {
    h3:{
      fontSize: 45,
      marginBottom: '3em'
    }
  },
  palette: {
    primary: {
      main: green[500]
    },
    secondary: {
      main: purple[500]
    }
  }
})

function ButtonStyled(){
  const classes = useStyles()
  return <Button className={classes.root}>Test Styled Button</Button>
}


function CheckboxExample(){
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
      control={
        <Checkbox 
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label="Testing Checkbox"
    />
      
  )
}



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
    <div className="App">
      <AppBar color="primary">
        <Toolbar>
          <IconButton>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
            MUI Themeing
          </Typography>
          <Button>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h3">Welcome to MUI</Typography>
      <Typography variant="subtitle" component="div">Learn MUI</Typography>
      <ContainerCmp />
      <ButtonStyled />
      <Grid container spacing={1} justify="center">
      <Grid item xs={12} sm={6}>
      <Paper style={{height:'75px', width: '50px', width: '100%'}}/>
      </Grid>
      <Grid item xs={3}>
      <Paper style={{height:'75px', width: '50px', width: '100%'}}/>
      </Grid>
      <Grid item xs={3}>
      <Paper style={{height:'75px', width: '50px', width: '100%'}}/>
      </Grid>
      </Grid>
      <TextField 
      variant="filled"
      color="secondary"
      type="email"
      label="The Time"
      placeholder="test@test.com"
      />
      <CheckboxExample />
     <ButtonGroup color="primary" variant="contained" size="small">
     <Button
     endIcon={<SaveIcon />}
     startIcon={<SaveIcon />}>
       Save
     </Button>
     <Button
     endIcon={<DeleteIcon />}
     startIcon={<DeleteIcon />}>
       Discard
     </Button>
     </ButtonGroup>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;

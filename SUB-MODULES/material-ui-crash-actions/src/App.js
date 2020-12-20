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
    <div className="App">
      <Typography variant="h3">Welcome to MUI</Typography>
      <Typography variant="subtitle" component="div">Learn MUI</Typography>
      <ButtonStyled />
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
    </ThemeProvider>
  );
}

export default App;

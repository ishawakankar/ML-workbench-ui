import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import '../css/SelectApp.css'

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  textControl: {
    textAlign: 'center'
  }
});


class SelectApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          applicaton: '',
          profanityInput: '',
          profanityInputShow: false,
        }
    }

    handleChange = (event) => {
      this.setState({
        applicaton: event.target.value,
      })
      if(event.target.value == 'Profanity Check App') {
        this.setState({
          profanityInputShow: true,
        })
      }
      else {
        this.setState({
          profanityInputShow: false,
        })
      }
    }

    handleProfanityInput = (event) => {
      this.setState({
        profanityInput: event.target.value,
      })
    }

    handleClick = () => {
      if(this.state.applicaton == 'Profanity Check App' && this.state.profanityInput == '') {
        console.log('Required value Profanity Input')
      }
      else {
        console.log(this.state.applicaton)
        console.log(this.state.profanityInput)
      }
    }

    render() {
      const { classes } = this.props;
      
        return(
            <div>
              <Paper className={classes.root} id="images">
              <Grid container spacing={3} alignItems="center" justify="center">
                <Grid item xs={12}>
                  <Typography variant="h5" component="h3" className={classes.textControl} style={{color: '#ffffff'}}>
                    Select An Application
                  </Typography>
                </Grid>

                <FormControl variant="filled" className="formControl">
                  <InputLabel htmlFor="filled-age-simple" className="inputControl">Select An App</InputLabel>
                  <Select
                    input={<FilledInput name="age" id="filled-age-simple" />}
                    onChange={this.handleChange}
                    value={this.state.applicaton}
                  >
                    <MenuItem value={'Iris Classification'}>Iris Classification</MenuItem>
                    <MenuItem value={'House Price Estimation'}>House Price Estimation</MenuItem>
                    <MenuItem value={'Profanity Check App'}>Profanity Check App</MenuItem>
                  </Select>
                </FormControl>
               
                    <Fab
                      variant="extended"
                      size="medium"
                      color="primary"
                      aria-label="add"
                      className="fabButton"
                      onClick={this.handleClick}
                    >
                      Run
                    </Fab>

                  {(this.state.profanityInputShow)?
                    <Grid item xs={12} >
                    <TextField
                      id="standard-dense"
                      label="Dense"
                      margin="dense"
                      onChange={this.handleProfanityInput}
                      style={{backgroundColor: '#ffffff', opacity: 0.7}}
                    />
                  </Grid>:''}
                </Grid>
              </Paper>
            </div>
        )
    }
}


export default withStyles(styles) (SelectApp);

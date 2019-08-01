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
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import '../css/SelectApp.css'

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
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
    }

    render() {
      const { classes } = this.props;
      
        return(
            <div>
              <Paper className={classes.root}>
              <Grid container spacing={3} alignItems="center" justify="center">
                <Grid item xs={12}>
                <Typography variant="h5" component="h3" className={classes.textControl}>
                  Select An Application:-
                </Typography>
                </Grid>
                <FormControl variant="filled" className="formControl">
        <InputLabel htmlFor="filled-age-simple" className="inputControl">Select An App</InputLabel>
        <Select
          input={<FilledInput name="age" id="filled-age-simple" />}
        >
         <MenuItem value={10}>Iris Classification</MenuItem>
          <MenuItem value={20}>House Price Estimation</MenuItem>
          <MenuItem value={30}>Profanity Check App</MenuItem>
        </Select>
      </FormControl>
                {/* <FormControl variant="outlined" className="formControl">
        <InputLabel htmlFor="outlined-age-simple">
          Select an App
        </InputLabel>
        <Select input={<OutlinedInput name="age" id="outlined-age-simple" />}>
          <MenuItem value={10}>Iris Classification</MenuItem>
          <MenuItem value={20}>House Price Estimation</MenuItem>
          <MenuItem value={30}>Profanity Check App</MenuItem>
        </Select>
      </FormControl> */}
               
                <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          Run
        </Fab>
        </Grid>
              </Paper>
            </div>
        )
    }
}


export default withStyles(styles) (SelectApp);

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
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

import '../css/SelectApp.css'

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3, 2),
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   text: {
//     textAlign: 'center'
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 180,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   margin: {
//     margin: theme.spacing(2),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

export default function SelectApp() {
  
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    console.log(event.target.value)
  }
  
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  return (
    <div>
      <Paper className="root">
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12} >
            <Typography variant="h5" component="h3" className="text">
            Select an Application
            </Typography>
        </Grid>

        <FormControl variant="outlined" className="formControl">
            <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
            Select an App
            </InputLabel>
            <Select
            value={values.age}
            onChange={handleChange}
            input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
            >
            
            <MenuItem value={'Iris Classification'}>Iris Classification</MenuItem>
            <MenuItem value={'Twenty'}>Twenty</MenuItem>
            <MenuItem value={'Thirty'}>Thirty</MenuItem>
            </Select>
        </FormControl>

            <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            className="margin"
            >
            Run
            </Fab>
        </Grid>
      </Paper>
    </div>
  );
}
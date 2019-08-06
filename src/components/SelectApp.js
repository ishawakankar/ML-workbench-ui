import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import '../css/SelectApp.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(3),
    padding: '15vh'
  },
  profanityInput: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  input: {
    marginLeft: 8,
    flex: 1,
    width: '40vw',
    padding: '1vh'
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
          sentence: '',
          sentence1: '',
          highlight: '',
          profanityScore: ''
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
        // console.log(this.state.applicaton)
        // console.log(this.state.profanityInput)

        var request = {
              "request":{
                  "text": `${this.state.profanityInput}`
              }
        }
        var text = this.state.profanityInput;
          fetch('https://125bad6e-3a27-4359-ba06-8dfbac37f01e.mock.pstmn.io/ml/profanity', {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
          }).then(response => response.json()).then((response) => {

            response.result.profanity[0].detectedWord.map((word) => {
              console.log('detected word ',response.result.profanity[0].detectedWord)
            })

            this.setState({
              highlight: response.result.profanity[0].detectedWord[0],
              sentence: text.split(response.result.profanity[0].detectedWord[0])[0],
              sentence1: text.split(response.result.profanity[0].detectedWord[0])[1],
              profanityScore: response.result.profanity[0].score
            })
          })
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
                 
                     
  
                    {(this.state.profanityInputShow)?
                      <Grid item xs={12} className="profanityInputGrid" >
                       <Paper className={classes.ProfanityRoot}>
                        <InputBase
                          className={classes.input}
                          placeholder="Enter a sentence"
                          inputProps={{ 'aria-label': 'Enter a Sentence' }}
                          multiline
                          onChange={this.handleProfanityInput}
                        />                      
                      </Paper>
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
                      {/* <TextField
                        id="standard-dense"
                        label="Check for Profanity"
                        margin="dense"
                        onChange={this.handleProfanityInput}
                        style={{backgroundColor: '#ffffff', opacity: 0.7}}
                        fullWidth
                      /> */}
                    </Grid>:''}
                  </Grid>
                </Paper>
  
                {(this.state.sentence=='')?'':
                <Grid container spacing={3} alignItems="center" justify="center" >
                  <Grid item xs={6}>
                  <Typography variant="h6" component="h5">
                    Profanity Score: {this.state.profanityScore}
                  </Typography>
                  </Grid>
                <Card style={{width: '50vw', margin: 20}} className={classes.profanityCard}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {this.state.sentence}
                      <span style={{color: '#FF0000'}}>
                        {this.state.highlight}
                      </span>
                      {this.state.sentence1}
                    </Typography>
                  </CardContent>
                </Card>
                </Grid>
                }
              </div>
          )
      }
  }
  
  
  export default withStyles(styles) (SelectApp);
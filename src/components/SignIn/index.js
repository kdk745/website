import React, {Component} from 'react';
import Navigation from '../Navigation';
import {Link} from 'react-router-component';
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default function SignIn(props) {

    const restLogin = () => {
      return props.RestLogin(props.restInfo);
    }

    const updateRest = (event) => {
      const input = event.target;
      let obj = {...props.restInfo};
      obj[input.id] = input.value;
      return props.RestUpdate(obj);
    }

    const textField = {
      padding: "5px 10px 5px 10px"
    }

    const changeEmail = (event) => {
      let obj = {...props.FormInfo};
      const email = event.target.value;
      obj['Email'] = email;
      return props.FormUpdate(obj);
    }

    const changePw = (event) => {
      let obj = {...props.FormInfo};
      const pw = event.target.value;
      obj['Password'] = pw;
      return props.FormUpdate(obj);
    }

    const Submit = () => {
      const Form = props.FormInfo;
      if(props.SignIn) {
        return(props.SignIn(Form));
      }
    }

    const Redirect = () => {
      window.location = 'localhost:5100/dashboard'
    }
    
    return (
      <div>
        <Navigation />
        <Card>
          <CardHeader
            title="Restaurant Sign In"
          />
          <TextField
            style={textField}
            hintText="Enter Email"
            floatingLabelText="Email"
            onChange={(event) => changeEmail(event)}
          /><br />
          <TextField
            style={textField}
            hintText="Enter Password"
            floatingLabelText="Password"
            type="password"
            onChange={(event) => changePw(event)}
          />
          <CardActions>
            <RaisedButton label="Submit" primary={true} onClick={() => Submit()}/>
            <Link className="link" href="register">
              <RaisedButton label="Register Here" secondary={true} />
            </Link>
          </CardActions>
        </Card>
      </div>
    );
}

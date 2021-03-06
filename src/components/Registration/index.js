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

export default function Registration(props) {

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

    return (
      <div>
        <Navigation />
        <Card>
          <CardHeader
            title="Restaurant Registration"
          />
          <TextField
            style={textField}
            hintText="Enter Email"
            floatingLabelText="Email"
          /><br />
          <TextField
            style={textField}
            hintText="Enter Password"
            floatingLabelText="Password"
            type="password"
          /><br />
          <TextField
            style={textField}
            hintText="Enter Restaurant Name"
            floatingLabelText="Restaurant Name"
          /><br />
          <TextField
            style={textField}
            hintText="Enter Address"
            floatingLabelText="Address"
          />
          <CardActions>
            <RaisedButton label="Submit" primary={true} />
          </CardActions>
        </Card>
      </div>
    );
}

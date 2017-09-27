import React, {Component} from 'react';
import './index.css';
import {
  Grid,
  Row,
  Col,
  PageHeader,
  Button,
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  Panel
} from 'react-bootstrap';
import FieldGroup from '../FieldGroup/index.js';

class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRestaurant: false,
    };
  }

  triggerForm(event) {
    const chosen = !(event == 1);
    this.setState({
      isRestaurant: chosen
    });
  }

  guestRegister() {
    return this.props.GuestRegister(this.props.guestInfo);
  }

  restRegister() {
    return this.props.RestRegister(this.props.restInfo);
  }

  updateGuest(event) {
    const input = event.target;
    let obj = {...this.props.guestInfo};
    obj[input.id] = input.value;
    return this.props.GuestUpdate(obj);
  }

  updateRest(event) {
    const input = event.target;
    let obj = {...this.props.restInfo};
    obj[input.id] = input.value;
    return this.props.RestUpdate(obj);
  }

  GuestForm = () => {

    const attributes = [
      ["fname", "text", "First name", "Type First name"],
      ["lname", "text", "Last name", "Type Last name"],
      ["email", "email", "Email address", "Type Email"],
      ["pwd", "password", "Password", "Type Password"]
    ];

    const fields = attributes.map((obj) => {
      return (
        <FieldGroup
          onChange={(e) => {this.updateGuest(e)}}
          id={obj[0]}
          type={obj[1]}
          label={obj[2]}
          placeholder={obj[3]}
        />
      )
    })

    return (
        <form>
          {fields}
          <ButtonToolbar>
            <Button onClick={() => this.guestRegister()} bsStyle="primary">
              <span className="navText">SUBMIT</span>
            </Button>
          </ButtonToolbar>
        </form>
    )
  }

  RestaurantForm = () => {

    const attributes = [
      ["rname", "text", "Restaurant name", "Type Restaurant name"],
      ["rfname", "text", "First name", "Type First name"],
      ["rlname", "text", "Last name", "Type Last name"],
      ["remail", "email", "Email address", "Type Email"],
      ["rpwd", "password", "Password", "Type Password"]
    ];

    const fields = attributes.map((obj) => {
      return (
        <FieldGroup
          onChange={(e) => {this.updateRest(e)}}
          id={obj[0]}
          type={obj[1]}
          label={obj[2]}
          placeholder={obj[3]}
        />
      )
    })
    return (
        <form>
          {fields}
          <ButtonToolbar>
            <Button onClick={() => this.restRegister()} bsStyle="primary">
              <span className="navText">SUBMIT</span>
            </Button>
          </ButtonToolbar>
        </form>
    )
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <PageHeader>
                <small>Registration</small>
              </PageHeader>
              <DropdownButton onSelect={(e)=>this.triggerForm(e)} id="drop-down" title="choose">
                <MenuItem eventKey="1">Guest</MenuItem>
                <MenuItem eventKey="2">Restaurant</MenuItem>
              </DropdownButton>
              <Panel header={this.state.isRestaurant == 1 ?
                <h3>Restaurant registration form</h3> :
                <h3>Guest registration form</h3>}>
                {this.state.isRestaurant === false ?
                  this.GuestForm() :
                  this.RestaurantForm()
                }
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}
export default Registration;

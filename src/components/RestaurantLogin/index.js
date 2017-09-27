import React from 'react';
import './index.css';
import {
  Grid,
  Row,
  Col,
  PageHeader,
  Button,
  ButtonToolbar
} from 'react-bootstrap';
import FieldGroup from '../FieldGroup';
import Navigation from '../Navigation';
import {Link} from 'react-router-component';

export default function RestaurantLogin(props) {

    const attributes = [
      ["REmail", "email", "Email address", "Enter email"],
      ["RPwd", "password", "Password", "Enter password"]
    ];

    const fields = attributes.map((obj) => {
      return (
        <FieldGroup
          id={obj[0]}
          type={obj[1]}
          label={obj[2]}
          placeholder={obj[3]}
        />
      )
    })

    return (
      <div>
        <Navigation />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <PageHeader>
                <small>Restaurant Login</small>
              </PageHeader>
              <form>
                {fields}
                <ButtonToolbar>
                  <Button bsStyle="primary">
                    <span className="navText">SUBMIT</span>
                  </Button>
                  <Link href="/registration/">
                    <Button bsStyle="warning">
                      <span className="navText">REGISTER</span>
                    </Button>
                  </Link>
                </ButtonToolbar>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
}

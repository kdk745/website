import React from 'react';
import './index.css';
import {
  Grid,
  Row,
  Col,
  ButtonToolbar,
  Button,
  PageHeader
} from 'react-bootstrap';
import {Link} from 'react-router-component';

export default function Navigation(props) {
  
    return (
      <div id="navContainer">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <PageHeader id="page-header">
                Welcome to Dinn
              </PageHeader>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col id="nav" xs={12} md={8}>
                <ButtonToolbar>
                  <Link href="/guests/">
                    <Button bsStyle="info">
                        <span className="navText">GUESTS</span>
                    </Button>
                  </Link>
                  <Link href="/restaurants/">
                    <Button bsStyle="success">
                      <span className="navText">RESTAURANTS</span>
                    </Button>
                  </Link>
                </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </div>
    );
}

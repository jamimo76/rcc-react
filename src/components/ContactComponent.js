import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row
} from 'reactstrap'
import { Control, Form, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      agree: false,
      contactType: "By Phone",
      inquiry: "",
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false
      }
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <h2>Contact Us</h2>
            <hr />
            <div className="row row-content align-items-center">
              <div className="col-sm-4">
                <h5>Our Address</h5>
                <address>
                  113-121 Cluffs Crossing Road
                  <br />
                  Salem, NH 03079
                </address>
              </div>
              <div className="col">
                <a role="button" className="btn btn-link" href="tel:+16035551234">
                  <i className="fa fa-phone" /> 1-603-555-1234
                </a>
                <br />
                <a
                  role="button"
                  className="btn btn-link"
                  href="mailto:fakeemail@fakeemail.co"
                >
                  <i className="fa fa-envelope-o" /> rockinghamcommons@rcc.org
                </a>
              </div>
            </div>
            <div className="row row-content">
              <div className="col-12">
                <h2>Inquiry</h2>
                <hr />
              </div>
              <div className="col-md-10">
 {/*                <Form
                  model="inquiryForm"
                  onSubmit={(values) => this.handleSubmit(values)} >
                  <Row className="form-group">
                    <Label htmlFor="firstName" md={2}>
                      First Name
                    </Label>
                    <Col md={10}>
                      <Control.Text
                        model=".firstName"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(2),
                          maxLength: maxLength(15)
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".firstName"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          minLength: "Must be at least 2 characters",
                          maxLength: "Must be 15 characters or less"
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="lastName" md={2}>
                      Last Name
                    </Label>
                    <Col md={10}>
                      <Control.Text
                        model=".lastName"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(2),
                          maxLength: maxLength(15)
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".lastName"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          minLength: "Must be at least 2 characters",
                          maxLength: "Must be 15 characters or less"
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="phoneNum" md={2}>
                      Phone
                    </Label>
                    <Col md={10}>
                      <Control.Text
                        model=".phoneNum"
                        id="phoneNum"
                        name="phoneNum"
                        placeholder="Phone number"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(10),
                          maxLength: maxLength(15),
                          isNumber
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".phoneNum"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          minLength: "Must be at least 10 numbers",
                          maxLength: "Must be 15 numbers or less",
                          isNumber: "Must be a number"
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="email" md={2}>
                      Email
                    </Label>
                    <Col md={10}>
                      <Control.Text
                        model=".email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        validators={{
                          required,
                          validEmail
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".email"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          validEmail: "Invalid email address"
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={{ size: 4, offset: 2 }}>
                      <div className="form-check">
                        <Label check>
                          <Control.Checkbox
                            model=".agree"
                            name="agree"
                            className="form-check-input"
                          />{" "}
                          <strong>May we contact you?</strong>
                        </Label>
                      </div>
                    </Col>
                    <Col md={4}>
                      <Control.Select
                        model=".contactType"
                        name="contactType"
                        className="form-control">
                        <option>By Phone</option>
                        <option>By Email</option>
                      </Control.Select>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="inquiry" md={2}>
                      Your Inquiry
                    </Label>
                    <Col md={10}>
                      <Control.Textarea
                        model=".inquiry"
                        id="inquiry"
                        name="inquiry"
                        rows="12"
                        className="form-control"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={{ size: 10, offset: 2 }}>
                      <Button type="submit" color="primary">
                        Send Inquiry
                      </Button>
                    </Col>
                  </Row>
                </Form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
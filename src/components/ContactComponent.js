import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super(props);
            this.state = {
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            };

            
    }
    
}

export default Contact;
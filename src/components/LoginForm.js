import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { FormHelperText } from 'material-ui/Form';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: '',
            },
            submitted: false,
            validAccount: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      const { formData } = this.state;
      formData[event.target.name] = event.target.value;
      this.setState({ formData });
    }

    handleSubmit(event) {
      const { email, password } = this.state.formData;
      event.preventDefault();
      this.props.onSubmit(email, password);
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>Simple form</h2>
                <TextValidator
                    label='Email'
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['Email és necessari', 'Email no és valid']}
                />
                <br />
                <TextValidator
                    label="Contrasenya"
                    onChange={this.handleChange}
                    name="password"
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                 {this.state.validAccount ? null :
                   <FormHelperText style={{ color: 'red' }} id="name-error-text">Error de usuari o contraseña</FormHelperText>}
                 <br />
                <Button
                    raised
                    type="submit"
                    disabled={submitted}
                > Entrar </Button>
            </ValidatorForm>
        );
    }
}

export default LoginForm;

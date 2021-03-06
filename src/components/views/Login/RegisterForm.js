import React, { Component } from 'react';
import {
  TextField,
  Button,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';

export class FormPersonalDetails extends Component {
  validateForm = () => {
    const { values } = this.props;

    let isError = false;
    const errors = {};

    if (values.name.length < 1) {
      isError = true;
      values.nameError = 'Enter your name';
      values.error = isError;
    }

    if (values.surname.length < 1) {
      isError = true;
      values.surnameError = 'Enter your surname';
      values.error = isError;
    }

    if (values.email.indexOf('@') === -1 || values.email.indexOf('.') === -1) {
      isError = true;
      values.emailError = 'Required valid e-mail';
      values.error = isError;
    }

    if (values.password.length < 5) {
      isError = true;
      values.passwordError = 'Required min. 5 characters';
      values.error = isError;
    }

    if (values.passwordConfirm < 1) {
      isError = true;
      values.passwordConfirmError = 'Confirm your password';
      values.error = isError;
    }

    if (values.passwordConfirm !== values.password) {
      isError = true;
      values.passwordConfirmError = 'Different passwords';
      values.error = isError;
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors,
      });
    }

    return isError;
  };

  continue = e => {
    e.preventDefault();
    const errValidationForm = this.validateForm();
    if (!errValidationForm) {
      this.props.nextStep();
    }
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <form style={styles.container}>
        <TextField
          label='name'
          placeholder='enter your name'
          defaultValue={values.name}
          helperText={values.nameError}
          onChange={handleChange('name')}
          error={values.error}
        />
        <TextField
          label='surname'
          placeholder='enter your surname'
          defaultValue={values.surname}
          helperText={values.surnameError}
          onChange={handleChange('surname')}
          error={values.error}
        />
        <TextField
          label='email'
          placeholder='enter your email'
          defaultValue={values.email}
          helperText={values.emailError}
          onChange={handleChange('email')}
          error={values.error}
        />
        <TextField
          type='password'
          label='password'
          placeholder='enter your password'
          defaultValue={values.password}
          helperText={values.passwordError}
          onChange={handleChange('password')}
          error={values.error}
        />
        <TextField
          type='password'
          label='password'
          placeholder='confirm your password'
          defaultValue={values.passwordConfirm}
          helperText={values.passwordConfirmError}
          onChange={handleChange('passwordConfirm')}
          error={values.error}
        />

        <RadioGroup style={styles.radio} row>
          <FormControlLabel
            value='waiter'
            control={<Radio color='primary' />}
            label='Waiter'
            labelPlacement='end'
          />
          <FormControlLabel
            value='cook'
            control={<Radio color='primary' />}
            label='Cook'
            labelPlacement='start'
          />
        </RadioGroup>
        <div style={styles.buttonContainer}>
          <Button variant='outlined' style={styles.button} onClick={this.back}>
            back
          </Button>
          <Button
            variant='outlined'
            style={styles.button}
            onClick={this.continue}
          >
            next
          </Button>
        </div>
      </form>
    );
  }
}

const styles = {
  button: {
    borderColor: 'yellow',
    borderStyle: 'solid',
    borderSize: '2px',
    borderRadius: '35%',
    padding: '15px',
    height: '70px',
    width: '100px',
    fontSize: '18px',
    textAlign: 'center',
    margin: '5px',
    color: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  radio: {
    color: 'white',
  },
};

export default FormPersonalDetails;

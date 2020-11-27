import React from 'react';
import { useState } from 'react';
// import { projectAuth } from '../../firebase/config';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  FormWrap,
  Icon,
  FormInput,
  Text
} from './SigninElements';
import { Redirect } from 'react-router-dom';
// import { useEffect } from 'react';
import { serverURL } from '../../APIconfig';
import Axios from 'axios';
import MD5 from 'md5';
import { Button } from '../ButtonElementRedirect';

const Signin = () => {
  const [redirect, setRedirect] = useState(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);
  const [auth, setAuth] = useState(false);

  const formSubmit = (e, email, password) => {
    e.preventDefault();

    Axios.post(serverURL + '/signin', {
      email: email,
      password: MD5(password)
    })
    .then((res) => {
      var token = res.data['email'];
      // setAuth(true);
      afterSubmit();
      localStorage.setItem('email',token);
      // console.log('token: ' + res);
    })
    .catch((err) => {
      console.log(err);
      setError('Incorrect Combination')
    })
  }

  const afterSubmit = () => {
    setError('You have logged in successfully.');
    setAuth(true)
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };



  return (
    <Container>
      <FormWrap>
        <Icon to='/'>Singulart</Icon>
        <FormContent>
          <Form onSubmit={(e) => formSubmit(e,email,password)}>
            <FormH1>Sign in to your account.</FormH1>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput name='email' value={email} type='email' onChange={(e) => onChangeHandler(e)} required />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput name='password' value={password} type='password' onChange={(e) => onChangeHandler(e)} required />
            <FormButton type='submit'>Continue</FormButton>
            {error && <Text>{error}</Text>}
            <br />
            {auth && <Button primary={1} dark={1} to='/'>Go back to Homepage...</Button>}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;

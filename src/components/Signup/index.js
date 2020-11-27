import React from 'react';
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
} from '../Signin/SigninElements';

import {projectAuth, projectFirestore} from '../../firebase/config'
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {serverURL} from '../../APIconfig';
import Axios from 'axios';
import MD5 from 'md5';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');  
  const [redirect, setRedirect] = useState(null)
  const [error, setError] = useState(null)
  
  const afterSubmit = () => {
    alert('Account Successfully Created.')
    setRedirect('/signin')
  }

  const formSubmit = (e,email,password, username, contact,city,pin) => {
    e.preventDefault();
    Axios.post(serverURL + '/signup', {
      email: email,
      name: username,
      password: MD5(password),
      contact: contact,
      city: city,
      pin:pin,
    })
    .then((res) => {
      afterSubmit();
    })
    .catch((err) => {
      console.log(err);
      setError('Internal Server Error');
    })
  }



  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'contact') {
      setContact(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'city') {
      setCity(value);
    } else if (name === 'pin') {
      setPin(value);
    }
  };

  if (redirect) {
    return(
    <Redirect to = {redirect} />
    )
  }

  return (
    <Container>
      <FormWrap>
        <Icon to='/'>Singulart</Icon>
        <FormContent>
          <Form onSubmit={(e) => formSubmit(e,email,password, username, contact,city,pin)}>
            <FormH1>Sign up to your account.</FormH1>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <FormInput name='username' value={username} type='text' onChange={(e) => onChangeHandler(e)} required />
            <FormLabel htmlFor='contact'>Contact Number</FormLabel>
            <FormInput name='contact' value={contact} type='tel' pattern='[0-9]{10}' onChange={(e) => onChangeHandler(e)} required />
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput name='email' value={email} type='email' onChange={(e) => onChangeHandler(e)} required />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput name='password' value={password} type='password' onChange={(e) => onChangeHandler(e)} required />
            <FormLabel htmlFor='City'>City</FormLabel>
            <FormInput name='city' value={city} type='text' onChange={(e) => onChangeHandler(e)} required />
            <FormLabel htmlFor='pin'>Pin</FormLabel>
            <FormInput name='pin' value={pin} type='text' pattern='[0-9]{6}' onChange={(e) => onChangeHandler(e)} required />
            <FormButton type='submit'>Continue</FormButton>
            {error && <Text> {error} </Text>}
            <FormLabel><b><center>Are you an Artist??<a href="signup/artist">Artist Login</a></center></b></FormLabel>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signup;

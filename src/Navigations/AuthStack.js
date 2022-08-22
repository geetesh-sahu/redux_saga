import React from 'react';
import {Login, SignUp} from '../Index';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </>
  );
}

import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import ButtonWithLoader from '../../Components/ButtonWithLoader';

const Login = ({navigation}) => {
  const [state, setstate] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
  });
  const {isLoading, email, password, isSecure} = state;

  const updateState = data =>
    setstate(() => ({
      ...state,
      ...data,
    }));

  const onLogin = () => {
    if (email == '' || password =="") {
      alert('Please enter your email and password');
      return
    } else {
      navigation.navigate('SignUp');
    }
  };

  return (
    <View style={styles.container}>
      <TextInputWithLabel placeHolder="enter you email" label="Email" onChangeText={(email)=> updateState({email})} />
      <TextInputWithLabel
        placeHolder="enter you password"
        label="Password"
        isSecure={isSecure}
        secureTextEntry={isSecure}
        onChangeText={(password)=> updateState({password})}
      />
      <ButtonWithLoader text="Login" onPress={onLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
});

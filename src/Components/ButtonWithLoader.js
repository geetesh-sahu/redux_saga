import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonWithLoader = ({text,onPress}) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithLoader;

const styles = StyleSheet.create({
  btnStyle: {
    height: 48,
    borderWidth: 1,
    backgroundColor: 'blue',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  textStyle: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
  },
});

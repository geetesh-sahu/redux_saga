import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const TextInputWithLabel = ({
  label,
  value,
  placeHolder,
  isSecure,
  onChangeText,
  ...props
}) => {
  return (
    <View style={{marginBottom: 16}}>
      <Text style={{fontSize: 16, marginBottom: 8, fontWeight: 'bold'}}>
        {label}
      </Text>
      <TextInput
        value={value}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        placeholderTextColor="gray"
        {...props}
      />
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  inputStyle: {
    height: 48,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
    paddingHorizontal: 12,
  },
});

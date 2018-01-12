import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 25,
    marginHorizontal: 15,
    borderBottomWidth: 2,
    borderColor: 'white',
  },
  labelStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
  },
  inputStyle: {
    flex: 2,
    height: 40,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 5,
  },
});

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.5)"
        onChangeText={onChangeText}
        value={value}
        autoCorrect={false}
        style={styles.inputStyle}
      />
    </View>
  );
};

export default Input;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Email/ Username'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.forgotPasswordLink}>
        <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} 
        onPress={() => navigation.navigate('DashboardIncomplete')}
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    marginTop: 6,
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    fontSize: 17,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  forgotPasswordLink: {
    alignSelf: 'flex-end',
    marginTop: -10,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#034BD9',
    textDecorationLine: 'underline',
  },
  signInButton: {
    width: '100%',
    backgroundColor: '#034BD9',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18
  },
});

export default SignInForm;

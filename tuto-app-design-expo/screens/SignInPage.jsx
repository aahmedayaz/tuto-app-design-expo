import React from 'react';
import { View, StyleSheet} from 'react-native';
import FormWrapper from '../components/Form/FormWrapper';
import SignInForm from '../components/Form/SignInForm';

const SignInPage = () => {
  return (
    <View style={{flex:1, display: 'flex' , alignItems: 'center' , justifyContent: 'center', backgroundColor: 'white'}}>
      <FormWrapper
        heading='Sign In'
        description='Sign In with your Information'
        info="Don't have an Account ?"
        direct="Create Account"
    >
        <SignInForm />
      </FormWrapper>
    </View>
  );
};

SignInPage.navigationOptions = {
  headerShown: false, // Hide the header for this screen
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Example background color
  },
});

export default SignInPage;

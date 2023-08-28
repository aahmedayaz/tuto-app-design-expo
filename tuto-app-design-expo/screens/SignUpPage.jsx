import React from 'react';
import { StyleSheet, View} from 'react-native';
import FormWrapper from '../components/Form/FormWrapper';
import SignUpForm from '../components/Form/SignUpForm';

const SignUpPage = () => {
  return (
    <View style={{flex:1, display: 'flex' , alignItems: 'center' , justifyContent: 'center' , backgroundColor: 'white'}}>
        <FormWrapper
            heading='Sign Up'
            description='Fill your Information'
            info="Already have an Account ?"
            direct="SIgn In"
        >
            <SignUpForm />
        </FormWrapper>
    </View>
  );
};

SignUpPage.navigationOptions = {
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

export default SignUpPage;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import ExtraText from '../Form/ExtraText';

const FormWrapper = ({ heading, description, children, info, direct }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.formContainer}>
          {children}
        </View>
        <ExtraText description={info} direct={direct} />
        <TouchableOpacity style={styles.socialIconWrapperLeft}>
            <FontAwesome name="google" style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconWrapperRight}>
            <FontAwesome name="facebook" style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  wrapper: {
    width:'85%',
    backgroundColor: '#E4EDFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 90,
    paddingTop: 40,
    position: 'relative',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#034BD9',
    marginBottom: 1,
  },
  description: {
    fontSize: 16,
  },
  formContainer: {
    marginVertical: 30,
    width: '100%',
    paddingHorizontal: 20,
  },
  socialIconWrapperLeft: {
    width: 90,
    height: 90,
    borderRadius: 45,
    position: 'absolute',
    bottom: -45,
    left: 60,
    backgroundColor: '#BFD7FF',
    borderWidth: 1,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIconWrapperRight: {
    width: 90,
    height: 90,
    borderRadius: 45,
    position: 'absolute',
    bottom: -45,
    right: 60,
    backgroundColor: '#BFD7FF',
    borderWidth: 1,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: '#ffffff',
    fontSize: 30,
  },
});

export default FormWrapper;

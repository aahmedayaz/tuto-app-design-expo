import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExtraText = ({ description, direct }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => navigation.navigate(direct === 'Create Account' ? 'SignUp' : 'SignIn')}
      >
        <Text style={styles.linkText}>
        {direct === 'Create Account' ? 'Sign Up' : 'Sign In'}
        </Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.divider}></View>
        <Text style={styles.orText}> Or With </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
  },
  linkContainer: {
    marginTop: 5,
  },
  linkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#034BD9',
  },
  dividerContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  divider: {
    width: 250,
    height: 2,
    backgroundColor: 'black',
  },
  orText: {
    position: 'absolute',
    backgroundColor: '#E4EDFF',
    paddingHorizontal: 20,
    bottom: -10,
    fontSize: 14,
  },
});

export default ExtraText;

import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';
import dot from '../assets/sign-in/dot-1.png';
import splashSignInImage from '../assets/sign-in/splash-sign-in-image.png';
import COLORS from '../constants/colors';
import SignInPage from './SignInPage';

const SignInSplash = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowSignIn(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <View style={{flex: 1, display: 'flex', backgroundColor: '#ffffff',}}>
        <View style={styles.container}>
        {showSignIn ? (
            <SignInPage />
        ) : (
            <>
            <Image source={dot} style={styles.topRightDot} />
            <Image source={splashSignInImage} style={styles.mainImage} />
            <Image source={dot} style={styles.middleImage} />
            <Text style={styles.text}>Sign In</Text>
            {/* Space for Animation */}
            <View style={[styles.animation]}>
              <View style={styles.div1}></View>
              <View style={styles.div2}></View>
              <View style={styles.div3}></View>
            </View>
            <Image source={dot} style={styles.bottomImage} />
            </>
        )}
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    animation : {
      marginTop: 25,
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
    },
    div1 : {
      width: 25,
      height: 25,
      borderRadius: 50,
      backgroundColor: 'black'
    },
    div2 : {
      width: 25,
      height: 25,
      borderRadius: 50,
      backgroundColor: 'black'
    },
    div3 : {
      width: 25,
      height: 25,
      borderRadius: 50,
      backgroundColor: 'black'
    },
    bottomImage: {
        position: 'absolute',
        bottom: -25,
        left: -25,
        width: 100,
        height: 100
    },
    text: {
        fontSize: 32, 
        color: COLORS.blue,
        fontWeight: 'bold',
        marginTop: -200
    },
    middleImage: {
       position: 'absolute',
        top: 200,
        left: 30,
        width:15,
        height:15,
        borderRadius: 50
    },
    mainImage: {
        width: '90%',
        resizeMode: 'contain',
        marginTop: -150
    }, 
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    topRightDot: {
        position: 'absolute',
        top: 60,
        right: 80,
        width:30,
        height: 30,
        borderRadius: 50
    }
  });

export default SignInSplash;

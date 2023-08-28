import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import SignInSplash from './SignInSplash';
import logoLowerPart from '../assets/splashScreen/logo-lower-part.png';
import logoUpperPart from '../assets/splashScreen/logo-upper-part.png';
import tutorlaLogo from '../assets/splashScreen/tutorla-logo.png';

const SplashScreen = () => {
  const [firstSplashScreen, setFirstSplashScreen] = useState(true);
  const [secondSplashScreen, setSecondSplashScreen] = useState(false);

  useEffect(() => {
    const firstTimeoutId = setTimeout(() => {
      setFirstSplashScreen(false);
    }, 1200);

    const secondTimeoutId = setTimeout(() => {
      setSecondSplashScreen(true);
    }, 2500);

    return () => {
      clearTimeout(firstTimeoutId);
      clearTimeout(secondTimeoutId);
    };
  }, []);

  return (
    <>
        {
            secondSplashScreen ? 
                <SignInSplash/>
            :
            <>
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                    {
                        firstSplashScreen ?
                        <>
                            <Image source={logoUpperPart} style={styles.logo} />
                            <Image source={logoLowerPart} style={styles.logo} />
                        </>
                        :
                        <>
                            <Image source={tutorlaLogo} style={styles.tutorlaLogo} />
                        </>
                    }
                    </View>
                </View>
            </>
        }
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FF3B18',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    height: '100%',
    padding: 10,
  },
  logo: {
  },
  tutorlaLogo: {
    height: 200,
    width: '80%',
    resizeMode: 'contain'
  },
});

export default SplashScreen;

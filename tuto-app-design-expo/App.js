import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen'
import SignUpPage from './screens/SignUpPage';
import SignInPage from './screens/SignInPage';
 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Splash'
        >
          <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
          <Stack.Screen name="SignUp" component={SignUpPage} options={{headerShown: false}} />
          <Stack.Screen name="SignIn" component={SignInPage} options={{headerShown: false, cardStyle : {marginTop: 100} }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


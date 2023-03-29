import Home from './HomeScreen';
import CreateAccount from './CreateAccountScreen';
import LogIn from './LogInScreen';
import ForgotPassword from './FogotPassowordScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function AppNavigator() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

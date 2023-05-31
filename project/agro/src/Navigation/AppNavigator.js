import Home from '../components/screens/HomeScreen';
import CreateAccount from '../components/screens/CreateAccountScreen';
import LogIn from '../components/screens/LogInScreen';
import ForgotPassword from '../components/screens/FogotPassowordScreen';
import ManualOperations from '../components/screens/ManualOperationsScreen';
import Commodities from '../components/screens/CommoditiesScreen';
import Administration from '../components/screens/AdministrationScreen';
import CarpScreen from '../components/screens/CarpScreen';
import AnnualCostScreen from '../components/screens/AnnualCostScreen';
import DatabaseScreen from '../components/screens/DatabaseScreen';

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
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="ManualOperations" component={ManualOperations} options={{ headerShown: false }} />
        <Stack.Screen name="Commodities" component={Commodities} options={{ headerShown: false }} />
        <Stack.Screen name="Administration" component={Administration} options={{ headerShown: false }} />
        <Stack.Screen name="CarpScreen" component={CarpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AnnualCostScreen" component={AnnualCostScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DatabaseScreen" component={DatabaseScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import SelectConcernScreen from './src/screens/SelectConcernScreen';
import { RootStackParamList } from './src/navigation/type';

export default function App() {

  const Stack = createStackNavigator<RootStackParamList>()
  
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Stack.Navigator initialRouteName='home'screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='home' component={HomeScreen} /> 
        <Stack.Screen name="selectConcern" component={SelectConcernScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


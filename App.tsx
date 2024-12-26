import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import SelectConcernScreen from './src/screens/SelectConcernScreen';
import { RootStackParamList } from './src/navigation/type';
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import ConsultScreen from './src/screens/ConsultScreen';
import DoctorDetailScreen from './src/screens/DoctorDetailScreen';
import ChooseConsultationScreen from './src/screens/ChooseConsultationScreen';
import ChooseDateScreen from './src/screens/ChooseDateScreen';
import ChooseTimeScreen from './src/screens/ChooseTimeScreen';


SplashScreen.preventAutoHideAsync()

export default function App() {

  const Stack = createStackNavigator<RootStackParamList>()

  const [loaded , error] = useFonts({
    "Nunito400" : require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito500" : require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito600" : require("./assets/fonts/Nunito-Bold.ttf")
  })

  useEffect(() => {
    if (loaded || error) {
       SplashScreen.hideAsync() 
    }
  },[loaded,error])
  

  
  if (!loaded && !error) {
    return null
  }
  
  return (
    <NavigationContainer >
      <StatusBar style='dark' />
      <Stack.Navigator initialRouteName='home'screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor:"white"
        }
      }}>
        <Stack.Screen name="home" component={HomeScreen} /> 
        <Stack.Screen name="selectConcern" component={SelectConcernScreen} />
        <Stack.Screen name="consult" component={ConsultScreen} />
        <Stack.Screen name='doctorDetail' component={DoctorDetailScreen} />
        <Stack.Screen name='chooseConsultation' component={ChooseConsultationScreen} />
        <Stack.Screen name='chooseDate' component={ChooseDateScreen} />
        <Stack.Screen name='chooseTime' component={ChooseTimeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


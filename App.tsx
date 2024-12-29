import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from './src/navigation/type';
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import SelectConcernScreen from './src/screens/SelectConcernScreen';
import ConsultScreen from './src/screens/ConsultScreen';
import DoctorDetailScreen from './src/screens/DoctorDetailScreen';
import ChooseConsultationScreen from './src/screens/ChooseConsultationScreen';
import ChooseDateScreen from './src/screens/ChooseDateScreen';
import ChooseTimeScreen from './src/screens/ChooseTimeScreen';
import AppoinmentReview from './src/screens/AppoinmentReview';
import AppoinmentConfirmed from './src/screens/AppoinmentConfirmed';
import SkipScreen from './src/screens/SkipScreen';
import MyBookingScreen from './src/screens/MyBookingScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import ConcernDetailScreen from './src/screens/ConcernDetailScreen';
import BrieflyDescribeScreen from './src/screens/BrieflyDescribeScreen';
import AttachReportScreen from './src/screens/AttachReportScreen';
import ThankYouScreen from './src/screens/ThankYouScreen';


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
    <Provider store={store}>
    <NavigationContainer >
      <StatusBar style='dark' />
      <Stack.Navigator initialRouteName='attachReport'screenOptions={{
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
        <Stack.Screen name='appoinmentReview' component={AppoinmentReview} />
        <Stack.Screen name='appoinmentConfirmed' component={AppoinmentConfirmed}  />
        <Stack.Screen name='skipScreen' component={SkipScreen} />
        <Stack.Screen name='myBooking' component={MyBookingScreen} />  
        <Stack.Screen name='concernDetail' component={ConcernDetailScreen} />
        <Stack.Screen name='brieflyDescribe' component={BrieflyDescribeScreen} />
        <Stack.Screen name='attachReport' component={AttachReportScreen} />
        <Stack.Screen name='thankYou' component={ThankYouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


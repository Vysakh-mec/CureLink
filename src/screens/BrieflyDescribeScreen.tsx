import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import CustomProgressBar from '../components/CustomProgressBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import CustomButton from '../components/CustomButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import CustomLoadingModal from '../components/CustomLoadingModal'
import { setMedicalProgress } from '../redux/slices/bookingSlice'

const BrieflyDescribeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const API_URL = process.env.EXPO_PUBLIC_API_URL
  const appointmentID = useSelector((state:RootState) => state.booking.applicatiionID)
  const dispatch = useDispatch()
  
  const sleepPatterns = [
    "I sleep poorly, often wake up.",
    "I sleep well but wake up feeling tired.",
    "I struggle to fall asleep and stay awake late.",
    "I sleep deeply but for a short duration.",
    "I sleep for long hours but feel unrested.",
    "I have an irregular sleep schedule.",
    "I frequently wake up due to discomfort or pain.",
    "I feel sleepy during the day despite adequate night sleep.",
    "I experience frequent nightmares or disturbances.",
    "I sleep well without any noticeable issues."
  ];

  const [describeText , setDescribeText] = useState("")
  const [pickerValue , setPickerValue] = useState(sleepPatterns[0])
  const [loading ,setLoading] = useState(false)
  
  const handleSubmit = async () => {

    if (loading) {
      return
    }
    
    let obj = {
      concernDescription:describeText,
      sleepPattern:pickerValue,
      medicalProgress:2
    }

    try {
      setLoading(true)
      const response  = await fetch(API_URL+"/appointments/"+appointmentID,{
        method:"PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })

      if (response.ok) {
        navigation.navigate("attachReport")
        dispatch(setMedicalProgress(2))
      }else{
        Alert.alert("Something went wrong!","Unable to update the details")
      }

    } catch (error) {
      Alert.alert("Something went wrong!",(error as Error).message)  
    }finally{
      setLoading(false)
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader header='Briefly Describe' />
      <CustomProgressBar currentStep={2} totalStep={3} />

      <View style={styles.subContainer}>
        <Text style={styles.primaryText}>Briefly describe your concern</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Description</Text>
          <TextInput value={describeText} onChangeText={(text) => setDescribeText(text)} multiline style={styles.input} numberOfLines={3} placeholder='Description' />
        </View>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.primaryText}>Select your sleep pattern</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Sleep Pattern</Text>
          <Picker selectedValue={pickerValue} onValueChange={(value) => setPickerValue(value)} style={{ fontFamily: "Nunito400" }} itemStyle={{ fontFamily: "Nunito400" }} >
            {
              sleepPatterns.map((item, index) => <Picker.Item value={item} label={item} key={index} />)
            }
          </Picker>
        </View>
      </View>

      <View style={[styles.subContainer,{flex:1,justifyContent:"center"}]}>
        <Text style={styles.linkText}>90% of users who attached their reports with the doctor have successfully improved their health.</Text>
      </View>
      {
        loading && <CustomLoadingModal />

      }
      <CustomButton text="I'll fill later" containerStyle={{backgroundColor:"white"}} labelStyle={{color:"#B4B4B4"}} onPress={() => navigation.navigate("skipScreen")} />
      <CustomButton text='Attach Reports' onPress={handleSubmit} />

    </SafeAreaView>
  )
}

export default BrieflyDescribeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    fontFamily: "Nunito400"
  },
  primaryText: {
    fontSize: 14,
    fontFamily: "Nunito600"
  },
  subContainer: {
    marginHorizontal: 16,
    marginVertical: 12,
    rowGap: 10
  },
  labelText: {
    fontSize: 14,
    fontFamily: "Nunito400",
    color: "#646665"
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#CED8E0",
    borderRadius: 16,
    rowGap: 5,
  },
  linkText: {
    fontFamily: "Nunito500",
    fontSize: 14,
    color: "#3A643C",
    textAlign: "center",
  }

})
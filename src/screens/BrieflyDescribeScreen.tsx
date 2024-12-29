import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
import CustomProgressBar from '../components/CustomProgressBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import CustomButton from '../components/CustomButton'
import SkipScreen from './SkipScreen'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'

const BrieflyDescribeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
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

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader header='Briefly Describe' />
      <CustomProgressBar currentStep={2} totalStep={3} />

      <View style={styles.subContainer}>
        <Text style={styles.primaryText}>Briefly describe your concern</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Description</Text>
          <TextInput multiline style={styles.input} numberOfLines={3} placeholder='Description' />
        </View>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.primaryText}>Select your sleep pattern</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Sleep Pattern</Text>
          <Picker style={{ fontFamily: "Nunito400" }} itemStyle={{ fontFamily: "Nunito400" }} >
            {
              sleepPatterns.map((item, index) => <Picker.Item value={item} label={item} key={index} />)
            }
          </Picker>
        </View>
      </View>

      <View style={[styles.subContainer,{flex:1,justifyContent:"center"}]}>
        <Text style={styles.linkText}>90% of users who attached their reports with the doctor have successfully improved their health.</Text>
      </View>
      <CustomButton text="I'll fill later" containerStyle={{backgroundColor:"white"}} labelStyle={{color:"#B4B4B4"}} onPress={() => <SkipScreen />} />
      <CustomButton text='Attach Reports' onPress={() => navigation.navigate("attachReport")} />

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
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import CustomProgressBar from '../components/CustomProgressBar'
import DoctorInfo from '../components/DoctorInfo'

const ChooseTimeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <CustomHeader header='Choose Time Slot' />
        <CustomProgressBar currentStep={3} />
        <DoctorInfo doctorName='Dr Prema' specialist='Male-Female Infertility' selectedOption='Chat Consultation - Free' />
        <View style={styles.subContainer}>
        <Text style={styles.primaryText} >Pick a time slot</Text>
        </View>
    </SafeAreaView>
  )
}

export default ChooseTimeScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    subContainer:{
        marginHorizontal:16,
    },
    primaryText:{
        fontSize:14,
        fontFamily:"Nunito600"
    }
})
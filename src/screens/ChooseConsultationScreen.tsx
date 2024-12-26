import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import RadioActive from "../../assets/icons/RadioActive.svg"
import RadioInActive from "../../assets/icons/RadioInactive.svg"
import CustomProgressBar from '../components/CustomProgressBar'
import CustomButton from '../components/CustomButton'
import DoctorInfo from '../components/DoctorInfo'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'


const ChooseConsultationScreen = () => {

 const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  
  return (
    <SafeAreaView style={styles.container}>
      
      <CustomHeader header="Choose Consultation" />
      <CustomProgressBar currentStep={1} />
      <DoctorInfo doctorName={"Dr Prerna"} specialist={"Male-Female Infertility"}   />

      <View style={styles.optionsContainer}>
        <View style={styles.option}>
            <Text style={styles.secondaryText}>Chat Consultation</Text>
            <Text style={styles.optionLabel}>Free</Text>
            <RadioActive />
            <Text style={styles.recommendedText}>Recommended</Text>
        </View>
        <View style={styles.option}>
            <Text style={styles.secondaryText}>Video Consultation</Text>
            <Text style={styles.optionLabel}>800</Text>
            <RadioInActive />
        </View>
      </View>
      <CustomButton text={"Proceed"} onPress={() => navigation.navigate("chooseDate")} />
    </SafeAreaView>
  )
}

export default ChooseConsultationScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    secondaryText:{
        fontSize:14,
        fontFamily:"Nunito400"
    },
    
    optionLabel:{
        fontSize:24,
        fontFamily:"Nunito600"
    },
    optionsContainer:{
      flexDirection:"row",
      justifyContent:"center",
      columnGap:20,
      paddingHorizontal:1,
      marginTop:40,
      flex:1
    },
    option:{
      height:200,
      backgroundColor:"#FAFAFA",
      borderRadius:28,
      padding:20,
      alignItems:"center",
      rowGap:20
    },
    recommendedText:{
      backgroundColor:"#FBCA90",
      color:"#5E380C",
      fontFamily:"Nunito600",
      fontSize:14,
      padding:4,
      borderRadius:999
    }
})
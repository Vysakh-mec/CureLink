import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import RadioActive from "../../assets/icons/RadioActive.svg"
import RadioInActive from "../../assets/icons/RadioInactive.svg"
import CustomProgressBar from '../components/CustomProgressBar'
import CustomButton from '../components/CustomButton'
import DoctorInfo from '../components/DoctorInfo'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import { setConsultationType } from '../redux/slices/bookingSlice'


const ChooseConsultationScreen = () => {

  const selectedDoctor = useSelector((state:RootState) => state.booking.selectedDoctor)
  const dispatch = useDispatch()
  const handleSubmit = () => {
    dispatch(setConsultationType(activeRadio))
    navigation.navigate("chooseDate")
  }

 const navigation = useNavigation<NavigationProp<RootStackParamList>>()
 const [activeRadio ,setActiveRadio] = useState("chat")
  
  return (
    <SafeAreaView style={styles.container}>
      
      <CustomHeader header="Choose Consultation" />
      <CustomProgressBar currentStep={1} totalStep={4} />
      <DoctorInfo doctorName={"Dr Prerna"} specialist={"Male-Female Infertility"}   />

      <View style={styles.optionsContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveRadio("chat")} style={styles.option}>
            <Text style={styles.secondaryText}>Chat Consultation</Text>
            <Text style={styles.optionLabel}>Free</Text>
            {
              activeRadio === "chat" ? <RadioActive /> : <RadioInActive />
            }
            <Text style={styles.recommendedText}>Recommended</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.option} activeOpacity={0.8} onPress={() => setActiveRadio("video")}>
            <Text style={styles.secondaryText}>Video Consultation</Text>
            <Text style={styles.optionLabel}>₹ {selectedDoctor?.video_consultation_fee}</Text>
            {
              activeRadio === "video" ? <RadioActive /> : <RadioInActive />
            }
        </TouchableOpacity>
      </View>
      <CustomButton text={"Proceed"} onPress={() => handleSubmit()} />
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
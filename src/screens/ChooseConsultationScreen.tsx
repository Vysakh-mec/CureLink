import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import RadioActive from "../../assets/icons/RadioActive.svg"
import RadioInActive from "../../assets/icons/RadioInactive.svg"
import CustomProgressBar from '../components/CustomProgressBar'
import CustomButton from '../components/CustomButton'


const ChooseConsultationScreen = () => {

  const handleNavigation = () => {
    console.log("Clicked")
  }
  
  return (
    <SafeAreaView style={styles.container}>
      
      <CustomHeader header="Choose Consultation" />
      <CustomProgressBar currentStep={1} />

      <View style={styles.infoContainer}>
        <Image source={{uri:"https://picsum.photos/200/300?random=1"}} style={styles.image} />
        <View>
            <Text style={styles.primaryText}>Dr Prerna</Text>
            <Text style={styles.secondaryText}>Male-Female Infertility</Text>
        </View>
      </View>

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
      <CustomButton text={"Proceed"} onPress={handleNavigation} />
    </SafeAreaView>
  )
}

export default ChooseConsultationScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    primaryText:{
        fontSize:16,
        fontFamily:"Nunito600"
    },
    secondaryText:{
        fontSize:14,
        fontFamily:"Nunito400"
    },
    infoContainer:{
        flexDirection:"row",
        alignItems:"center",
        columnGap:10,
        marginHorizontal:16,
        marginVertical:24
    },
    image:{
        height:64,
        aspectRatio:1/1,
        resizeMode:"cover",
        borderRadius:20
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
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GreenTick from "../../assets/icons/GreenTickIcon.svg"
import CustomButton from '../components/CustomButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'

const AppoinmentReview = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  
  return (
    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS == "ios" ? 'padding' : 'height'}>
        <ScrollView style={{flexGrow:1}}>
          <View style={styles.subContainer}>
            <Image source={{ uri: "https://picsum.photos/200/300?random=1" }} style={styles.image} />
            <GreenTick />

            <Text style={styles.headerText}>Appoinment Confirmed</Text>
            <Text style={styles.secondaryHeaderText}>Thank you for choosing our Experts to help guide you</Text>

            <View style={styles.detailsContainer}>

              <DetailItem label="Expert" value="Dr. Prema" />
              <DetailItem label="Appoinment Date" value="23 November 2023" />
              <DetailItem label="Appoinment Time" value="10:05 AM" />
              <DetailItem label="Consultation Type" value="Chat Consultation" />
              <DetailItem label="Consultation Fee" value="Free" />
              

             
            </View>
          </View>
          <View style={styles.ellipseContainer}>
            {
              Array.from({ length: 9 }).map((item, index) => <View key={index} style={styles.ellipse}></View>)
            }
          </View>
          <View style={styles.couponContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Apply Coupon Code</Text>
              <TextInput style={styles.input} placeholder='Enter here' />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Apply</Text>
            </TouchableOpacity>
          </View>
          <CustomButton text='Make Payment' onPress={() => navigation.navigate("chooseConsultation")} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

type DetailItemProps = {
  label:string,
  value:string
}

const DetailItem = ({label,value} : DetailItemProps) => {
  return (
    <View style={styles.detailsItem}>
      <Text style={styles.secondaryText}>{label}</Text>
      <Text style={styles.primaryText}>{value}</Text>
    </View>
  )
}

export default AppoinmentReview

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    alignItems: "center",
    backgroundColor: "#EAF2EA",
    paddingHorizontal: 12,
    paddingVertical: 22,
    marginTop: 34,
    marginHorizontal: 16,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: "cover",
    borderRadius: 20,
    marginBottom: -15
  },
  headerText: {
    fontFamily: "Nunito600",
    fontSize: 24,
    marginVertical: 10,
    textAlign: "center"

  },
  secondaryHeaderText: {
    fontFamily: "Nunito400",
    fontSize: 16,
    textAlign: "center"
  },
  primaryText: {
    fontFamily: "Nunito500",
    fontSize: 14,
    color: "black"
  },
  secondaryText: {
    fontFamily: "Nunito400",
    fontSize: 14,
    color: "#646665"
  },
  detailsContainer: {
    marginTop: 20,
    width: "100%"
  },
  detailsItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
    padding: 10
  },
  ellipse: {
    width: "9%",
    borderRadius: 999,
    backgroundColor: "white",
    aspectRatio: 1 / 1

  },
  ellipseContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: -15
  },
  couponContainer: {
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 16,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 12
  },
  inputContainer: {
    flex: 1,
  },
  labelText: {
    fontSize: 12,
    color: "#646665",
    fontFamily: "Nunito400"
  },
  input:{
    fontFamily:"Nunito400",
    paddingHorizontal:10
  },
  button:{
    backgroundColor:"#3A643B",
    paddingVertical:12,
    paddingHorizontal:20,
    borderRadius:999
  },
  buttonText:{
    color:"white",
    fontFamily:"Nunito500"
  }

})
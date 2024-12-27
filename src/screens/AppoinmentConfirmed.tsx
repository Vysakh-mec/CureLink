import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GreenTickIconLarge from "../../assets/icons/GreenTickLargeIcon.svg"
import CustomButton from '../components/CustomButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'

const AppoinmentConfirmed = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <GreenTickIconLarge />
        <Text style={styles.headerText}>Appointment Succesfully Booked</Text>

        <Image source={{ uri: "https://picsum.photos/200/300?random=1" }} style={styles.image} />
        <Text style={styles.primaryText}>Dr. Prerna</Text>
        <Text style={styles.secondaryText}>Video Consultation - 800 (paid)</Text>

        <Text style={styles.linkText}>86% of users who submitted their reports and shared detailed information with the doctor have successfully improved their health.</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <CustomButton text='Skip' onPress={() => navigation.navigate("skipScreen")} containerStyle={{ backgroundColor: "white", borderWidth: 1, borderColor: "#3A643C" }} labelStyle={{ color: "#3A643C" }} />
        <CustomButton text='Upload Health Records' onPress={() => { }} />
      </View>
    </SafeAreaView>
  )
}

export default AppoinmentConfirmed

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontFamily: "Nunito600",
    textAlign: "center"
  },
  container: {
    flex: 1
  },
  subContainer: {
    alignItems: "center",
    marginTop: 50,
    rowGap: 20,
    paddingHorizontal: 20
  },
  image: {
    height: 50,
    aspectRatio: 1 / 1,
    resizeMode: "cover",
    borderRadius: 20
  },
  primaryText: {
    fontSize: 16,
    fontFamily: "Nunito600"
  },
  secondaryText: {
    fontSize: 14,
    fontFamily: "Nunito400",
    color: "#646665"
  },
  linkText: {
    fontSize: 14,
    fontFamily: "Nunito500",
    color: "#0F3510",
    textAlign: "center",
    marginTop: 30,
  }
})
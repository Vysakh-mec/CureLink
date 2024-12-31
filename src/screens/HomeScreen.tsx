import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import AppointmentItem, { AppointmentItemType } from '../components/AppointmentItem'
import AddButton from "../../assets/icons/AddIcon.svg"

const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const API_URL = process.env.EXPO_PUBLIC_API_URL

  const [appointmentData, setAppointmentData] = useState<AppointmentItemType[]>([])

  useEffect(() => {
    fetch(API_URL+"/appointments").then((response) => response.json()).then((data) => {
      const filtered = data.filter((appointment:AppointmentItemType) => 
        appointment.appointmentStatus == "pending"
      )
      setAppointmentData(filtered)

      setAppointmentData(filtered)
    }).catch((error) => {
      Alert.alert("Something went wrong!",error.message)
    })
  }, [])


  return (
    <View style={styles.container}>
      {
        appointmentData.length ?
          <FlatList data={appointmentData} renderItem={({ item }) => <AppointmentItem data={item} />} />
          :
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text style={{ color: "gray", fontSize: 24, textAlign: "center" , fontFamily:"Nunito600" }}>No Upcoming Appoinments</Text>
          </View>
      }
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("selectConcern")} style={styles.button}>
        <AddButton height={30} width={30} />
      </TouchableOpacity>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: "#3A643B",
    borderRadius: 999,
    height: 60,
    aspectRatio: 1 / 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 20
  }
})
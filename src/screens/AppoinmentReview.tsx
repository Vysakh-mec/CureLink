import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GreenTick from "../../assets/icons/GreenTickIcon.svg"
import CustomButton from '../components/CustomButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import { setApplicationID } from '../redux/slices/bookingSlice'
import Color from '../constant/Color'

const AppoinmentReview = () => {

  const appoinmentDate = useSelector((state: RootState) => state.booking.appointmentDate)
  const doctor = useSelector((state: RootState) => state.booking.selectedDoctor)
  const consultationType = useSelector((state: RootState) => state.booking.consulatationType)
  const appoinmentTime = useSelector((state: RootState) => state.booking.appointmentTime)
  const concern = useSelector((state: RootState) => state.booking.concern)
  const [couponCode, setCouponCode] = useState<string>("")
  const [couponStatus , setCouponStatus] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const API_URL = process.env.EXPO_PUBLIC_API_URL
  const dispatch = useDispatch()

  const handleCouponValidation = () => {
    if (couponCode == "Nothing Applied") {
      Alert.alert("Coupon Code Applied Succesfully")
      setCouponStatus(true)
    }else{
      Alert.alert("Invalid Coupon Code")
    }

  }

  
  const handleSubmit = async () => {

    if (loading) {
      return
    }
    
    let obj = {
      doctor: doctor,
      appoinmentDate: appoinmentDate,
      appoinmentTime: appoinmentTime,
      consultationType: consultationType,
      couponCode: couponStatus ? couponCode : "",
      concern: concern,
      medicalProgress:0,
      medicalDetailsStatus:'pending',
      appointmentStatus:'pending'
    }
    try {
      setLoading(true)
      const response = await fetch(API_URL + "/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
      
      if (response.ok) {
        const responseData = await response.json()
        dispatch(setApplicationID(responseData.id))
        navigation.navigate("appoinmentConfirmed")
      } else {
        Alert.alert("Something went wrong!","Error on submitting the appointment")
      }

    } catch (error) {
      Alert.alert("Something went wrong!", (error as Error).message)
    } finally {
      setLoading(false)
    }

  }



  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? 'padding' : 'height'}>
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={styles.subContainer}>
            <Image source={{ uri: "https://picsum.photos/200/300?random=1" }} style={styles.image} />
            <GreenTick />

            <Text style={styles.headerText}>Appoinment Confirmed</Text>
            <Text style={styles.secondaryHeaderText}>Thank you for choosing our Experts to help guide you</Text>

            <View style={styles.detailsContainer}>
              <DetailItem label="Expert" value={doctor?.name} />
              <DetailItem label="Appoinment Date" value={appoinmentDate?.day + " " + appoinmentDate?.month + " " + appoinmentDate?.year} />
              <DetailItem label="Appoinment Time" value={appoinmentTime} />
              <DetailItem label="Consultation Type" value={consultationType == 'chat' ? "Chat Consultation" : "Video Consultation"} />
              <DetailItem label="Consultation Fee" value={consultationType == 'chat' ? "Free" : doctor?.video_consultation_fee.toString()} />
            </View>
          </View>
          <View style={styles.ellipseContainer}>
            {
              Array.from({ length: 9 }).map((item, index) => <View key={index} style={styles.ellipse}></View>)
            }
          </View>
          {
            loading &&
            <Modal transparent statusBarTranslucent >
              <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ backgroundColor: "white", padding: 30, borderRadius: 20 }}>
                  <ActivityIndicator size={30} color={Color.primaryColor} />
                </View>
              </View>
            </Modal>
          }
          <View style={styles.couponContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Apply Coupon Code</Text>
              <TextInput value={couponCode} onChangeText={(text) => setCouponCode(text)} style={styles.input} placeholder='Enter here' />
            </View>
            <TouchableOpacity onPress={handleCouponValidation} disabled={!couponCode.length} style={[styles.button, !couponCode.length ? { backgroundColor: "#E2E2E2" } : null]}  >
              <Text style={styles.buttonText}>Apply</Text>
            </TouchableOpacity>
          </View>
          <CustomButton disabled={loading} text='Make Payment' onPress={handleSubmit} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

type DetailItemProps = {
  label: string,
  value?: string
}

const DetailItem = ({ label, value }: DetailItemProps) => {
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
    color: Color.secondaryTextColor
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
    color: Color.secondaryTextColor,
    fontFamily: "Nunito400"
  },
  input: {
    fontFamily: "Nunito400",
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: Color.primaryColor,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 999
  },
  buttonText: {
    color: "white",
    fontFamily: "Nunito500"
  }

})
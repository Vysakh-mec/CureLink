import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import LottieView from 'lottie-react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import Color from '../constant/Color'

const ThankYouScreen = () => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <SafeAreaView style={styles.container}>
      <Text></Text>
      {
        !isAnimationFinished &&
        <LottieView source={require("../../assets/animation/Celebration.json")} onAnimationFinish={() => setIsAnimationFinished(true)} autoPlay loop={false} style={styles.animation} />
      }
      <View style={styles.subContainer}>
        <Text style={styles.headerText}>Thankyou for updating your health information</Text>
        <Text style={styles.linkText}>We wish you a speedy recovery.</Text>

        <Image source={{
          uri: "https://picsum.photos/200/300?random=1"
        }} style={styles.image} />
        <Text style={styles.primaryText} >Dr. Prerna</Text>
        <Text style={styles.secondaryText}>Male-Female Inferitilty</Text>
        <Text style={styles.secondaryText}>Video Consultation - 800(paid)</Text>
      </View>
      <CustomButton onPress={() => navigation.navigate("myBooking") } text='View My Appointments' />
    </SafeAreaView>
  )
}

export default ThankYouScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  subContainer: {
    rowGap: 10,
    alignItems: "center"
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Nunito600",
    textAlign: "center"
  },
  primaryText: {
    fontSize: 16,
    fontFamily: "Nunito600",
    textAlign: "center"
  },
  secondaryText: {
    color: Color.secondaryTextColor,
    fontFamily: "Nunito400",
    fontSize: 14,
    textAlign: "center"
  },
  linkText: {
    color: "#0F3510",
    fontSize: 14,
    fontFamily: "Nunito500",
    textAlign: "center"
  },
  image: {
    height: 48,
    aspectRatio: 1 / 1,
    resizeMode: "cover",
    borderRadius: 16
  },
  animation: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 500,
    width: "100%"
  }
})
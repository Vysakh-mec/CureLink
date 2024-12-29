import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import ImagePlaceholder from "../../assets/icons/ImagePlaceholder.svg"
import CloseIcon from "../../assets/icons/Close.svg"
import AddIcon from "../../assets/icons/AddMore.svg"
import CustomButton from '../components/CustomButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'

const AttachReportScreen = () => {

  const [image, setImage] = useState(true)
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader header='Attach Reports' />
      <View style={styles.subContainer}>
        <Text style={styles.primaryText}>Attach Reports</Text>
        <View style={styles.imageContainer} >
          {
            image ?
              <>
                <Image style={styles.image} source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAyvnnBRcj03C41zbJo6mKxfKVpvJhTOssg&s"
                }} />
                <TouchableOpacity style={styles.iconContainer}>
                  <CloseIcon />
                </TouchableOpacity>
              </>
              :
              <View style={styles.placeholderContainer}>
                <ImagePlaceholder />
                <Text style={styles.placeholderText}>Upload pdf, png, jpg or svg file.</Text>
              </View>
          }
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <AddIcon />
          <Text style={styles.labelText}>Add more</Text>
        </TouchableOpacity>
      </View>
      <CustomButton text="I'll fill later" labelStyle={{color:"#B4B4B4"}} containerStyle={{backgroundColor:"white"}} onPress={() =>navigation.navigate("skipScreen")} />
      <CustomButton text="Submit" onPress={() => navigation.navigate("thankYou")} />

    </SafeAreaView>
  )
}

export default AttachReportScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
    rowGap: 10,
    flex:1
  },
  primaryText: {
    fontSize: 16,
    fontFamily: "Nunito600"
  },
  imageContainer: {
    borderRadius: 16,
    aspectRatio: 2 / 1
  },
  placeholderContainer: {
    backgroundColor: "#EAF2EA",
    flex: 1,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#97AB97",
    borderStyle: "dashed",
  },
  placeholderText: {
    textAlign: "center",
    fontFamily: "Nunito400",
    fontSize: 14,
  },
  image: {
    backgroundColor: "black",
    resizeMode: "contain",
    flex: 1,
    borderRadius: 16
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    right: 0
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    width: 150,
    paddingVertical: 10
  },
  labelText: {
    fontSize: 14,
    fontFamily: "Nunito500",
    color: "#3A643B"
  }
})
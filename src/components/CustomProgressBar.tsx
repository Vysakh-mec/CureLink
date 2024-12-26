import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type CustomProgressBarProps = {
  currentStep:number
}


const CustomProgressBar = ({currentStep}:CustomProgressBarProps) => {
  return (
    <View style={styles.container}>
      {
        [1,2,3,4].map((item,index) => <View key={index} style={[styles.loadingBar,index < currentStep ? {backgroundColor:"#3A643B"} : null]}></View>)
      }
    </View>
  )
}

export default CustomProgressBar

const styles = StyleSheet.create({
    loadingBar:{
        height:5,
        backgroundColor:"#E2E2E2",
        width:"22%",
        borderRadius:999
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        columnGap:10,
        justifyContent:"center",
        marginVertical:10
    }
})
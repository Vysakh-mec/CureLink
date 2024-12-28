import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type CustomProgressBarProps = {
  currentStep:number,
  totalStep:number
}


const CustomProgressBar = ({currentStep,totalStep}:CustomProgressBarProps) => {
  return (
    <View style={styles.container}>
      {
        Array.from({length:totalStep}).map((item,index) => <View key={index} style={[styles.loadingBar,index < currentStep ? {backgroundColor:"#3A643B"} : null]}></View>)
      }
    </View>
  )
}

export default CustomProgressBar

const styles = StyleSheet.create({
    loadingBar:{
        height:5,
        backgroundColor:"#E2E2E2",
        borderRadius:999,
        flex:1
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        columnGap:10,
        justifyContent:"center",
        marginVertical:10,
        marginHorizontal:16
    }
})
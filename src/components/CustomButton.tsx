import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'

type CustomButtonProps = {
    text?:string,
    onPress:Function,
    containerStyle?:StyleProp<ViewStyle>,
    labelStyle?:StyleProp<TextStyle>
}

const CustomButton = ({ text , onPress , containerStyle , labelStyle }:CustomButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container,containerStyle]} onPress={() => onPress()}>
        <Text style={[styles.text,labelStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#3A643B",
        paddingVertical:16,
        paddingHorizontal:16,
        borderRadius:12,
        alignSelf:"center",
        width:"90%",
        marginBottom:20
    },
    text:{
        color:"white",
        fontFamily:"Nunito600",
        fontSize:16,
        textAlign:"center"
    }
})
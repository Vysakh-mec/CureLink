import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import Color from '../constant/Color'

type CustomButtonProps = {
    text?:string,
    onPress:Function,
    containerStyle?:StyleProp<ViewStyle>,
    labelStyle?:StyleProp<TextStyle>,
    disabled?:boolean
}

const CustomButton = ({ text , onPress , containerStyle , labelStyle , disabled }:CustomButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} disabled={disabled} style={[styles.container,containerStyle,disabled ? { backgroundColor:Color.inactiveButton} : null]} onPress={() => onPress()}>
        <Text style={[styles.text,labelStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.primaryColor,
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
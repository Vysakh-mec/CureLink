import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type CustomButtonProps = {
    text:string,
    onPress:Function
}

const CustomButton = ({text , onPress}:CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
        <Text style={styles.text}>Confirm Selection</Text>
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
        marginBottom:25
    },
    text:{
        color:"white",
        fontFamily:"Nunito600",
        fontSize:16,
        textAlign:"center"
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type CustomItemProps = {
    mainText:string,
    subText:string
}


const CustomItem = ({mainText , subText} : CustomItemProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.primaryText}>{mainText}</Text>
            <Text style={styles.secondaryText}>{subText}</Text>
        </View>
    )
}

export default CustomItem

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        padding:20,
        backgroundColor:"#FAFAFA",
        borderRadius:16,
        width:"30%",
        justifyContent:"center"
    },
    primaryText:{
        fontSize:14,
        fontFamily:"Nunito400"
    },
    secondaryText:{
        fontSize:12,
        fontFamily:"Nunito500",
    },
})
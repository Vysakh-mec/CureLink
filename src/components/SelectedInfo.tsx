import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CalenderIcon from "../../assets/icons/CalenderIcon.svg"
import ClockIcon from "../../assets/icons/ClockIcon.svg"

const SelectedInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <CalenderIcon />
                <Text style={styles.text}>06 Nov</Text>
            </View>
            <View style={styles.subContainer}>
                <ClockIcon />
                <Text style={styles.text}>10:00 AM</Text>
            </View>
        </View>
    )
}

export default SelectedInfo

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        columnGap:20,
        paddingVertical:16,
        backgroundColor:"#EAF2EA",
        width:"90%",
        alignSelf:"center",
        marginBottom:-10,
        borderTopEndRadius:12,
        borderTopStartRadius:12
    },
    subContainer:{
        flexDirection:"row",
        alignItems:"center",
        columnGap:10
    },
    text:{
        fontSize:14,
        fontFamily:"Nunito500"
    }
})
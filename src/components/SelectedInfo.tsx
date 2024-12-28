import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CalenderIcon from "../../assets/icons/CalenderIcon.svg"
import ClockIcon from "../../assets/icons/ClockIcon.svg"

type SelectedInfoProps = {
    date?: string,
    time?: string
}

const SelectedInfo = ({date,time}:SelectedInfoProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <CalenderIcon />
                <Text style={styles.text}>{date ? date : "-- --"}</Text>
            </View>
            <View style={styles.subContainer}>
                <ClockIcon />
                <Text style={styles.text}>{time ? time : " --  --"}</Text>
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
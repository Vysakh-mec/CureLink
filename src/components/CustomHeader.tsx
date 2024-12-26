import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackButton from "../../assets/icons/BackButton.svg"
import { useNavigation } from '@react-navigation/native'

type CustomHeaderProp = {
    header?:string
}

const CustomHeader = ({header}:CustomHeaderProp) => {

    const naviagtion = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => naviagtion.goBack()}>
                <BackButton height={24} width={24} />
            </TouchableOpacity>
            <Text style={styles.text}>{header}</Text>
            <View style={[styles.ellipse,{right: -40,bottom:-120 }]}>
            </View>
            <View style={[styles.ellipse,{right:0,top:-100}]}></View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: 180,
        backgroundColor: "#EAF2EA",
        position: "relative",
        overflow: "hidden",
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40
    },
    text: {
        fontFamily: "Nunito500",
        fontSize: 28,
        marginVertical: 16,
        paddingHorizontal: 4,
    
    },
    ellipse: {
        backgroundColor: "#CFEBCF80",
        height: 184,
        width: 184,
        borderRadius: 999,
        opacity: 0.8,
        position: "absolute",
    }
})
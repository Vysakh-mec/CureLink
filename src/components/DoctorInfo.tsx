import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type DoctorInfoProps = {
    doctorName:string,
    specialist:string,
    selectedOption?:string
}

const DoctorInfo = ({doctorName,specialist,selectedOption}:DoctorInfoProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://picsum.photos/200/300?random=1" }} style={styles.image} />
            <View>
                <Text style={styles.primaryText}>{doctorName}</Text>
                <Text style={styles.secondaryText}>{specialist}</Text>
                <Text style={styles.secondaryText}>{selectedOption}</Text>
            </View>
        </View>
    )
}

export default DoctorInfo

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        columnGap:10,
        marginHorizontal:16,
        marginVertical:24
    },
    primaryText:{
        fontSize:16,
        fontFamily:"Nunito600"
    },
    secondaryText:{
        fontSize:14,
        fontFamily:"Nunito400"
    },
    image:{
        height:64,
        aspectRatio:1/1,
        resizeMode:"cover",
        borderRadius:20
    },
})
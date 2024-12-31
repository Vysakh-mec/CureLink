import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import StarIcon from "../../assets/icons/StarIcon.svg"
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import { DoctorListItemProps } from '../constant/types'



const DoctorListItem = ({details}:DoctorListItemProps) => {
    
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    const handleNavigation = () => {      
        navigation.navigate("doctorDetail",details)
    }
    
    
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handleNavigation} style={styles.container}>     
      <View style={styles.upperContainer}>
        <Image source={{
            uri:"https://picsum.photos/200/300?random=1"
        }} style={styles.image} />
        {/* iMAGE */}
        <View style={styles.detailsContainer}>
            <Text style={styles.headerText}>{details.name}</Text>
            <Text style={styles.subText}>{details.specialist}</Text>
            <Text style={styles.subText}>{details.experience} of Experience</Text>
            <View style={styles.starContainer}>
                <StarIcon />
                <Text style={styles.starText}>{details.rating} Stars</Text>
            </View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
            <View style={styles.miniContainer}>
                <Text style={styles.subText}>Video Consultation</Text>
                <Text style={[styles.subText,{color:"black"}]}>₹ {details.video_consultation_fee}</Text>
            </View>
            <View style={styles.miniContainer}>
                <Text style={styles.subText}>Chat Consultation</Text>
                <Text style={[styles.subText,{color:"black"}]}>Free</Text>
            </View>
      </View>
    </TouchableOpacity>
  )
}

export default DoctorListItem

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:12,
        marginVertical:20,
        marginHorizontal:16,
        paddingVertical:13,
        rowGap:20
    },
    image:{
        height:100,
        aspectRatio:1/1,
        resizeMode:"cover",
        borderRadius:20
    },
    upperContainer:{
        flexDirection:"row",
        columnGap:16
    },
    headerText:{
        fontSize:18,
        fontFamily:"Nunito600"
    },
    subText:{
        fontSize:14,
        fontFamily:"Nunito400",
        color:"#646665"
    },
    starText:{
        fontSize:16,
        fontFamily:"Nunito500",
        color:"#646665"
    },
    starContainer:{
        flexDirection:"row",
        alignItems:"center",
        columnGap:5
    },
    detailsContainer:{
        rowGap:4
    },
    lowerContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:5
    },
    miniContainer:{
        alignItems:"center",
        rowGap:4
    }
})
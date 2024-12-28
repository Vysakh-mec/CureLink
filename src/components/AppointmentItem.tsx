import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CalenderIcon from '../../assets/icons/CalenderIcon.svg'
import ClockIcon from '../../assets/icons/ClockIcon.svg'
import NextButton from '../../assets/icons/NextButton.svg'
import CustomButton from './CustomButton'

type AppointmentItemProps = {
    data:AppointmentItem
}

type AppointmentItem = {
    id:string,
    doctor:{
        name:string,
        specialist:string,
        video_consultation_fee:number
    },
    appoinmentDate:{
        day:string,
        month:string,
        weekdays:string,
        year:string
    },
    appoinmentTime:string,
    consultationType:string,
    couponCode:string,
    concern:string
}

const AppointmentItem = ({data} : AppointmentItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View >
                    <Text style={styles.primaryText}>{data.doctor.name}</Text>
                    <View style={styles.headerContainer}>
                    <Text style={styles.secondaryText}>{data.doctor.specialist} </Text>
                    <Text style={styles.statusText}>pending</Text>
                    </View>
                </View>
                <Image source={{ uri: "https://picsum.photos/200/300?random=1" }} style={styles.image} />
            </View>

            <View>
                <View style={styles.iconsContainer}>
                    <View style={styles.iconTextContainer}>
                        <CalenderIcon />                        
                        <Text style={styles.secondaryText}>{data.appoinmentDate.day +" " + data.appoinmentDate.month+" "+data.appoinmentDate.year }</Text>
                    </View>
                    <View style={styles.iconTextContainer}>
                        <ClockIcon />
                        <Text style={styles.secondaryText}>{data.appoinmentTime}</Text>
                    </View>
                </View>

                <View style={styles.prescriptionContainer}>
                    <View style={styles.textContainer}>
                    <Text style={styles.prescriptionHeaderText}>Add Medical Information (0/3)</Text>
                    <Text style={styles.prescriptionText}>It will help doctor understand better</Text>
                    </View>
                    <NextButton />
                </View>
            </View>

            <View style={styles.footerContainer}>
                <CustomButton text='View Details' labelStyle={{fontSize:14,color:"#3A643B"}}  containerStyle={{width:"50%",backgroundColor:"white"}} onPress={() => {}} />
                <CustomButton  text='Join Appointment' labelStyle={{fontSize:14}} containerStyle={{width:"50%"}} onPress={() => {}} />
            </View>

        </View>
    )
}

export default AppointmentItem

const styles = StyleSheet.create({
    container:{
        marginHorizontal:16,
        marginBottom:40,
        paddingHorizontal:12,
        paddingVertical:20,
        borderColor:"#F0F0F0",
        borderWidth:1,
        borderRadius:12
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:1
    },
    image:{
        height: 50,
        aspectRatio: 1/1,
        borderRadius: 20,
        resizeMode: 'cover'    
    },
    primaryText: {
        fontSize:14,
        fontFamily:"Nunito500"
    },
    secondaryText: {
        fontSize:12,
        fontFamily:"Nunito400",
        marginVertical:5,
    },
    iconTextContainer:{
        flexDirection:"row",
        alignItems:"center",
        columnGap:10
    },
    iconsContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        paddingHorizontal:1,
        columnGap:10
    },
    prescriptionContainer:{
        backgroundColor:"#F5F3FC",
        borderRadius:12,
        paddingVertical:8,
        paddingHorizontal:10,
        marginVertical:12,
        flexDirection:"row",
        alignItems:"center",

    },
    prescriptionHeaderText:{
        fontSize:14,
        fontFamily:"Nunito600"
    },
    prescriptionText:{
        fontSize:12,
        fontFamily:"Nunito400"
    },
    textContainer:{
        flex:1
    },
    footerContainer:{
        flexDirection:"row",
        marginTop:10
    },
    statusText:{
        color:"#B26B17",
        backgroundColor:"#FEF6ED",
        fontFamily:"Nunito600",
        borderRadius:999,
        paddingVertical:4,
        paddingHorizontal:8,
        marginHorizontal:10
    }
})
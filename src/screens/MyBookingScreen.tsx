import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { act, useEffect, useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppointmentItem from '../components/AppointmentItem'

const MyBookingScreen = () => {

    const [activeTab, setActiveTab] = useState<String>('Appointments')
    const [appointmentData,setAppointmentData] = useState([])
    const API_URL = process.env.EXPO_PUBLIC_API_URL

    useEffect(() => {
        fetch(API_URL+"/appointments")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })
    },[])
    
  return (
    <SafeAreaView style={styles.container}>
        <CustomHeader header='My Bookings' />
        
        <View style={styles.navBarContainer}> 
            <TouchableOpacity activeOpacity={0.9} onPress={() => setActiveTab('Appointments')} style={[styles.navBarItem,activeTab == "Appointments" ? styles.activeNavBarItem : null]}>
                <Text style={[styles.navBarText,activeTab == "Appointments" ? styles.activeNavBarText : null]}>Appoinments</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={() => setActiveTab('Orders')} style={[styles.navBarItem,activeTab == "Orders" ? styles.activeNavBarItem : null]}>
                <Text style={[styles.navBarText,activeTab == "Orders" ? styles.activeNavBarText : null]}>Orders</Text>
            </TouchableOpacity>    
        </View>
        {
            activeTab == "Appointments" 
            ? <AppointmentItem /> 
            
            : 
            <View style={{justifyContent:"center",flex:1}}>
                <Text style={{textAlign:"center",fontFamily:"Nunito600",fontSize:28,color:"gray"}} >No Orders Found</Text>
            </View>
        }
    </SafeAreaView>
  )
}



export default MyBookingScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    navBarContainer: {
        flexDirection: 'row',
        alignItems:"center",
        marginVertical:24,
        marginHorizontal:20,
        // columnGap:20
    },
    navBarItem: {
        padding: 10,
        backgroundColor:"#FAFAFA",
        flex:1,
        borderRadius:8
    },
    navBarText: {
        textAlign: 'center',
        fontFamily:"Nunito500",
        fontSize:14
    },
    activeNavBarItem: {
        backgroundColor:"#0C140C"
    },
    activeNavBarText: {
        color:"white"
    }
    
})
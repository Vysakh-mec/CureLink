import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import CustomProgressBar from '../components/CustomProgressBar'
import DoctorInfo from '../components/DoctorInfo'
import CustomItem from '../components/CustomItem'
import CustomButton from '../components/CustomButton'
import SelectedInfo from '../components/SelectedInfo'


const ChooseTimeScreen = () => {


    const timeSlots = [
        {
            section: "Morning",
            time: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]
        },
        {
            section: "Afternoon",
            time: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]
        },
        {
            section: "Evening",
            time: ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]
        }

    ]


    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader header='Choose Time Slot' />
            <CustomProgressBar currentStep={3} />
            <DoctorInfo doctorName='Dr Prema' specialist='Male-Female Infertility' selectedOption='Chat Consultation - Free' />
            <View style={styles.subContainer}>
                <Text style={styles.primaryText} >Pick a time slot</Text>
                <FlatList showsVerticalScrollIndicator={false} data={timeSlots} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <CustomList title={item.section} data={item.time} />} />
            </View>
            <SelectedInfo />
            <CustomButton text='Confirm Appointment' onPress={() => {}} />
        </SafeAreaView>
    )
}

type CustomListProps = {
    title: string,
    data: string[]
}

const CustomList = ({ title, data }: CustomListProps) => {

    const [isexpanded, setIsExpanded] = useState<Boolean>(false)
    const updatedData = isexpanded ? data : data.slice(0, 3)

    return (
        <View>
            <Text style={styles.labelText}>{title}</Text>
            <FlatList numColumns={3} keyExtractor={(item, index) => index.toString()} columnWrapperStyle={styles.columnWrapper} data={updatedData} renderItem={({ item }) => <CustomItem mainText={item} />} />
            <TouchableOpacity activeOpacity={0.8} style={styles.linkContainer} onPress={() => setIsExpanded(prevState => !prevState)}>
                <Text style={styles.linkText}>{isexpanded ? "See less" : "See more"}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default ChooseTimeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        marginHorizontal: 16,
        flex: 1,
    },
    primaryText: {
        fontSize: 14,
        fontFamily: "Nunito600"
    },
    columnWrapper: {
        marginHorizontal: 16,
        justifyContent: "space-between",
        marginVertical: 12
    },
    labelText: {
        fontFamily: "Nunito400",
        fontSize: 14,
        marginVertical: 10,
        marginHorizontal: 12
    },
    linkContainer:{
        paddingVertical:8,
        width:100,
        alignSelf:"flex-end"
    },
    linkText:{
        fontSize:16,
        fontFamily:"Nunito600",
        color:"#3A643B",
        textAlign:"center"
    }
})
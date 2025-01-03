import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import CustomProgressBar from '../components/CustomProgressBar'
import DoctorInfo from '../components/DoctorInfo'
import CustomButton from '../components/CustomButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import CustomItem from '../components/CustomItem'
import { setAppointmentDate } from '../redux/slices/bookingSlice'
import { useDispatch } from 'react-redux'
import SelectedInfo from '../components/SelectedInfo'

type DateObject = {
    day:string,
    month:string,
    weekdays:string,
    year:string
}

const ChooseDateScreen = () => {

    const [days, setDays] = useState<DateObject[]>([])
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const [selectedDate , setSelectedDate] = useState<DateObject | null>(null)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (selectedDate) {
            dispatch(setAppointmentDate(selectedDate))
        }
        navigation.navigate('chooseTime')    
    }

    
    const getNext15Days = () => {

        const now = new Date();
        const next15Days = [];

        for (let i = 1; i <= 15; i++) {
            const date = new Date(now);
            date.setDate(now.getDate() + i);
            
            const dayObject = {
                day:date.toLocaleDateString("en-GB",{day:"2-digit"}),
                month:date.toLocaleDateString("en-GB",{month:"short"}),
                weekdays:date.toLocaleDateString("en-GB",{weekday:"long"}),
                year:date.toLocaleDateString("en-GB",{year:"numeric"})
            }
            
            next15Days.push(dayObject);
        }

        setDays(next15Days)
    };



    useEffect(() => {
        getNext15Days()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader header={"Choose Date"} />
            <CustomProgressBar totalStep={4} currentStep={2} />
            <DoctorInfo doctorName='Dr Prema' specialist='Male-Female Infertility' selectedOption='Chat Consultation - Free' />
            <View style={styles.subContainer}>
                <Text style={styles.primaryText}>Pick Appointment Date</Text>
            </View>
            <FlatList numColumns={3} columnWrapperStyle={styles.columnWrapper} data={days} renderItem={({item}) => <CustomItem type="date" date={item} handlePress={setSelectedDate}  active={JSON.stringify(selectedDate) == JSON.stringify(item)} />} />
            <SelectedInfo date={ selectedDate ? (selectedDate?.day + " " + selectedDate?.month) : undefined} />
            <CustomButton disabled={selectedDate ? false : true} text='Confirm Date' onPress={() => handleSubmit()} />
        </SafeAreaView>
    )
}


export default ChooseDateScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    primaryText: {
        fontFamily: "Nunito600",
        fontSize: 14
    },
    subContainer: {
        paddingHorizontal: 16,
        marginVertical: 12
    },
    
    columnWrapper:{
        marginHorizontal:16,
        justifyContent:"space-between",
        marginVertical:12

    }
})
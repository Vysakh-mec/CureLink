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

type DateObject = {
    day:string,
    month:string,
    weekdays:string
}

const ChooseDateScreen = () => {

    const [days, setDays] = useState<DateObject[]>([])
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    const getNext15Days = () => {

        const now = new Date();
        const next15Days = [];

        for (let i = 1; i <= 15; i++) {
            const date = new Date(now);
            date.setDate(now.getDate() + i);
            
            const dayObject = {
                day:date.toLocaleDateString("en-GB",{day:"2-digit"}),
                month:date.toLocaleDateString("en-GB",{month:"short"}),
                weekdays:date.toLocaleDateString("en-GB",{weekday:"long"})
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
            <FlatList numColumns={3} columnWrapperStyle={styles.columnWrapper} data={days} renderItem={({item}) => <CustomItem mainText={item.day+" "+item.month} subText={item.weekdays} />} />
            <CustomButton text='Confirm Date' onPress={() => navigation.navigate("chooseTime")} />
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
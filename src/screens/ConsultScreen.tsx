import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import FilterIcon from "../../assets/icons/FilterIcon.svg"
import DoctorListItem from '../components/DoctorListItem'

const ConsultScreen = () => {

    const app_url = process.env.EXPO_PUBLIC_API_URL
    const [doctorData, setDoctorData] = useState([])

    useEffect(() => {
        fetch(`${app_url}/doctors`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(error => {
                console.log(error.message)
            })
    })


    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader header="Consult" />
            <View style={styles.filterContainer}>
                <ScrollView horizontal>
                    <FilterItem />
                    <FilterItem />
                    
                </ScrollView>
                <TouchableOpacity style={styles.filterButton}>
                    <FilterIcon />
                    <Text style={styles.filterButtonText}>Filter</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={[0,1,2,3,4,5,6,7]} renderItem={({item}) => <DoctorListItem id={item}  />} keyExtractor={(item,index) => index.toString()} />
        </SafeAreaView>
    )
}

export default ConsultScreen

const FilterItem = () => {
    return (
        <View style={styles.filterItemContainer}>
            <Text style={styles.filterItemText}>PCOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    filterContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
        columnGap: 10
    },
    filterItemContainer: {
        backgroundColor: "#3A643C",
        marginRight: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 13
    },
    filterButton: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        paddingVertical: 10
    },
    filterButtonText: {
        fontFamily: "Nunito500",
        fontSize: 14
    },
    filterItemText: {
        color: "white",
        fontFamily: "Nunito500",
        fontSize: 14
    }
})
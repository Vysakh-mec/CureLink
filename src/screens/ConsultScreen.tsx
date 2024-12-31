import { ActivityIndicator, Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import FilterIcon from "../../assets/icons/FilterIcon.svg"
import DoctorListItem from '../components/DoctorListItem'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import { DoctorDetails } from '../constant/types'
import Color from '../constant/Color'

const ConsultScreen = () => {

    const API_URL = process.env.EXPO_PUBLIC_API_URL
    const [filteredDoctorData , setFilteredDoctorData] = useState<DoctorDetails[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const concern = useSelector((state:RootState) => state.booking.concern)

    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/doctors`)
          .then((response) => response.json())
          .then((data) => {
            if (concern) {
              setFilteredDoctorData(data.filter((doctor:DoctorDetails) => doctor.specializes_in.includes(concern)));
            } else {
              setFilteredDoctorData(data);
            }
            setLoading(false);
          })
          .catch((error) => {
            Alert.alert("Something went wrong!",error.message)
            setLoading(false);
          });
      }, [API_URL, concern]);

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader header="Consult" />
            <View style={styles.filterContainer}>
                <ScrollView horizontal>
                    {
                        concern ? 
                        <FilterItem text={concern} />        
                        : null
                    }
                    <FilterItem text='Video Consultation' />
                              
                </ScrollView>
                <TouchableOpacity style={styles.filterButton}>
                    <FilterIcon />
                    <Text style={styles.filterButtonText}>Filter</Text>
                </TouchableOpacity>
            </View>
            {
                loading ? 
                <ActivityIndicator size={30} color={Color.primaryColor} />
                :
                <FlatList data={filteredDoctorData} renderItem={({item}) => <DoctorListItem details={item}  />} keyExtractor={(item,index) => index.toString()} />
            }
        </SafeAreaView>
    )
}

export default ConsultScreen

type FilterItemProps = {
    text:string
}


const FilterItem = ({text}:FilterItemProps) => {
    return (
        <View style={styles.filterItemContainer}>
            <Text style={styles.filterItemText}>{text}</Text>
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
        backgroundColor: Color.primaryColor,
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
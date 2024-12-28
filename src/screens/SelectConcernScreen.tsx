import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchIcon from "../../assets/icons/SearchIcon.svg"
import Hypertension from "../../assets/icons/HyperTension.svg"
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import CustomButton from '../components/CustomButton'
import { iconMap } from '../constant/IconsMap'
import { useDispatch } from 'react-redux'
import { setConcern } from '../redux/slices/bookingSlice'

type ConcernListProp =  {
    category:string,
    concerns:ConcernDetail[],
    handlePress:(concern: string) => void,
    selectedConcern:string | null
}

type ConcernDetail = {
    id:number,
    name:string,
    handleClick:Function,
    selectedConcern:string | null
}


const SelectConcernScreen = () => {

    const [concerns , setConcerns] = useState<ConcernListProp[]>([])
    const [loading , setLoading] = useState<Boolean>(false)
    const [selectedConcern , setSelectedConcern] = useState<string | null>(null)
    
    const api_url = process.env.EXPO_PUBLIC_API_URL
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const dispatch = useDispatch()
    
    const handleConcernSelection = () => {
        if (selectedConcern) {
            dispatch(setConcern(selectedConcern))
        }
        navigation.navigate("consult")
    }
    
    useEffect(() => {
        setLoading(true)
        fetch(`${api_url}/concerns`)
        .then((response) => response.json())
        .then((data) => {
            setLoading(false)
            setConcerns(data)
        }).catch((error) => {
            setLoading(false)
            console.log(error)
        })
    },[])

    
    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader header={"Select Concern"} />

            <View style={styles.subContainer}>
                <Text style={styles.labelText}>Please select your concern</Text>
                <View style={styles.inputContainer}>
                    <SearchIcon />
                    <TextInput placeholderTextColor={"#ACBAAC"} placeholder='Search for concern here' style={styles.input} />
                </View>
            </View>
                {
                    loading ? 
                    <ActivityIndicator size={50} color={"#3A643B"}  />
                :
                

                    <FlatList data={concerns} renderItem={({item}) => <ConcernList selectedConcern={selectedConcern} handlePress={setSelectedConcern} category={item.category} concerns={item.concerns} />} keyExtractor={(item,index) => index.toString()}  />
            }
                
            <CustomButton disabled={!selectedConcern ? true : false} text="Confirm Concern" onPress={() => handleConcernSelection()} />
                
        </SafeAreaView>
    )
}




const ConcernList = ({category,concerns,handlePress , selectedConcern} : ConcernListProp ) => {

    return (
        <View style={{marginBottom:20}}>
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>{category}</Text>
                {
                    category == "Top Concerns" ?
                        <Text style={styles.linkText}>View all</Text>
                        : null
                }
            </View>

            <FlatList numColumns={3} columnWrapperStyle={styles.columnWrapper} data={concerns} renderItem={({item}) => <CustomIcon selectedConcern={selectedConcern} handleClick={handlePress} name={item.name} id={item.id} />} />
            
        </View>
    )
}


const CustomIcon = ({id , name, handleClick , selectedConcern} : ConcernDetail) => {

    const IconComponent = iconMap[name]
    
    return(
        <TouchableOpacity onPress={() => handleClick(name)} style={styles.iconContainer}>
            <View style={[styles.iconWrapper, name == selectedConcern ? {borderColor:"#3A643B"} : null]}>
            {IconComponent ? <IconComponent  /> : <Hypertension />}
            </View>
            <Text style={styles.iconText}>{name}</Text>
        </TouchableOpacity>
    )
}


export default SelectConcernScreen


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    labelText: {
        fontSize: 14,
        fontFamily: "Nunito600",
        lineHeight: 20
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        paddingVertical: 8,
        backgroundColor: "#2E37A40D",
        paddingHorizontal: 10,
        marginVertical: 16,
        borderRadius: 12
    },
    input: {
        flex: 1
    },
    iconContainer:{
        alignItems:"center",
        rowGap:10,
        width:"33%",
    },
    categoryText:{
        fontSize:14,
        fontFamily:"Nunito400",
        marginHorizontal:6
    },
    categoryContainer:{
        flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:10
    },linkText:{
        fontFamily:"Nunito600",
        color:"#3A643C",
        marginRight:10
    },
    columnWrapper:{
        justifyContent:"flex-start",
        marginVertical:10
    },
    iconText:{
        fontSize:12,
        color:"#646665",
        fontFamily:"Nunito500"
    },
    iconWrapper:{
        borderWidth:2,
        borderColor:"white",
        borderRadius:999
    }
})
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchIcon from "../../assets/icons/SearchIcon.svg"
import Acne from "../../assets/icons/Acne.svg"
import Anxiety from "../../assets/icons/Anxiety.svg"
import Diabetes from "../../assets/icons/Diabetes.svg"
import Eczema from "../../assets/icons/Eczema.svg"
import Frostbite from "../../assets/icons/Frostbite.svg"
import Hypertension from "../../assets/icons/HyperTension.svg"
import Hypothermia from "../../assets/icons/Hypothermia.svg"
import Obesity from "../../assets/icons/Obesity.svg"
import PCOS from "../../assets/icons/PCOS.svg"
import Rubella from "../../assets/icons/Rubella.svg"
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import CustomButton from '../components/CustomButton'


type ConcernListProp =  {
    category:string,
    concerns:ConcernDetail[]
}

type ConcernDetail = {
    id:number,
    name:string,
}

const iconMap : {[key:string]:React.FC} =  {
    Acne: Acne,
    Anxiety: Anxiety,
    Diabetes: Diabetes,
    Eczema: Eczema,
    Frostbite: Frostbite,
    Hypertension: Hypertension,
    Hypothermia: Hypothermia,
    Obesity: Obesity,
    PCOS: PCOS,
    Rubella: Rubella,
}

const SelectConcernScreen = () => {

    const [concerns , setConcerns] = useState<ConcernListProp[]>([])
    const [loading , setLoading] = useState(false)
    const api_url = process.env.EXPO_PUBLIC_API_URL
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    
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
                
                    concerns.map((item,index) => <ConcernList category={item.category} concerns={item.concerns} key={index} />)
                    // REPLACE WITH FLATLIST
                    
                    // <FlatList numColumns={3} columnWrapperStyle={columnWrapper} data={concerns} renderItem={({item}) => <ConcernList category={item.category} concerns={item.concerns} />} keyExtractor={(item,index) => index.toString()}  />
            }
                
            <CustomButton text="Confirm Concern" onPress={() => navigation.navigate("consult")} />
                
        </SafeAreaView>
    )
}




const ConcernList = ({category,concerns} : ConcernListProp ) => {
    
    return(
        <View >
            <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{category}</Text>
            {
                category == "Top Concerns" ? 
                <Text style={styles.linkText}>View all</Text>
                : null
            }
            </View>
            <View style={styles.iconGrid}> 

            {
                concerns.map((item,index) => <CustomIcon id={item.id} name={item.name}   key={index}/>)
            }
            </View>
        </View>
    )
}


const CustomIcon = ({id , name} : ConcernDetail) => {

    const IconComponent = iconMap[name]
    
    return(
        <View style={styles.iconContainer}>
            {IconComponent ? <IconComponent  /> : <Hypertension />}
            <Text style={{textAlign:"center"}}>{name}</Text>
        </View>
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
    iconGrid:{
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap",
        marginVertical:24,
        rowGap:20,
    },
    iconContainer:{
        width:"30%",
        alignItems:"center",
        rowGap:10,
    },
    categoryText:{
        fontSize:14,
        fontFamily:"Nunito400",
        marginHorizontal:6
    },
    categoryContainer:{
        flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:6
    },linkText:{
        fontFamily:"Nunito600",
        color:"#3A643C",
        marginRight:10
    },
})
import { ActivityIndicator, Alert, FlatList, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import CustomProgressBar from '../components/CustomProgressBar'
import { iconMap } from '../constant/IconsMap'
import { Picker } from '@react-native-picker/picker'
import RadioActive from "../../assets/icons/RadioActive.svg"
import RadioInActive from "../../assets/icons/RadioInactive.svg"
import CustomButton from '../components/CustomButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import { setMedicalProgress } from '../redux/slices/bookingSlice'
import Color from '../constant/Color'



const ConcernDetailScreen = () => {


    const dispatch = useDispatch()
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const API_URL = process.env.EXPO_PUBLIC_API_URL 

    const ApplicationID = useSelector((state: RootState) => state.booking.applicatiionID)
    const concern = useSelector((state: RootState) => state.booking.concern)

    const level = ["Mild", "Moderate", "Severe"]
    const long = ["Days", "Weeks", "Months", "Year"]



    const [pickerValue, setPickerValue] = useState(6)
    const [radio, setRadio] = useState("Days")
    const [selectedLevel, setSelectedLevel] = useState("Mild")
    const [loading , setLoading] = useState(false) 

    const handleSubmit = async () => {
        if (loading) {
            return
        }
        const obj = {
            medicalProgress:1,
            severity:selectedLevel,
            facingDuration:pickerValue+" "+radio
        }

        try {
            setLoading(true)
            const response = await fetch(API_URL + "/appointments/" + ApplicationID, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })

            if (response.ok) {
                navigation.navigate("brieflyDescribe")
                dispatch(setMedicalProgress(1))

            } else {
                Alert.alert("Something went wrong!", "Unable to update the details")
            }
        } catch (error) {
            Alert.alert("Something went wrong!", (error as Error).message)
        } finally {
            setLoading(false)
        }
        
    }

    let IconComponent;
    if (concern) {
        IconComponent = iconMap[concern]
    } else {
        IconComponent = iconMap["HyperTension"]
    }

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader header='Your Concern' />
            <CustomProgressBar currentStep={1} totalStep={3} />
            <ScrollView>
                <View style={styles.subContainer}>
                    <Text style={styles.primaryText}>Your Concern</Text>
                    <View style={styles.iconContainer}>
                        {IconComponent ?
                            <IconComponent height={35} width={35} />
                            : null
                        }
                        <Text style={styles.labelText}>{concern}</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.primaryText}>Select severity of your concern</Text>
                    <View style={styles.rowContainer}>
                        {
                            level.map((item, index) => <CustomIcon selectedLevel={selectedLevel} handlePress={setSelectedLevel} name={item} key={index} />)
                        }
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.primaryText}>How long have you been facing?</Text>
                    <View style={styles.pickerContainer}>
                        <Picker selectedValue={pickerValue} onValueChange={(value) => setPickerValue(value)}>
                            {
                                Array.from({ length: 30 }).map((item, index) => <Picker.Item value={index + 1} label={(index + 1).toString()} key={index} />)
                            }
                        </Picker>
                    </View>
                    <View style={styles.rowContainer}>
                        {
                            long.map((item, index) => <CustomRadio handlePress={setRadio} activeRadio={radio} radioText={item} key={index} />)
                        }
                    </View>
                </View>
            </ScrollView>
            {
                loading && 
                <Modal transparent statusBarTranslucent>
                    <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.5)",alignItems:"center",justifyContent:"center"}}>
                        <View style={{padding:30,backgroundColor:"white",borderRadius:20}}>
                        <ActivityIndicator size={30} color={Color.primaryColor} />
                        </View>
                    </View>
                </Modal>
                
            }
            <CustomButton text="I'll fill later" containerStyle={{ backgroundColor: "white" }} labelStyle={{ color: "#B4B4B4" }} onPress={() => navigation.navigate("skipScreen")} />
            <CustomButton text='Proceed' onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default ConcernDetailScreen

type CustomIconProp = {
    name: string,
    selectedLevel: string,
    handlePress: (string: string) => void
}

const CustomIcon = ({ name, selectedLevel, handlePress }: CustomIconProp) => {
    const IconComponent = iconMap[name]
    return (
        <TouchableOpacity onPress={() => handlePress(name)} style={styles.iconComponentContainer}>
            {
                IconComponent ? <View style={[{ padding: 5 , borderWidth:3,borderColor:"white" }, selectedLevel == name ? styles.activeIcon : null]}><IconComponent /></View> : null
            }
            <Text style={styles.iconText}>{name}</Text>
        </TouchableOpacity>
    )
}

type CustomRadioProp = {
    radioText: string,
    handlePress: (string: string) => void,
    activeRadio: string
}
const CustomRadio = ({ radioText, handlePress, activeRadio }: CustomRadioProp) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => handlePress(radioText)} style={styles.radioWrapper}>
            {
                activeRadio == radioText ?
                    <RadioActive />
                    : <RadioInActive />
            }
            <Text style={styles.radioText}>{radioText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        margin: 16,

    },
    primaryText: {
        fontSize: 14,
        fontFamily: "Nunito600"
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#E2E2E2",
        marginVertical: 10,
        maxWidth: 200
    },
    labelText: {
        color: "#E2E2E2",
        fontSize: 16,
        fontFamily: "Nunito600"
    },
    iconComponentContainer: {
        margin: 10,
        padding: 10,
        rowGap: 10
    },
    iconText: {
        fontSize: 12,
        fontFamily: "Nunito500",
        textAlign: "center",
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 1
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#CED8E0",
        marginVertical: 16,
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    radioText: {
        fontSize: 14,
        fontFamily: "Nunito500"
    },
    radioWrapper: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10
    },
    activeIcon: {
        borderWidth: 3,
        borderColor: "#3A643C",
        borderRadius: 999
    }
})
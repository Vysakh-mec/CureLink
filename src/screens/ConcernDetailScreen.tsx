import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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



const ConcernDetailScreen = () => {
    const level = ["Mild", "Moderate", "Severe"]
    const long = ["Days", "Weeks", "Months", "Year"]
    const IconComponent = iconMap["HyperTension"]
    const [pickerValue, setPickerValue] = useState(6)
    const [radio, setRadio] = useState("Days")
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

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
                        <Text style={styles.labelText}>HyperTension</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.primaryText}>Select severity of your concern</Text>
                    <View style={styles.rowContainer}>
                        {
                            level.map((item, index) => <CustomIcon name={item} key={index} />)
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
            <CustomButton text="I'll fill later"  containerStyle={{ backgroundColor: "white" }} labelStyle={{ color: "#B4B4B4" }} onPress={() => navigation.navigate("skipScreen")} />
            <CustomButton text='Proceed' onPress={() => { }} />
        </SafeAreaView>
    )
}

export default ConcernDetailScreen

type CustomIconProp = {
    name: string
}

const CustomIcon = ({ name }: CustomIconProp) => {
    const IconComponent = iconMap[name]
    return (
        <TouchableOpacity style={styles.iconComponentContainer}>
            {
                IconComponent ? <IconComponent /> : null
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
        width: "50%",
        marginVertical: 10
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
    }
})
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchIcon from "../../assets/icons/SearchIcon.svg"

const SelectConcernScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader />
            <View style={styles.subContainer}>
                <Text style={styles.labelText}>Please select your concern</Text>
                <View style={styles.inputContainer}>
                    <SearchIcon />
                    <TextInput placeholderTextColor={"#ACBAAC"} placeholder='Search for concern here' style={styles.input} />
                </View>
            </View>
            
        </SafeAreaView>
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
    }
})
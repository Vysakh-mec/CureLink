import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HonestyIcon from "../../assets/icons/HonestyIcon.svg";
import CustomButton from '../components/CustomButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/type';

const SkipScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.headerText}>Appointment Successfully Booked </Text>

                <Image source={{ uri: "https://picsum.photos/200/300?random=1" }} style={styles.image} />
                <Text style={styles.primaryText}>Dr. Prerna</Text>
                <Text style={styles.secondaryText}>Video Consultation - 800 (paid)</Text>

            </View>
            <View style={styles.iconContainer}>
                <HonestyIcon />
                <Text style={styles.secondaryHeaderText}>We understand your concern in skipping these step.</Text>
                <Text style={styles.linkText}>If you ever feel ready, you can always provide this information to help Doctor improve your care.</Text>
            </View>
            <CustomButton onPress={() => {}} text='Continue Uploading' labelStyle={{color:"#3A643C"}} containerStyle={{backgroundColor:"white"}} />
            <CustomButton onPress={() => navigation.navigate("myBooking")} text='View My Appoinments' />
        </SafeAreaView>
    )
}

export default SkipScreen

const styles = StyleSheet.create({
    image: {
        height: 50,
        aspectRatio: 1 / 1,
        resizeMode: "cover",
        borderRadius: 20
    },
    primaryText: {
        fontSize: 16,
        fontFamily: "Nunito600"
    },
    headerText: {
        fontSize: 24,
        fontFamily: "Nunito600",
        textAlign: "center"
    },
    container: {
        flex: 1
    },
    subContainer: {
        alignItems: "center",
        marginTop: 50,
        rowGap: 20,
        paddingHorizontal: 20
    },
    secondaryText: {
        fontSize: 14,
        fontFamily: "Nunito400",
        color: "#646665"
    },
    secondaryHeaderText: {
        fontSize: 14,
        fontFamily: "Nunito600",
        textAlign: "center"
    },
    linkText: {
        fontSize: 14,
        fontFamily: "Nunito500",
        color: "#3A643C",
        textAlign: "center",
        marginTop: 30,
    },
    iconContainer: {
        alignItems: "center",
        marginTop: 50,
        rowGap: 10,
        flex: 1,
        paddingHorizontal: 20
    }

})
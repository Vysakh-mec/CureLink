import React from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomHeader from "../components/CustomHeader"
import BulletIcon from "../../assets/icons/BulletIcon.svg"
import ReviewItem from "../components/ReviewItem"
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { RootStackParamList } from "../navigation/type"
import CustomButton from "../components/CustomButton"
import { DoctorDetails } from "../constant/types"
import { iconMap } from "../constant/IconsMap"
import { useDispatch } from "react-redux"
import { setDoctor } from "../redux/slices/bookingSlice"
import Color from "../constant/Color"

const DoctorDetailScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const route = useRoute<RouteProp<{ params: DoctorDetails }, "params">>()
    const details = route.params
    const dispatch = useDispatch()

    const handleBookConsultation = () => {
        let obj = {
            name: details.name,
            specialist: details.specialist,
            video_consultation_fee: details.video_consultation_fee,
        }
        dispatch(setDoctor(obj))
        navigation.navigate("chooseConsultation")
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <CustomHeader />

                <View style={styles.miniContainer}>
                    <Image source={{
                        uri: "https://picsum.photos/200/300?random=1"
                    }} style={styles.image} />
                    <Text style={styles.titleText}>{details.name}</Text>
                    <Text style={styles.secondaryTitleText}>{details.specialist}</Text>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.rowMiniContainer}>
                        <Text style={styles.rowText}>{details.followers}</Text>
                        <Text style={styles.rowSubText}>Followers</Text>
                    </View>

                    <View style={styles.rowMiniContainer}>
                        <Text style={styles.rowText}>{details.experience}</Text>
                        <Text style={styles.rowSubText}>Experience</Text>
                    </View>

                    <View style={styles.rowMiniContainer}>
                        <Text style={styles.rowText}>{details.rating}</Text>
                        <Text style={styles.rowSubText}>Rating</Text>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <Text style={styles.primaryText}>Bio</Text>
                    <View style={styles.customContainer}>
                        <Text style={styles.secondaryText}>
                            {details.bio}
                        </Text>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <Text style={styles.primaryText}>Specializes in</Text>
                    <ScrollView horizontal>
                        {
                            details.specializes_in.map((item, index) => <CustomIcon key={index} name={item} />)
                        }
                    </ScrollView>
                </View>

                <View style={styles.subContainer}>
                    <BulletHeader text={"Reviews and Ratings"} />
                    <View style={styles.customContainer}>
                        {
                            details.reviews.map((item, index) => <ReviewItem key={index} review={item} />)
                        }
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <BulletHeader text={"Work Experiences"} />

                    <View style={styles.customContainer}>
                        {
                            details.work_experience.map((item, index) => (
                                <Text key={index} style={styles.secondaryText}>{item.role + "\n" + item.clinic + "\n" + item.location}</Text>
                            ))
                        }
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <BulletHeader text="Academics" />
                    <View style={styles.customContainer}>
                        {
                            details.academics.map((item, index) => (
                                <Text key={index} style={styles.secondaryText}>{item.institution + "\n" + item.degree + "\n" + item.year}</Text>
                            ))
                        }
                    </View>
                </View>

                <CustomButton text="Book Consultation" onPress={() => handleBookConsultation()} />
            </ScrollView>
        </SafeAreaView>
    )
}

type BulletHeaderProps = {
    text: string
}


const BulletHeader = ({ text }: BulletHeaderProps) => {
    return (
        <View style={styles.bulletContainer}>
            <BulletIcon />
            <Text style={styles.primaryText}>{text}</Text>
        </View>
    )
}

type CustomIconProps = {
    name: string
}


const CustomIcon = ({ name }: CustomIconProps) => {

    const IconComponent = iconMap[name]

    return (
        <View style={styles.iconContainer}>
            {
                IconComponent ? <IconComponent height={50} width={50} /> : null
            }
        </View>
    )
}

export default DoctorDetailScreen;


const styles = StyleSheet.create({
    image: {
        height: 140,
        aspectRatio: 1 / 1,
        resizeMode: "cover",
        borderRadius: 20,
        marginTop: -60
    },
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    miniContainer: {
        alignItems: "center",
        rowGap: 5
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 30,
        marginHorizontal: 25,

    },
    titleText: {
        fontSize: 28,
        fontFamily: "Nunito600",
    },
    secondaryTitleText: {
        fontSize: 16,
        fontFamily: "Nunito400",
        color: Color.secondaryTextColor
    },
    rowText: {
        fontSize: 20,
        fontFamily: "Nunito600",
        textAlign: "center"
    },
    rowSubText: {
        fontSize: 14,
        fontFamily: "Nunito400",
        textAlign: "center"
    },
    primaryHeaderText: {
        fontSize: 16,
        fontFamily: "Nunito600"
    },
    primaryText: {
        fontSize: 16,
        fontFamily: "Nunito600"
    },
    rowMiniContainer: {
        rowGap: 4
    },
    subContainer: {
        marginHorizontal: 16,
        marginVertical: 25,
        rowGap: 12
    },
    secondaryText: {
        fontSize: 16,
        fontFamily: "Nunito400",
    },
    customContainer: {
        backgroundColor: "#FAFAFA",
        padding: 12,
        borderRadius: 16
    },
    bulletContainer: {
        flexDirection: "row",
        columnGap: 10,
        alignItems: "center"
    },
    iconContainer: {
        height: 64,
        width: 64,
        marginRight: 16,
        backgroundColor: Color.secondaryGreen,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center"
    }
})
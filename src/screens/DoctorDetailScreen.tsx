import React from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomHeader from "../components/CustomHeader"
import BulletIcon from "../../assets/icons/BulletIcon.svg"
import ReviewItem from "../components/ReviewItem"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../navigation/type"
import CustomButton from "../components/CustomButton"

const DoctorDetailScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <CustomHeader />

                <View style={styles.miniContainer}>
                    <Image source={{
                        uri: "https://picsum.photos/200/300?random=1"
                    }} style={styles.image} />
                    <Text style={styles.titleText}>Dr Prema</Text>
                    <Text style={styles.secondaryTitleText}>Male-Female Infertility</Text>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.rowMiniContainer}>
                        <Text style={styles.rowText}>3</Text>
                        <Text style={styles.rowSubText}>Followers</Text>
                    </View>

                    <View style={styles.rowMiniContainer}>
                        <Text style={styles.rowText}>7 years</Text>
                        <Text style={styles.rowSubText}>Experience</Text>
                    </View>

                    <View style={styles.rowMiniContainer}>
                        <Text style={styles.rowText}>4.8</Text>
                        <Text style={styles.rowSubText}>Rating</Text>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <Text style={styles.primaryText}>Bio</Text>
                    <View style={styles.customContainer}>
                        <Text style={styles.secondaryText}>
                            Ideal Ayurveda mart {"\n"}
                            Ayurvedic Clinic {"\n"}
                            Mahesh Nagar Ambala{"\n"}
                            Ayurveda consultant (running the whole clinic, opd, management)
                        </Text>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <Text style={styles.primaryText}>Specializes in</Text>
                    <ScrollView horizontal>
                        <View style={{ height: 64, width: 64, marginRight: 16, backgroundColor: "#EAF2EA", borderRadius: 16 }}>
                        </View>
                        <View style={{ height: 64, width: 64, marginRight: 16, backgroundColor: "#EAF2EA", borderRadius: 16 }}>
                        </View>
                        <View style={{ height: 64, width: 64, marginRight: 16, backgroundColor: "#EAF2EA", borderRadius: 16 }}>
                        </View>
                        <View style={{ height: 64, width: 64, marginRight: 16, backgroundColor: "#EAF2EA", borderRadius: 16 }}>
                        </View>
                        <View style={{ height: 64, width: 64, marginRight: 16, backgroundColor: "#EAF2EA", borderRadius: 16 }}>
                        </View>
                        <View style={{ height: 64, width: 64, marginRight: 16, backgroundColor: "#EAF2EA", borderRadius: 16 }}>
                        </View>
                        <View style={{ height: 64, width: 64, marginRight: 16, backgroundColor: "#EAF2EA", borderRadius: 16 }}>
                        </View>
                        <View style={{ height: 64, width: 64, marginRight: 16, backgroundColor: "#EAF2EA", borderRadius: 16 }}>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.subContainer}>
                    <BulletHeader text={"Reviews and Ratings"} />

                    <View style={styles.customContainer}>
                        <ReviewItem />
                    </View>
                    <View style={styles.customContainer}>
                        <ReviewItem />
                    </View>
                    <View style={styles.customContainer}>
                        <ReviewItem />
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <BulletHeader text={"Work Experiences"}/>

                    <View style={styles.customContainer}>
                        <Text style={styles.secondaryText}>Endocrinologist {"\n"}EndoCare Center{"\n"}Uptown</Text>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <BulletHeader text="Academics" />
                    <View style={styles.customContainer}>
                    <Text style={styles.secondaryText}>Harvard Medical School {"\n"}MD in Endocrinology{"\n"}2012</Text>
                    </View>
                </View>

                <CustomButton text="Book Consultation" onPress={() => navigation.navigate("chooseConsultation")} />
            </ScrollView>
        </SafeAreaView>
    )
}

type BulletHeaderProps = {
    text:string
}


const BulletHeader = ({text}:BulletHeaderProps) => {
    return (
        <View style={styles.bulletContainer}>
            <BulletIcon />
            <Text style={styles.primaryText}>{text}</Text>
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
        color: "#646665"
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
    bulletContainer:{ 
        flexDirection: "row", 
        columnGap: 10, 
        alignItems: "center" 
    },
})
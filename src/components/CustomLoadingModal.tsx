import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomLoadingModal = () => {
    return (
        <View>
            <Modal transparent statusBarTranslucent>
                <View style={styles.subContainer}>
                    <View style={styles.miniContainer}>
                        <ActivityIndicator size={30} color={"#3A643B"} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default CustomLoadingModal

const styles = StyleSheet.create({
    subContainer:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.5)",
        alignItems:"center",
        justifyContent:"center"
    },
    miniContainer:{
        padding:30,
        borderRadius:16,
        backgroundColor:"white"
    }
})
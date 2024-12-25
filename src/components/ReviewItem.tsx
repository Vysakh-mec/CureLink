import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StarIcon from "../../assets/icons/StarIcon.svg"

const ReviewItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.starContainer}>
            {
                [1,2,3,4,5].map((item,index) => <StarIcon key={index}  />)
            }
      </View>
      <Text style={styles.primaryText}>
      Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods
      </Text>
      <Text style={styles.secondaryText}>Sabarinath J ● 20 january 2023</Text>
    </View>
  )
}

export default ReviewItem

const styles = StyleSheet.create({
    container:{
        rowGap:10
    },
    starContainer:{
        flexDirection:"row",
        alignItems:"center",
        columnGap:2
    },
    primaryText:{
        fontSize:16,
        fontFamily:"Nunito400",
        letterSpacing:-1,
        
    },
    secondaryText:{
        fontSize:12,
        fontFamily:"Nunito400",
        color:"#646665"
    }
})
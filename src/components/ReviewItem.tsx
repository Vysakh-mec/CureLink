import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StarIcon from "../../assets/icons/StarIcon.svg"
import { Review } from '../constant/types'

type ReviewItemProps = {
  review:Review
}

const ReviewItem = ({review}:ReviewItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.starContainer}>
            {
                Array.from({length:review.star}).map((item,index) => <StarIcon key={index}  />)
            }
      </View>
      <Text style={styles.primaryText}>{review.content}</Text>
      <Text style={styles.secondaryText}>{review.postedName} ● {review.date} </Text>
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
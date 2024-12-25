import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'

const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  useEffect(() => {
    navigation.navigate("selectConcern")
  },[])
  
  
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
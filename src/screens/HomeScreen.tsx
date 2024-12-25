import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  useEffect(() => {
    navigation.navigate("selectConcern")
  },[])
  
  
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
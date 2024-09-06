import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View> 
      <Text>RootLayout</Text> 
      <Link href="index">Go back to home</Link>
    </View>
  )
}


export default RootLayout
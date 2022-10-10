import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Mytodolist from './Todolist/Index'

const App = () => {
  return (
    <View style={{backgroundColor:'yellow',flex:1}}>
      
      <Mytodolist/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
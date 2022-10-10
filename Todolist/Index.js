import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import MesTaches from './components/MesTaches'
import { Taches } from '../datas/Taches'


const Index = () => {

    
        
    

  return (
    <View style={styles.todolist}>
      <Text>Mytodolist</Text>
      <MesTaches/>

            <FlatList

                data={Taches}
                renderItem={({item}) => <MesTaches item={item}/>}
                keyExtractor={item => item.id}
            
            />

    </View>
  )

   

}

export default Index

const styles = StyleSheet.create({

    todolist:{
        backgroundColor :'red',
        

    }
    
})
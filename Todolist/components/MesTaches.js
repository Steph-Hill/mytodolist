import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MesTaches = ({item}) => {

    console.log('Mes item :',item)
  
 /*  if (item === undefined) {
    return (<Text>Voici Mes Nouvelles Taches :</Text>);
  }else{ */
    
  return (
    <View style={styles.tachesContent}>

{item&&<Text>{item.nom}</Text> /*affiche que les item et pas le undefinded*/} 

    </View>
  )
 /*  } */

}

export default MesTaches

const styles = StyleSheet.create({

    tachesContent:{
        backgroundColor:'orange'
    }
})
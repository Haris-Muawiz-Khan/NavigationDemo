import React from 'react'
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity style={styles.timer} onPress={()=> navigation.navigate('Pomodor Timer')}>
          <MaterialCommunityIcons name='timer-outline' size={60} color={'white'}/>
          <Text style={{color: 'white'}}>Pomodor Timer</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  timer: {
    display: 'flex',
    width: '40%',
    height: 100,
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: '#1C3879',
    marginTop: 25,
    marginHorizontal: '5%',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  }
})

export default HomeScreen
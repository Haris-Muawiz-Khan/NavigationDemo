import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import TodoApp from './TodoApp'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <TodoApp navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen
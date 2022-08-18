import { SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddTodo = ({ navigation }) => {
  const [text, setText] = useState('')
  const [check, setCheck] = useState(false)

  function handleSubmit() {
    if (text.length > 0) {
      navigation.navigate('Todo APP', {params:{ text: text, check: check }})
    }
    else {
      Alert.alert(
        "Empty Todo",
        "Please enter a Todo to add it to the todo list.",
        [
          {
            text: "OK"
          }
        ],
        {
          cancelable: true,
        }
      );
    }
  }

  let bouncyCheckboxRef = BouncyCheckbox;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={()=> {
        navigation.navigate('Todo APP')
        }} 
        style={styles.backButton}>
        <MaterialCommunityIcons name='home' color={'black'} size={30} />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text>Todo: </Text>
        <TextInput
          style={styles.input}
          placeholder="What do you wnat to do?"
          keyboardType="default"
          onChangeText={textTodo => setText(textTodo)}
          value={text}
          autoCapitalize
          autoCorrect={true}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{marginRight: 10}}>Check Status</Text>
        <BouncyCheckbox
          ref={(ref) => (bouncyCheckboxRef = ref)}
          fillColor={'#34eb83'}
          unfillColor={'white'}
          isChecked={check}
          onPress={() => setCheck(prevState => !prevState)}
          disableText
        />
        <TouchableOpacity 
        style={styles.submit}
        onPress={handleSubmit}
        >
          <Text style={{fontWeight: 'bold'}}>ADD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: 250,
    textAlign: 'left',
    padding:5,
    fontSize: 14,
    fontFamily: 'Roboto',
    borderRadius: 5,
  },
  submit: {
    backgroundColor: '#34eb83',
    marginLeft: 90,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: 'rgb(245, 245, 245)',
    position: 'absolute',
    top: 5,
    left: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default AddTodo
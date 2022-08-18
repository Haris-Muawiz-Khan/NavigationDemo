import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button, View, StyleSheet } from 'react-native';

const CheckBox = (props) => {
    let bouncyCheckboxRef = BouncyCheckbox;
  return (
    <View style={styles.todoContainer}>
        <BouncyCheckbox
            ref={(ref) => (bouncyCheckboxRef = ref)}
            isChecked={props.isItChecked}
            text={props.text}
        />
        <View style={styles.button}>
            <Button 
            title='Delete' 
            onPress={() => props.handleDelete(props.id)}
            color={'#FF1E00'}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    todoContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        marginLeft: '5%',
        marginRight: '5%',
        height: 70,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        marginVertical: 10,
    },
    button: {
        marginLeft: 'auto',
    },
})

export default CheckBox
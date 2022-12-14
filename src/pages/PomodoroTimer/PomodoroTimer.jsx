import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Alert, Vibration } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App({navigation}) {
  const [start, setStart] = useState(false)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [breakMinutes, setBreakMinutes] = useState(0)
  const [breakSeconds, setBreakSeconds] = useState(0)
  const [totalSecs, setTotalSecs] = useState(0)
  const [workOrBreak, setWorkOrBreak] = useState(true)

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      if (start) {
        function tick() {
          savedCallback.current();
        }
        if (delay !== null) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
      }
    }, [delay, start]);
  }

  const intervalId = useInterval(() => {
    if (start && totalSecs != 0) {
      setTotalSecs(prevCount => --prevCount)
    } else {
      if (totalSecs === 0 && start) {
        setTotalSecs(prevCount => --prevCount)
        setWorkOrBreak(prevState => !prevState)

        Vibration.vibrate();

        if (workOrBreak) {
          setTotalSecs(() => parseInt(minutes * 60) + parseInt(seconds))
        } else {
          setTotalSecs(() => parseInt(breakMinutes * 60) + parseInt(breakSeconds))
        }
      }
    }
  }, 1000);

  function onPress() {
    if ((minutes === 0 && seconds === 0) || (breakMinutes === 0 && breakSeconds === 0)) {
      Alert.alert(
        "Time not set",
        "You need to enter the time for the timer to work.",
        [
          {
            text: "Got It!",
            style: ' borderColor: blue; backgroundColor: blue: borderWidth=1px; borderRadius=5px; textColor=white;'
          }
        ],
        {
          cancelable: true,
        }
      )
    } else {
      setStart(prevState => !prevState)
    }
  }

  function resetCount() {
    setStart(false)
    setTotalSecs(0)
    setMinutes(0)
    setSeconds(0)
    setBreakMinutes(0)
    setBreakSeconds(0)
    setWorkOrBreak(true)
  }

  return (
    <KeyboardAwareScrollView>
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={()=> {
        setStart(false)
        navigation.navigate('Home')
        }} style={styles.backButton}>
        <MaterialCommunityIcons name='home' color={'black'} size={30} />
      </TouchableOpacity>
      <Text style={{ fontWeight: 'bold', fontSize: 50, marginTop: 10, marginBottom: 10}}>
        {workOrBreak ? 'Break' : 'Work'} Timer
      </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 50, }}>
        {Math.floor(totalSecs / 60).toString().padStart(2, '0')} : {Math.floor(totalSecs % 60).toString().padStart(2, '0')}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.textColor}>{start ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={resetCount}
        >
          <Text style={styles.textColor}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <Text style={{ fontWeight: 'bold', marginLeft: '30%' }}>Work Time</Text>
          <View style={styles.minInputs}>
            <Text>Minutes: </Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={mins => setMinutes(mins)}
              textAlign="center"
              value={minutes.toString()}
            />
          </View>
          <View style={styles.minInputs}>
            <Text>Seconds: </Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={secs => setSeconds(secs)}
              textAlign="center"
              value={seconds.toString()}
            />
          </View>
          <Text style={{ fontWeight: 'bold', marginLeft: '30%' }}>Break Time</Text>
          <View style={styles.minInputs}>
            <Text>Minutes: </Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              textAlign="center"
              onChangeText={min => setBreakMinutes(min)}
              value={breakMinutes.toString()}
            />
          </View>
          <View style={styles.minInputs}>
            <Text>Seconds: </Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              textAlign="center"
              onChangeText={sec => setBreakSeconds(sec)}
              value={breakSeconds.toString()}
            />
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingTop: 75,
    paddingBottom: 75,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#2E6DEB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5,
    backgroundColor: '#2E6DEB',
    borderRadius: 10,

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  textColor: {
    color: 'white',
  },
  resetTextColor: {
    color: '#2E6DEB',
    borderColor: '#2E6DEB',
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 5,
    minWidth: 100,
  },
  minInputs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 20,
    justifyContent: 'center',
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
});

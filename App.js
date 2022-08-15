import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/pages/HomeScreen';
import PomodorTimer from './src/pages/PomodorTimer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const Stack = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}
      >

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' color={color} size={size} />
          }}
        />
        <Stack.Screen
          name="Pomodor Timer"
          component={PomodorTimer}
          options={{
            tabBarLabel: 'Pomodor Timer',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='timer-outline' color={color} size={size} />
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

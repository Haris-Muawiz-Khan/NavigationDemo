import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/pages/HomeScreen';
import PomodorTimer from './src/pages/PomodoroTimer/PomodoroTimer'
import TodoApp from './src/pages/TodoApp/App'

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' color={color} size={size} />
          }}
        />
        <Tab.Screen
          name="Pomodor Timer"
          component={PomodorTimer}
          options={{
            tabBarLabel: 'Pomodor Timer',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='timer-outline' color={color} size={size} />
          }}
        />
        <Tab.Screen
          name="Todo App"
          component={TodoApp}
          options={{
            tabBarLabel: 'Todo App',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='check-circle' color={color} size={size} />
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

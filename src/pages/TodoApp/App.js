import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreenTodo'
import AddTodo from './AddTodo'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Todo APP" component={HomeScreen} />
      <Stack.Screen name="Add Todo" component={AddTodo} />
    </Stack.Navigator>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserData from './src/screens/UserData';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import About from './src/screens/About';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home' >

        {/* <Stack.Screen name='Home' component={Home}/> */}
        <Stack.Screen name='Home' options={{
          headerShown: false,
        }}>

          {(props) => <Home {...props} channelName={'{.Code }'} />}
        </Stack.Screen>

        {/* Other Screens */}

        <Stack.Screen name='Student' component={UserData} options={{
          headerTitle: 'Info',
          headerTitleAlign: 'center'

        }} />
        <Stack.Screen name='Contact' component={Contact} options={{
          headerTitle: 'Contact Us',
          headerTitleAlign: 'center'

        }} />
        <Stack.Screen name='Course' component={Course} options={{
          headerTitle: 'Courses',
          headerTitleAlign: 'center'

        }}/>
        <Stack.Screen name='About' component={About} options={{
          headerTitle: 'About',
          headerTitleAlign: 'center'

        }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

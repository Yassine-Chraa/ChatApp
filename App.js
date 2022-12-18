import react, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import auth, { firebase, FirebaseAuthTypes } from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './src/views/navigation/BottomNavigation';
import ChatRoomScreen from './src/views/screens/ChatRoomScreen';
import StatusScreen from './src/views/screens/StatusScreen';
import CallsScreen from './src/views/screens/CallsScreen';
import CameraScreen from './src/views/screens/CameraScreen';
import LoginScreen from './src/views/screens/LoginScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@rneui/base';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function signup() {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  if (!user) {
    return (
      <LoginScreen/>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomNavigation} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
        <Stack.Screen name="Status" component={StatusScreen} />
        <Stack.Screen name="Chats" component={CallsScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});

export default App;

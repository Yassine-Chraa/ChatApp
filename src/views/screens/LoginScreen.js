import react, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import colors from '../../const/colors';

const LoginScreen = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  function login() {
    const credential = auth.EmailAuthProvider.credential(
      email,
      password,
    );
    auth().signInWithCredential(credential);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{marginTop: 128}}>
        <View style={{marginBottom: 32}}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Login to your account</Text>
        </View>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text)=>{setEmail(text)}}/>
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={(text)=>setPassword(text)}/>
        <Button title="Login" onPress={() => login()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 12,
  },
  input: {
    backgroundColor: colors.special2,
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 12,
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default LoginScreen;

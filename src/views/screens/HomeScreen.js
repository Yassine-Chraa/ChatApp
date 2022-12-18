import {Button} from '@rneui/base';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../const/colors';


const HomeScreen = ({navigation}) => {
  const data = [
    {
      name: 'Yassine Chraa',
      profile: require('../../assets/images/person.jpg'),
      lastMessage: {
        text: 'Slm',
        date: '14:20',
      },
    },
    {
      name: 'User 1',
      profile: require('../../assets/images/person.jpg'),
      lastMessage: {
        text: 'Ok',
        date: '16:35',
      },
    },
  ];

  function logout() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{...styles.header, ...styles.marginConfig}}>
        <Text style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>
          Chats
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="more-horiz" size={24} />
          <Image style={styles.headerProfil} source={data[0].profile} />
        </View>
      </View>
      <View style={styles.marginConfig}>
        <TextInput style={styles.input} placeholder="Search" />
        <TouchableOpacity style={{position: 'absolute', top: 16, left: 12}}>
          <Icon name="search" size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        scrollEnabled
        showsVerticalScrollIndicator={false}
        style={{...styles.main, ...styles.marginConfig}}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ChatRoom')}>
              <View style={styles.chatItem}>
                <Image style={styles.profil} source={item.profile} />
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
                      {item.name}
                    </Text>
                    <Text>{item.lastMessage.date}</Text>
                  </View>
                  <Text style={{fontSize: 15}}>{item.lastMessage.text}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}></FlatList>
      <Button title="logout" onPress={() => logout()} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  marginConfig: {
    marginTop: 12,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerProfil: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginLeft: 8,
  },
  main: {
    marginTop: 48,
    marginBottom: 48,
    marginTop: 16,
    marginHorizontal: 16,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  profil: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  input: {
    backgroundColor: colors.special2,
    borderRadius: 18,
    paddingLeft: 40,
    paddingRight: 12,
  },
});

export default HomeScreen;

import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../const/colors';
const ChatRoomScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icon name="arrow-back" size={24} color={'#fff'}/>
          </TouchableOpacity>
          <Image
            style={styles.profil}
            source={require('../../assets/images/person.jpg')}
          />
        </View>
        <TouchableOpacity style={{flex: 2}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '600',
            }}>
            Yassine Chraa
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <TouchableOpacity>
            <Icon name="video-call" size={24} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="call" size={24} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="more-vert" size={24} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require('../../assets/images/chat_bg1.png')}
        resizeMode="cover"
        style={{flex: 8}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingTop: 8,
              paddingHorizontal: 6,
            }}>
            <View style={styles.message}>
              <Text style={{fontSize: 16, color: '#000', marginBottom: -4}}>
                Slm
              </Text>
              <Text style={{fontSize: 14, marginLeft: 32}}>14:20</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingTop: 8,
              paddingHorizontal: 6,
            }}>
            <View style={{...styles.message, backgroundColor: '#fff'}}>
              <Text style={{fontSize: 16, color: '#000', marginBottom: -4}}>
                Cv
              </Text>
              <Text style={{fontSize: 14, marginLeft: 32}}>14:25</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            paddingHorizontal: 6,
            paddingBottom: 12,
          }}>
          <TextInput style={styles.input} placeholder="Message"></TextInput>
          <View style={{position: 'absolute', top: 16, left: 16}}>
            <TouchableOpacity style={{}}>
              <Icon name="mood" size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{paddingRight: 4, marginLeft: -64}}>
            <Icon name={'link'} size={24} color={colors.green} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name={'photo-camera'} size={24} color={colors.green} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name={'mic'}
              size={24}
              color={colors.green}
              style={styles.mic}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    fontSize: 18,
    paddingLeft: 40,
    paddingVertical: 10,
  },
  header: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.green,
    width: '100%',
    justifyContent: 'space-between',
  },
  profil: {
    height: 45,
    width: 45,
    borderRadius: 25,
    marginRight: 8,
    marginLeft: 4,
  },
  message: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 16,
    backgroundColor: colors.special2,
  },
  mic: {
    marginLeft: 20,
    backgroundColor: colors.green,
    borderRadius: 20,
    padding: 8,
    color: '#fff',
  },
});

export default ChatRoomScreen;

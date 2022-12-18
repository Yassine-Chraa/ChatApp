import {Icon} from '@rneui/base';
import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../const/colors';

const data = [
  {
    name: 'Yassine Chraa',
    profile: require('../../assets/images/person.jpg'),
    date: '14:20',
    type: 'outgoing',
    callType: 'voice call',
  },
  {
    name: 'User 1',
    profile: require('../../assets/images/person.jpg'),
    date: 'Yesterday, 16:35',
    type: 'incoming',
    callType: 'video',
  },
];
const CallsScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>
          Calls
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="more-vert" size={24} />
        </View>
      </View>
      <View style={styles.main}>
        <FlatList
          scrollEnabled
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.call}>
                <View style={styles.call}>
                  <Image style={styles.image} source={item.profile} />
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          color: '#000',
                        }}>
                        {item.name}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        {item.type == 'outgoing' ? (
                          <Icon
                            name="call-made"
                            color={colors.green}
                            size={17}
                            style={{marginRight: 4}}
                          />
                        ) : (
                          <Icon
                            name="call-received"
                            color={colors.green}
                            size={17}
                            style={{marginRight: 4}}
                          />
                        )}
                        <Text style={{fontSize: 16, fontWeight: '500'}}>
                          {item.date}
                        </Text>
                      </View>
                    </View>
                    {item.callType == 'video' ? (
                      <Icon name="videocam" size={22} color={colors.green} />
                    ) : (
                      <Icon name="call" size={22} color={colors.green} />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}></FlatList>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 12,
  },
  main: {
    marginTop: 32,
  },
  call: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 16,
  },
});

export default CallsScreen;

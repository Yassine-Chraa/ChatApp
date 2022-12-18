import {Icon} from '@rneui/base';
import * as React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../const/colors';
const StatusScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>
          Status
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="more-vert" size={24} />
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require('../../assets/images/person.jpg')}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              My status
            </Text>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              Tab to add status update
            </Text>
          </View>
          <TouchableOpacity style={styles.addIcon}>
            <Icon name="add" color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 24}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Viewed updated</Text>
          <View style={{...styles.row, marginTop: 24}}>
            <Image
              style={styles.image}
              source={require('../../assets/images/person.jpg')}
            />
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                Ahmed
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500'}}>
                Yesterday, 17:52
              </Text>
            </View>
          </View>
        </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  addIcon: {
    backgroundColor: colors.green,
    borderRadius: 20,
    position: 'absolute',
    left: 37,
    bottom: -3
  },
});

export default StatusScreen;

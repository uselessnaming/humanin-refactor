import {StyleSheet, View} from 'react-native';
import {BluetoothScreenNavigationProp} from '../types/navigationType';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import BluetoothList from '../components/BluetoothList';

interface Props {
  navigation: BluetoothScreenNavigationProp;
}

const BluetoothScreen: React.FC<Props> = ({navigation}) => {
  const list = [
    {
      name: '블루투스1',
      subTitle: '맥주소1',
    },
    {
      name: '블루투스2',
      subTitle: '맥주소2',
    },
    {
      name: '블루투스2',
      subTitle: '맥주소2',
    },
    {
      name: '블루투스2',
      subTitle: '맥주소2',
    },
    {
      name: '블루투스2',
      subTitle: '맥주소2',
    },
  ];
  const handleBluetoothPress = (address: string) => {
    navigation.push('Graph');
    console.log(address);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <BluetoothList
          title={'연결된 디바이스'}
          data={list}
          onPress={address => handleBluetoothPress(address)}
        />
        <BluetoothList
          title={'검색된 디바이스'}
          data={list}
          onPress={address => handleBluetoothPress(address)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  listContainer: {
    flex: 1,
    display: 'flex',
    rowGap: 16,
    margin: 16,
  },
});

export default BluetoothScreen;

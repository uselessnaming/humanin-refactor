import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

export type RootStackParamList = {
  Graph: {address: string};
  Bluetooth: undefined;
};

export type BluetoothScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Bluetooth'
>;

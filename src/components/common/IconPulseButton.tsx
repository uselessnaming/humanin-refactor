import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Avatar} from '@rneui/themed';

type IconPulseButtonProps = {
  text: string;
  iconName?: string;
  onPress?: () => void;
  isPulse: boolean;
};

const IconPulseButton: React.FC<IconPulseButtonProps> = ({
  text,
  iconName,
  isPulse,
  onPress,
}) => {
  const Pulse = require('react-native-pulse').default;

  return (
    <TouchableOpacity
      className="flex flex-1 justify-center items-center"
      onPress={onPress}>
      <Text className="text-lg font-semibold text-white font-pbold">
        {text}
      </Text>
      <View className="flex flex-1 items-center justify-center">
        {isPulse && (
          <Pulse
            color="#0592FF"
            numPulses={3}
            diameter={250}
            speed={10}
            duration={1500}
          />
        )}
        <Avatar
          containerStyle={styles.avatar}
          size={80}
          rounded
          icon={{name: iconName ?? 'bluetooth', type: 'material'}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#0592FF',
  },
});
export default IconPulseButton;

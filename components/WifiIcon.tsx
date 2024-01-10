import React from "react";
import { Avatar } from "@rneui/base";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useLanguage } from "../context/LanguageProvider";

type Props = {
    onPress: () => void;
    isScan: boolean,
};

const WifiIcon: React.FC<Props> = ({onPress, isScan}) => {
    const Pulse = require('react-native-pulse').default;

    const {language} = useLanguage();

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>
                {isScan ? language === 'ko' ? 'Wifi 연결 중입니다.' : 'Connecting to WiFi' : language==='ko' ? '맞는 정보를 입력해 Wifi를 연결해주세요.' : 'Please input the correct information and connect the WiFi'}
            </Text>
            <View style={styles.container}>
                {isScan ? (
                    <Pulse
                        color="#0592FF"
                        numPulses={3}
                        diameter={250}
                        speed={10}
                        duration={1500}
                    />
                ) : null}
                <Avatar
                    size={80}
                    rounded
                    icon={{name:'wifi'}}
                    containerStyle={{backgroundColor: '#0592FF'}}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginBottom: 16,
      fontSize: 16,
      fontFamily: 'Pretendard-Bold',
      color: 'white',
    },
  });

  export default WifiIcon;
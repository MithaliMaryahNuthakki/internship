import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';


const ReelsScreen =({navigation}) => {
    return(
    <View style={styles.container}>
        <Text> Reels Screen </Text>
    </View>
    );
};

export default ReelsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'aqua'
    },
});

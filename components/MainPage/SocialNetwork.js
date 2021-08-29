import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import React from "react";

export default function SocialNetwork() {
    return (
        <View style={styles.socialNetwork}>
            <Text style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '550',
            }}>Мы в социальных сетях:</Text>
            <View style={{display: 'flex', marginTop: '10px', flexDirection: 'row'}}>
                <TouchableWithoutFeedback onPress={() => alert('vk')}>
                    <Image style={{
                        width: '70px',
                        height: '70px',
                        marginRight: '20px'
                    }} source={require('../../assets/vk.png')}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => alert('facebook')}>
                    <Image style={{
                        width: '70px',
                        height: '70px'
                    }} source={require('../../assets/facebook.png')}/>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    socialNetwork: {
        alignItems: 'center',
    }
});
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from "../Header";
import Form from "./Form";
import SocialNetwork from "./SocialNetwork";
import Button from "../Button";
import database from '@react-native-firebase/database'
import {Text} from "react-native-web";

export default function MainPage() {
    const reference = database().ref('/dialogs');
    console.log(reference)
    return (
        <View style={styles.mainPage}>
         <Text>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainPage: {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '80px 3fr 1fr 1fr'
    },
    button: {
        alignItems: 'center',
    },
    socialNetwork: {
        alignItems: 'center',
    }
});

import {Picker, StyleSheet, TextInput, View} from "react-native";
import React from "react";

export default function Form() {
    return (
        <View style={styles.form}>
            <TextInput
                type={'datetime'}
                style={styles.input}
                placeholder='Введите свое Имя'
            />
            <Picker style={styles.input}>
                <Picker.Item color='black' label="Java" value="java"/>
                <Picker.Item label="JavaScript" value="js"/>
            </Picker>
            <Picker style={styles.input}>
                <Picker.Item label="Java" value="java"/>
                <Picker.Item label="JavaScript" value="js"/>
            </Picker>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        marginTop: '40px',
        padding: '10px',
        height: '65px',
        borderRadius: '5px',
        fontSize: '20px',
        width: '80%',
        backgroundColor: 'white'
    },
    form: {
        padding: '20px 0 20px 0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

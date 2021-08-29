import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.nameHeader}>WEHELP</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        paddingTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameHeader: {
        padding: '0',
        textAlign: 'center',
        fontWeight: '550',
        fontSize: '60px',
        width: '80%',
        height: '90px',
        borderRadius: '50px',
        color: 'white',
        background: 'none',
        border: '2px solid white'
    },
});
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";


export default function Button() {
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={() => {/* do this */
            }}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '30px',
                    color: 'black',
                    width: '340px',
                    padding: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'white'
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: '40px',
                        fontWeight: '550'
                    }}>Войти в чат</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
    }
});
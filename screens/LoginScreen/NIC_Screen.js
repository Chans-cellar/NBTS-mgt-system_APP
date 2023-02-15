import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from "../../Theme";
import TxtInput_Instance from "../../Components/TxtInput_Instance";


export default function NIC_Screen() {

    return (
        <View style={styles.container}>
            <TxtInput_Instance label = "Enter Your NIC Number"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.LavenderBlush,
        justifyContent: "center",
        alignItems: "center"
    }


});

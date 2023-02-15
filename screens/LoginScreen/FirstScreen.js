import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from "../../Theme";
import TxtInput_Instance from "../../Components/TxtInput_Instance";
import ReactSimpleButton from "../../Components/ReactSimpleButton";
import {RadioButton} from 'react-native-paper';
import {useState} from "react";


export default function FirstScreen() {
    const [value, setValue] = useState('first');

    return (
        <View style={styles.container}>
            <TxtInput_Instance label='Full Name'/>
            <TxtInput_Instance label='User Name'/>
            <TxtInput_Instance label='Date of Birth'/>
            <TxtInput_Instance label='Mobile Number'/>

            <Text style={{
                color: COLORS.WineRed,
                fontFamily: FONTS.Bold,
                fontSize: 16,
                alignSelf: 'flex-start',
                paddingLeft: 20
            }}>
                Gender
            </Text>

            {/*Gender*/}
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={
                    {
                        display: 'flex',
                        flexDirection: 'row'
                    }
                }>
                    <RadioButton.Item label="Male" value="male"/>
                    <RadioButton.Item label="Female" value="female"/>

                </View>
            </RadioButton.Group>

            {/*Button*/}
            <TouchableOpacity
                style={styles.Home__AppointBtn}
            >
                <Text
                    style={styles.Home__AppointBtn__text}
                >
                    Next
                </Text>

            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.LavenderBlush,
        alignItems: "center",
        justifyContent: "center"
    },
    Home__AppointBtn: {
        backgroundColor: COLORS.CandyRed,
        borderRadius: 20,
        width:140,
        height:46,
        alignItems:"center",
        justifyContent: "center",
    },

    Home__AppointBtn__text:{
        color: '#fff',
        fontFamily: FONTS.Bold,
        fontSize:18
    }


});

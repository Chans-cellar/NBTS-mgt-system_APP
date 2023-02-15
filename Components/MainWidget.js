import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {COLORS, FONTS} from "../Theme";
export default function MainWidget() {
    return (
        <View style={styles.container}>

            <Text style={
                {
                    color:COLORS.Pink,
                    fontSize:14,
                    fontFamily:FONTS.Black
                }
            }>
                You're
            </Text>

            <Text style={
                {
                    color:'#fff',
                    fontSize:32,
                    fontFamily:FONTS.Black

                }
            }>
                Eligible
            </Text>

            <Text style={
                {
                    color:'#fff',
                    fontSize:8,
                    fontFamily:FONTS.Regular
                }
            }>
                Hurry up ! get your appointment now
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:COLORS.CandyRed,
        width: 350,
        height: 136,
        borderRadius:30


    },
});

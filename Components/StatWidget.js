import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from "../Theme";

export default function StatWidget() {
    return (
        <View style={styles.container}>

            {/*title*/}
            <Text style={styles.title}>
                avg volume
            </Text>

            {/*Numeric Value*/}
            <Text style={styles.NumValue}>
                04
            </Text>

            {/*Units*/}
            <Text style={styles.units}>
                PINES/YEAR
            </Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 144,
        height: 159,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,


    },

    title: {
        color: COLORS.AshPink,
        fontFamily: FONTS.Black,
        fontSize: 10,
        textTransform: "uppercase"
    },

    NumValue: {
        color: COLORS.CandyRed,
        fontFamily: FONTS.Black,
        fontSize: 55,

    },

    units: {
        color: COLORS.AshPink,
        fontFamily: FONTS.Black,
        fontSize: 11,
        textTransform: "uppercase"

    }
});

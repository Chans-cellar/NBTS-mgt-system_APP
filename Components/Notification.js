import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from "../Theme";


export default function Notification() {
    return (
        <View style={styles.container}>

            <View style={styles.dateContainer}>

                {/*month*/}
                <Text style={
                    {
                        fontFamily: FONTS.Bold,
                        fontSize: 10,
                        textTransform: "uppercase",
                        color: '#fff'
                    }
                }>
                    Dec

                </Text>

                {/*Date*/}
                <Text style={
                    {
                        fontFamily: FONTS.Bold,
                        fontSize: 24,
                        color: '#fff'
                    }
                }>
                    30

                </Text>

            </View>

            <View style={styles.locateContainer}>
                <Text style={styles.locateContainer__eventTXT}>
                    National Blood Awareness

                </Text>
                <Text style={styles.locateContainer__locationTXT}>
                    Meegoda, Sri Lanka
                </Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        height: 80,
        width: 350,
        alignItems: "center",
        margin:5,
        shadowColor: COLORS.UsedOil,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 7,

        elevation: 9,
    },

    dateContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.RomanEmpireRed,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
    },

    locateContainer: {
        marginLeft:15
    },

    locateContainer__eventTXT: {
        fontFamily: FONTS.Black,
        fontSize: 18,
        color: COLORS.UsedOil,
        margin:1
    },

    locateContainer__locationTXT: {
        fontFamily: FONTS.Regular,
        fontSize:14,
        color:COLORS.Awakening,
        margin:1

    }
});

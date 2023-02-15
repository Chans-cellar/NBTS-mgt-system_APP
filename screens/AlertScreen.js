import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {COLORS, FONTS} from "../Theme";
import AlertNotification from "../Components/AlertNotification";

export default function AlertScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.headingDiv}>
                <Text style={styles.headingDiv__Main}>
                    Notifications
                </Text>
                <Text style={styles.headingDiv__Sub}>
                    Recent Alerts and Notifications
                </Text>

            </View>

            <View style={styles.alertDiv}>
                <AlertNotification/>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.LavenderBlush,
        alignItems: 'center',
    },

    headingDiv:{
        paddingTop:70,
        paddingLeft:30,
        alignSelf:"flex-start"


    },

    alertDiv:{
        marginVertical:20

    },
    headingDiv__Main:{
        fontFamily:FONTS.Black,
        color: COLORS.WineRed,
        fontSize:24
    },
    headingDiv__Sub:{
        fontFamily:FONTS.Bold,
        color: COLORS.AshPink

    }
});

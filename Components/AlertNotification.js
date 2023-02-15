import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from "../Theme";

export default function AlertNotification() {
    return (
        <View style={styles.container}>
            <View style={styles.alertNotification__messageDiv}>
                <Text style={styles.alertNotification__messageDiv__TEXT}>
                    Your Blood Donation Appointment has been scheduled
                </Text>
            </View>

            <View style={styles.alertNotification__detailsDiv}>

                <View style={styles.alertNotification__detailsDiv__colDetailInstance}>
                    <Text style={styles.alertNotification__detailsDiv__colDetailInstance__TEXT}>
                        Date
                    </Text>
                    <Text style={[
                        styles.alertNotification__detailsDiv__colDetailInstance__TEXT,
                        {fontFamily: FONTS.Bold, color:COLORS.CandyRed}

                    ]}>

                        07/02/2023
                    </Text>
                </View>

                <View style={styles.alertNotification__detailsDiv__colDetailInstance}>
                    <Text style={styles.alertNotification__detailsDiv__colDetailInstance__TEXT}>
                        Time
                    </Text>
                    <Text style={[
                        styles.alertNotification__detailsDiv__colDetailInstance__TEXT,
                        {fontFamily: FONTS.Bold, color:COLORS.CandyRed}

                    ]}>
                        9.30 A.M
                    </Text>
                </View>

                <View style={styles.alertNotification__detailsDiv__colDetailInstance}>
                    <Text style={styles.alertNotification__detailsDiv__colDetailInstance__TEXT}>
                        Location
                    </Text>
                    <Text style={[
                        styles.alertNotification__detailsDiv__colDetailInstance__TEXT,
                        {fontFamily: FONTS.Bold, color:COLORS.CandyRed}
                    ]}>
                        Narahenpita Blood Bank
                    </Text>
                </View>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        maxHeight: 160,
        flexDirection: "column",
        justifyContent:"space-evenly",
        // shadow settings
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity:  0.19,
        shadowRadius: 5.62,
        elevation: 6,
        marginVertical:5

    },

    alertNotification__messageDiv: {
        margin:20


    },
    alertNotification__messageDiv__TEXT: {
        fontFamily: FONTS.Bold,
        fontSize: 16


    },
    alertNotification__detailsDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin:20


    },
    alertNotification__detailsDiv__colDetailInstance: {
        display: "flex",
        flexDirection: "column"

    },
    alertNotification__detailsDiv__colDetailInstance__TEXT: {
        fontFamily:FONTS.Regular,
        fontSize:12,
        color: COLORS.Pink


    }
});

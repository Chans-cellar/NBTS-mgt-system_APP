import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {COLORS, FONTS} from "../Theme";
import AlertNotification from "../Components/AlertNotification";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../Components/config';
import {useState} from "react";

export default function AlertScreen() {

    const [Adr, setValue] = useState('');

    const unsub = onSnapshot(doc(db, "Blood_Center", "ptRPzeSdb1i33JKDNzGK"), (doc) => {
        setValue(doc.data()['Address']+'');
    });

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
                <AlertNotification/>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.LadyAnne,
        alignItems: 'center',
    },

    headingDiv:{
        paddingTop:100,
        paddingLeft:30,
        alignSelf:"flex-start"


    },

    alertDiv:{
        marginVertical:20

    },
    headingDiv__Main:{
        fontFamily: FONTS.Black,
        fontSize: 30,
        color:COLORS.UsedOil,
        margin:1
    },
    headingDiv__Sub:{
        fontFamily: FONTS.Bold,
        fontSize: 18,
        color:COLORS.Awakening,
        margin:1

    }
});

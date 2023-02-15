import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from "../Theme";
import Notification from "../Components/Notification";

export default function EventScreen() {
    return (
        <View style={styles.container}>


            {/*title div*/}
            <View style={styles.Events__topicDiv}>

                {/*title - main part*/}
                <Text style={
                    {
                        fontFamily: FONTS.Black,
                        fontSize: 20,
                        color:COLORS.WineRed
                    }
                }>
                    Upcoming Campaigns
                </Text>

                {/*title - sub part*/}

                <Text style={
                    {
                        fontFamily: FONTS.Bold,
                        fontSize: 12,
                        color:COLORS.AshPink
                    }
                }>
                    Homagama
                </Text>
            </View>

            {/*Notifications div*/}
            <View style={styles.Events__notifyDiv}>

                {/*Notification component*/}
                <Notification/>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.LavenderBlush,

    },
    Events__topicDiv: {
        top:125,
        left: 30
    },
    Events__notifyDiv:{
        paddingTop:140,
        width: 310

    }
});

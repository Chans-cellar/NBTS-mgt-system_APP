import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from "../Theme";
import Notification from "../Components/Notification";



export default function EventScreen() {
    return (
        <View style={styles.container}>


            {/*title division*/}
            <View style={styles.Events__topicDiv}>

                {/*title - main part*/}
                <Text style={
                    {
                        fontFamily: FONTS.Black,
                        fontSize: 30,
                        color:COLORS.UsedOil,
                        margin:1
                    }
                }>

                    Upcoming Campaigns
                </Text>

                {/*title - sub part*/}
                <Text style={
                    {
                        fontFamily: FONTS.Bold,
                        fontSize: 18,
                        color:COLORS.Awakening,
                        margin:1
                    }
                }>
                    Homagama
                </Text>
            </View>

            {/*Notifications div*/}
            <View style={styles.Events__notifyDiv}>
                {/*Notification component*/}
                <Notification/>
                <Notification/>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.LadyAnne,

    },

    Events__topicDiv: {
        marginTop:100,
        marginLeft: 30
    },

    Events__notifyDiv:{
        paddingTop:30,
        alignItems: "center",
    }
});

import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MainWidget from "../Components/MainWidget";
import StatWidget from "../Components/StatWidget";
import {COLORS, FONTS} from "../Theme";

export default function Home() {

    return (
        <View style={styles.container}>

            {/*Greeting*/}
            <View style={styles.greetingDiv}>
                <Text style={{fontFamily: FONTS.Regular, color: COLORS.AshPink, fontSize: 24}}> Hello </Text>
                <Text style={{fontFamily: FONTS.Black, color: COLORS.WineRed, fontSize: 24}}> Chandika </Text>
            </View>

            {/*Main Widget*/}
            <View style={
                {
                    alignItems: "center"
                }
            }>
                <MainWidget/>
            </View>

            {/*Statistic  Widget Heading*/}
            <View style={styles.Home__statHead__cont}>
                <Text style={
                    {
                        color: COLORS.WineRed,
                        fontSize: 18,
                        fontFamily: FONTS.Bold

                    }
                }>Your Contributions</Text>
                <Text style={
                    {
                        color: COLORS.AshPink,
                        fontSize: 10,
                        fontFamily: FONTS.Regular

                    }
                }>To National Blood transfusion Service</Text>
            </View>

            {/*Statistic Widget*/}
            <View style={styles.Home__StatWidgetDiv}>
                <StatWidget/>
                <StatWidget/>

            </View>

            {/*appointment button*/}
            <View style={{alignItems: "center"}}>
                <TouchableOpacity
                    style={styles.Home__AppointBtn}
                >
                    <Text
                        style={styles.Home__AppointBtn__text}
                    >
                        Get an Appointment
                    </Text>

                </TouchableOpacity>

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

    greetingDiv: {
        paddingTop: 125
    },

    Home__statHead__cont: {
        paddingTop: 30,
        left: 38
    },

    Home__StatWidgetDiv: {
        display: "flex",
        flexDirection: "row",
    },

    Home__AppointBtn: {
        backgroundColor: COLORS.CandyRed,
        borderRadius: 20,
        width:310,
        height:46,
        alignItems:"center",
        justifyContent: "center"

    },

    Home__AppointBtn__text:{
        color: '#fff',
        fontFamily: FONTS.Bold,
        fontSize:18
    }


});

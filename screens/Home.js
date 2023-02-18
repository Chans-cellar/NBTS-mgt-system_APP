import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MainWidget from "../Components/MainWidget";
import StatWidget from "../Components/StatWidget";
import {COLORS, FONTS} from "../Theme";
import {useNavigation} from "@react-navigation/native";



export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            {/*Greeting*/}
            <View style={styles.greetingDiv}>
                <Text style={styles.greetingDiv__MainTXT}> Hello </Text>
                <Text style={styles.greetingDiv__SubTXT}> Chandika </Text>
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
            <View style={{alignItems: "center", marginTop:30 }}>
                <TouchableOpacity
                    style={styles.Home__AppointBtn}
                    onPress={() => navigation.navigate("Appointment")}
                >
                    <Text
                        style={styles.Home__AppointBtn__text}
                    >
                        Get an Appointment
                    </Text>
                </TouchableOpacity>
            </View>

            {/*Bottom Tab Bar*/}
            <View style={styles.bottomTabDiv}>

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
        paddingTop: 100,
        margin: 20
    },

    greetingDiv__MainTXT: {
        fontFamily: FONTS.Regular,
        color: COLORS.AshPink,
        fontSize: 30,
        marginLeft: 20
    },

    greetingDiv__SubTXT: {
        fontFamily: FONTS.Black,
        color: COLORS.WineRed,
        fontSize: 30,
        marginLeft: 20
    },

    Home__statHead__cont: {
        paddingTop: 30,
        left: 38
    },

    Home__StatWidgetDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20
    },

    Home__AppointBtn: {
        backgroundColor: COLORS.CandyRed,
        borderRadius: 20,
        width: 310,
        height: 46,
        alignItems: "center",
        justifyContent: "center"
    },

    Home__AppointBtn__text: {
        color: '#fff',
        fontFamily: FONTS.Bold,
        fontSize: 18
    },

    bottomTabDiv: {
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        width:500,
        height: 107,
        backgroundColor: '#fff',

    }


});

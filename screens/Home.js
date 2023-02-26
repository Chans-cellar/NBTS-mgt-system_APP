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
                <Text style={styles.greetingDiv__SubTXT}> Kamal Weeramuni </Text>
            </View>


            {/*Main Widget*/}
            <View style={
                {
                    alignItems: "center"
                }
            }>
                <MainWidget/>
            </View>


            {/*Statistic  Widget Division*/}
            <View>
                {/*Statistic  Widget Heading*/}
                <View style={styles.Home__statHead__cont}>
                    <Text style={
                        {
                            color: COLORS.UsedOil,
                            fontSize: 24,
                            fontFamily: FONTS.Bold

                        }
                    }>Your Contributions</Text>
                    <Text style={
                        {
                            color: COLORS.Awakening,
                            fontSize: 14,
                            fontFamily: FONTS.Regular

                        }
                    }>To National Blood transfusion Service</Text>
                </View>
                {/*Statistic Widget*/}
                <View style={styles.Home__StatWidgetDiv}>
                    <StatWidget/>
                    <StatWidget/>
                </View>

            </View>


            {/*appointment button Division*/}
            <View style={styles.Home__AppointBtn__DIV}>
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


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.LadyAnne,
        paddingBottom:85,
        justifyContent:"space-evenly"
    },

    greetingDiv: {
        paddingTop: 100,
        margin: 20
    },

    greetingDiv__MainTXT: {
        fontFamily: FONTS.Regular,
        color: COLORS.Awakening,
        fontSize: 30,
        marginLeft: 20
    },

    greetingDiv__SubTXT: {
        fontFamily: FONTS.Black,
        color: COLORS.UsedOil,
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
        marginTop: 20,
        width: 350,
        alignSelf: "center"


    },
    Home__AppointBtn__DIV: {
        alignItems: "center",
        marginTop: 30

    },

    Home__AppointBtn: {
        backgroundColor: COLORS.RomanEmpireRed,
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


});

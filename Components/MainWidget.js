import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from "../Theme";
import Drop from "../assets/images/drop.svg";
import {shadow} from "react-native-paper";
import StatWidget from "./StatWidget";


export default function MainWidget() {
    return (
        <View style={styles.container}>

            <Drop width={250} height={250} style={styles.BG__img}/>


            <View style={styles.topFlex}>
                <Text style={styles.subtext}>
                    You're
                </Text>

                <Text style={styles.mainTXT}>
                    Eligible
                </Text>

            </View>

            <View style={styles.bottomFlex}>
                <Text style={styles.descriptionTXT}>
                    Hurry up ! get your appointment now
                </Text>
                <View style={styles.bottomFlex__bloodGroupDiv}>
                    <Text style={styles.bottomFlex__bloodGroup__TXT}>
                        B+
                    </Text>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.RomanEmpireRed,
        width: 350,
        height: 160,
        borderRadius: 30,
        flexDirection: "column",
        justifyContent:"space-evenly",
        overflow: "hidden",
        shadowColor: COLORS.UsedOil,
        shadowOffset: {
            width: 6,
            height: 4,
        },
        shadowOpacity:  0.19,
        shadowRadius: 5.62,
        elevation: 6,
        marginVertical:5
    },

    BG__img:{
        position:"absolute",
        top:20,
        right:-40
    },

    topFlex: {
        marginLeft:30,
    },

    bottomFlex: {
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems: 'flex-end'
    },

    descriptionTXT: {
        color: '#fff',
        fontSize: 12,
        fontFamily: FONTS.Regular,
        alignItems: "flex-end"
    },

    bottomFlex__bloodGroupDiv:{
        width:50,
        height:40,
        borderRadius:10,
        backgroundColor: COLORS.MineralRed,
        alignItems: "center",
        justifyContent: "center"
    },

    bottomFlex__bloodGroup__TXT: {
        color: '#fff',
        fontSize:20,
    },

    subtext: {
        color: COLORS.CherishedOne,
        fontSize: 18,
        fontFamily: FONTS.Black
    },

    mainTXT: {
        color: '#fff',
        fontSize: 40,
        fontFamily: FONTS.Bold
    },



});

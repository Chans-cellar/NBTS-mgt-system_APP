import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from "../Theme";

export default function MainWidget() {
    return (
        <View style={styles.container}>

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
        backgroundColor: COLORS.CandyRed,
        width: 350,
        height: 136,
        borderRadius: 30,
        flexDirection: "column",
        justifyContent:"space-around"
    },

    topFlex: {
        marginLeft:30
    },

    bottomFlex: {
        marginLeft:30,
        flexDirection:"row",
        justifyContent:"space-between"
    },

    descriptionTXT: {
        color: '#fff',
        fontSize: 8,
        fontFamily: FONTS.Regular,
        alignItems: "flex-end"
    },

    bottomFlex__bloodGroupDiv:{
        width:35,
        height:40,
        borderRadius:10,
        color:COLORS.CrepePink,
        marginRight:20
    },

    bottomFlex__bloodGroup__TXT: {
        color: '#fff'

    },

    subtext: {
        color: COLORS.Pink,
        fontSize: 14,
        fontFamily: FONTS.Black
    },

    mainTXT: {
        color: '#fff',
        fontSize: 32,
        fontFamily: FONTS.Black
    },



});

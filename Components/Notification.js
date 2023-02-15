import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from "../Theme";

export default function Notification() {
    return (
        <View style={styles.container}>

            <View style={styles.dateContainer}>

                {/*month*/}
                <Text style={
                    {
                        fontFamily:FONTS.Bold,
                        fontSize:8,
                        textTransform: "uppercase",
                        color:'#fff'
                    }
                }>
                  Dec

                </Text>

                {/*Date*/}
                <Text style={
                    {
                        fontFamily:FONTS.Bold,
                        fontSize:22,
                        color:'#fff'
                    }
                }>
                    30

                </Text>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        paddingTop: 20

    },

    dateContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.CandyRed,
        borderRadius: 6,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"


    }
});

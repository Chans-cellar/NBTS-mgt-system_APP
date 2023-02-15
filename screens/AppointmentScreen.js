import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from "../Theme";
import TxtInput_Instance from "../Components/TxtInput_Instance";
import Drop from "../assets/images/drop.svg";


export default function AppointmentScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.LocationDiv}>

                    <Drop width={300} height={300} style={styles.LocationDiv__img}/>

                <Text style={styles.Location__subTXT}>
                    Blood Center
                </Text>
                <Text style={styles.Location__MainTXT}>
                    Welimada
                </Text>

            </View>

            <View style={styles.FormCard}>
                <View style={styles.FormCard__Heading}>
                    <Text style={styles.FormCard__Heading__TXT}>
                        Get an {'\n'}Appointment
                    </Text>
                </View>
                <View style={styles.FormCard__Form}>
                    <TxtInput_Instance label='Pick a Date'/>
                    <TxtInput_Instance label='Pick a Time'/>

                    <TouchableOpacity style={styles.FormCard__Form__btn}>
                        <Text style={styles.Home__Form__btn__text}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.CandyRed,


    },
    LocationDiv: {
        marginTop: 125,
        marginLeft: 50,
    },
    LocationDiv__img:{
        position:"absolute",
        top:-15,
        right:-15
    },

    Location__MainTXT: {
        fontSize: 40,
        fontFamily: FONTS.Black,
        color: '#fff'
    },

    Location__subTXT: {
        fontSize: 18,
        fontFamily: FONTS.Black,
        color: COLORS.Pink
    },

    FormCard: {
        marginTop: 75,
        backgroundColor: COLORS.LavenderBlush,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        height:700
    },

    FormCard__Heading: {
        marginTop: 50,
        marginLeft: 40
    },

    FormCard__Heading__TXT: {
        fontFamily: FONTS.Black,
        color: COLORS.WineRed,
        fontSize: 28,
    },

    FormCard__Form: {
        marginTop: 70,
        alignItems: "center"
    },
    FormCard__Form__btn: {
        backgroundColor: COLORS.CandyRed,
        borderRadius: 20,
        width: 150,
        height: 46,
        alignItems: "center",
        justifyContent: "center",
        marginTop:30
    },
    Home__Form__btn__text: {
        color: '#fff',
        fontFamily: FONTS.Bold,
        fontSize: 18
    }
});
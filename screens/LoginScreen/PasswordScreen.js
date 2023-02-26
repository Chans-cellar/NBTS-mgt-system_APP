import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from "../../Theme";
import {RadioButton} from 'react-native-paper';
import {useState} from "react";
import {SelectList} from "react-native-dropdown-select-list";
import {useNavigation} from "@react-navigation/native";


export default function PasswordScreen() {
    const navigation = useNavigation();

    const [sick, setSick] = useState('first');
    const [risk, setRisk] = useState('first');


    // drop down select state
    const [isSick,setIsSick] =useState("");

    const districtData = [
        {key: '1', value: 'A+'},
        {key: '2', value: 'B+'},
        {key: '3', value: 'C+'}
    ]




    return (
        <View style={styles.container}>

            <View style={styles.headingForm_collect}>

                <View style={styles.HeadingDiv}>
                    <Text style={styles.HeadingDiv__MainTXT}> Register </Text>
                    <Text style={styles.HeadingDiv__SubTXT}> Security Information </Text>

                </View>


                <View style={styles.formDiv}>

                    <View>
                        {/*label*/}
                        <Text style={styles.textInput__labelTXT}> OTP </Text>
                        {/*textbox*/}
                        <TextInput style={styles.textInput__dataHolder}/>
                    </View>


                    <View>
                        {/*label*/}
                        <Text style={styles.textInput__labelTXT}> Password </Text>
                        {/*textbox*/}
                        <TextInput style={styles.textInput__dataHolder}/>
                    </View>

                    <View>
                        {/*label*/}
                        <Text style={styles.textInput__labelTXT}> Confirm Password </Text>
                        {/*textbox*/}
                        <TextInput style={styles.textInput__dataHolder}/>
                    </View>



                </View>

            </View>


            <View style={styles.btnDiv}>

                {/*Back Button*/}
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.btn__text}>
                        Back
                    </Text>
                </TouchableOpacity>

                {/*Back Button*/}
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate("Home")}

                >
                    <Text style={styles.btn__text}>
                        Submit
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
        justifyContent:"space-between"
    },
    headingForm_collect: {},
    HeadingDiv: {
        marginTop: 100,
        marginBottom: 30,
        marginLeft: 30
    },

    HeadingDiv__MainTXT: {
        color: COLORS.UsedOil,
        fontFamily: FONTS.Black,
        fontSize: 30,

    },

    HeadingDiv__SubTXT:{
        color: COLORS.Awakening,
        fontFamily: FONTS.Regular,
        fontSize: 16,

    },

    formDiv: {
        alignItems: "center",
        justifyContent: "center"

    },

    textInput__labelTXT: {
        color: COLORS.UsedOil,
        fontFamily: FONTS.Bold,
        fontSize: 16,
        alignSelf: 'flex-start',
        paddingLeft: 10
    },

    textInput__dataHolder: {
        backgroundColor: COLORS.SweetBlush,
        width: 320,
        height: 50,
        borderRadius: 10,
        margin: 10
    },
    multiTextInput__dataHolder: {
        backgroundColor: COLORS.SweetBlush,
        width: 320,
        height: 100,
        borderRadius: 10,
        margin: 10
    },
    btnDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 30

    },
    btn: {
        backgroundColor: COLORS.RomanEmpireRed,
        borderRadius: 20,
        width: 140,
        height: 46,
        alignItems: "center",
        justifyContent: "center",
        margin: 20
    },


    btn__text: {
        color: '#fff',
        fontFamily: FONTS.Bold,
        fontSize: 18
    }


});

import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from "../../Theme";
import {RadioButton} from 'react-native-paper';
import {useState} from "react";
import {SelectList} from "react-native-dropdown-select-list";
import {useNavigation} from "@react-navigation/native";


export default function HealthScreen() {

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
                    <Text style={styles.HeadingDiv__SubTXT}> Health Information </Text>

                </View>


                <View style={styles.formDiv}>

                    <View>
                        {/*label*/}
                        <Text style={styles.textInput__labelTXT}> Weight </Text>
                        {/*textbox*/}
                        <TextInput style={styles.textInput__dataHolder}/>
                    </View>


                    <View>
                        {/*label*/}
                        <Text style={styles.textInput__labelTXT}> Blood Type </Text>

                        {/*dropdown list*/}
                        <SelectList
                            data={districtData}
                            setSelected={setIsSick}
                            boxStyles={styles.textInput__dataHolder
                            }
                            defaultOption={{key: '1', value: 'A+'}}
                        >
                        </SelectList>
                    </View>

                    <View style={{marginVertical:10,width: 320}}>
                        <Text style={styles.textInput__labelTXT}>Are you free from any serious disease
                            condition or pregnancy? </Text>
                        {/*Radio Button*/}
                        <RadioButton.Group onValueChange={newValue => setSick(newValue)} value={sick}>
                            <View style={
                                {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginHorizontal: 30,
                                    paddingTop: 5,
                                    justifyContent: 'space-between'
                                }
                            }>
                                <RadioButton.Item label="Yes" value="yes"/>
                                <RadioButton.Item label="No" value="no"/>
                            </View>
                        </RadioButton.Group>
                    </View>


                    <View style={{marginVertical:10,width: 320}}>
                        <Text style={styles.textInput__labelTXT}>Are you free from Risk Behaviours ?</Text>
                        {/*Radio Button*/}
                        <RadioButton.Group onValueChange={newValue => setRisk(newValue)} value={risk}>
                            <View style={
                                {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginHorizontal: 30,
                                    paddingTop: 5,
                                    justifyContent: 'space-between'
                                }
                            }>
                                <RadioButton.Item label="Yes" value="risk_yes"/>
                                <RadioButton.Item label="No" value="risk_no"/>
                            </View>
                        </RadioButton.Group>
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

                {/*Next Button*/}
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate("PasswordLog")}
                >
                    <Text style={styles.btn__text}>
                        Next
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
        justifyContent:"space-between"
    },
    headingForm_collect: {},
    HeadingDiv: {
        marginTop: 100,
        marginBottom: 30,
        marginLeft: 30
    },

    HeadingDiv__MainTXT: {
        color: COLORS.WineRed,
        fontFamily: FONTS.Black,
        fontSize: 30,

    },

    HeadingDiv__SubTXT:{
        color: COLORS.AshPink,
        fontFamily: FONTS.Regular,
        fontSize: 16,

    },

    formDiv: {
        alignItems: "center",
        justifyContent: "center"

    },

    textInput__labelTXT: {
        color: COLORS.WineRed,
        fontFamily: FONTS.Bold,
        fontSize: 16,
        alignSelf: 'flex-start',
        paddingLeft: 10
    },

    textInput__dataHolder: {
        backgroundColor: COLORS.CrepePink,
        width: 320,
        height: 50,
        borderRadius: 10,
        margin: 10
    },
    multiTextInput__dataHolder: {
        backgroundColor: COLORS.CrepePink,
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
        backgroundColor: COLORS.CandyRed,
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

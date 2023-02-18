import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from "../../Theme";
import TxtInput_Instance from "../../Components/TxtInput_Instance";
import {RadioButton} from 'react-native-paper';
import {useContext, useState} from "react";
import {SelectList} from "react-native-dropdown-select-list";
import {useNavigation} from "@react-navigation/native";

import { db } from '../../Components/config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore";
import { NICContext } from '../helper/Context';






export default function LocationScreen() {
    const navigation = useNavigation();

    const [value, setValue] = useState('first');

    // drop down select state
    const [district, setDistrict] = useState("")
    const [bloodCenter, setBloodCenter] = useState("")
    

    const districtData = [
        {key: 'BDL', value: 'Badulla'},
        {key: 'KND', value: 'Kandy'},
        {key: 'CMB', value: 'Colombo'}
    ]

   //import context
    const {NIC} = useContext(NICContext);
    const [address, setaddress] = useState('');

    function create3(){
        setDoc(doc(db, "Donor", (NIC)),{
      
            address: address,
            
          }, { merge: true }).then(() => {
            console.log('data submitted');
            
          }).catch((error) => {
            console.log('something error');
          });
    }; 
    

    // const bloodCenterData = {
    //     'BDL': [
    //         {key: '1', value: 'Badulla'},
    //         {key: '2', value: 'Welimada'},
    //         {key: '3', value: 'Diyathalama'},
    //     ],
    //
    //     'KND':[
    //         {key: '4', value: 'Kandy'},
    //         {key: '5', value: 'Peradeniya'},
    //         {key: '6', value: 'Gampola'},
    //
    //     ],
    //
    //     'CMB':[
    //         {key: '7', value: 'Homagama'},
    //     ]
    // }


    return (
        <View style={styles.container}>

            <View style={styles.headingForm_collect}>

                <View style={styles.HeadingDiv}>
                    <Text style={styles.HeadingDiv__MainTXT}> Register </Text>
                    <Text style={styles.HeadingDiv__SubTXT}> Location Information </Text>
                </View>


                <View style={styles.formDiv}>

                    <View>
                        {/*label*/}
                        <Text style={styles.textInput__labelTXT}> Address  </Text>
                        {/*textbox*/}
                        <TextInput
                            editable
                            multiline
                            numberOfLines={4}
                            maxLength={100}
                            style={styles.multiTextInput__dataHolder}
                            value={address} onChangeText={(address) => {setaddress(address)}} placeholder = "address"/>
                    </View>


                    <View>
                        {/*label*/}
                        <Text style={styles.textInput__labelTXT}> District </Text>
                        {/*dropdown list*/}
                        <SelectList
                            data={districtData}
                            setSelected={setDistrict}
                            boxStyles={styles.textInput__dataHolder
                            }
                            defaultOption={{key: 'BDL', value: 'Badulla'}}
                        >
                        </SelectList>
                    </View>


                    <View>
                        {/*label*/}
                        <Text style={styles.textInput__labelTXT}> Nearest Blood Bank </Text>
                        {/*dropdown list*/}
                        <SelectList
                            data={districtData}
                            setSelected={setDistrict}
                            boxStyles={styles.textInput__dataHolder
                            }
                            defaultOption={{key: 'BDL', value: 'Badulla'}}
                        >
                        </SelectList>
                    </View>


                    {/*<SelectList*/}
                    {/*    data={bloodCenterData}*/}
                    {/*    setSelected={setBloodCenter}*/}
                    {/*    boxStyles={*/}
                    {/*        {*/}
                    {/*            backgroundColor: COLORS.CrepePink,*/}

                    {/*        }*/}
                    {/*    }>*/}
                    {/*    /!*defaultOption={bloodCenterData[districtData][0]}*!/*/}

                    {/*</SelectList>*/}

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
                    onPress={() => {
                        navigation.navigate("HealthLog")
                        create3()
                        
                }
            }
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
        justifyContent: "space-between"
    },
    headingForm_collect: {},
    HeadingDiv: {
        marginTop: 100,
        marginBottom: 30,
        marginLeft: 30
    },

    HeadingDiv__MainTXT: {
        color: COLORS.WineRed,
        fontFamily: FONTS.Bold,
        fontSize: 30,
        alignSelf: 'flex-start',

    },

    HeadingDiv__SubTXT: {
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

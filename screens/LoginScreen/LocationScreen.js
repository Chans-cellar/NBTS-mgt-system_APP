import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from "../../Theme";
import TxtInput_Instance from "../../Components/TxtInput_Instance";
import {RadioButton} from 'react-native-paper';
import {useState} from "react";
import {SelectList} from "react-native-dropdown-select-list";


export default function LocationScreen() {
    const [value, setValue] = useState('first');

    // drop down select state
    const [district, setDistrict] = useState("")
    const [bloodCenter, setBloodCenter] = useState("")

    const districtData = [
        {key: 'BDL', value: 'Badulla'},
        {key: 'KND', value: 'Kandy'},
        {key: 'CMB', value: 'Colombo'}
    ]

    const bloodCenterData = {
        'BDL': [
            {key: '1', value: 'Badulla'},
            {key: '2', value: 'Welimada'},
            {key: '3', value: 'Diyathalama'},
        ],

        'KND':[
            {key: '4', value: 'Kandy'},
            {key: '5', value: 'Peradeniya'},
            {key: '6', value: 'Gampola'},

        ],

        'CMB':[
            {key: '7', value: 'Homagama'},
        ]
    }


    return (
        <View style={styles.container}>
            <TxtInput_Instance label='Address'/>


            {/*dropdown list*/}
            <SelectList
                data={districtData}
                setSelected={setDistrict}
                boxStyles={
                    {
                        backgroundColor: COLORS.CrepePink,

                    }
                }
                defaultOption={{key: 'BDL', value: 'Badulla'}}
            >
            </SelectList>

            <SelectList
                data={bloodCenterData}
                setSelected={setBloodCenter}
                boxStyles={
                    {
                        backgroundColor: COLORS.CrepePink,

                    }
                }>
                {/*defaultOption={bloodCenterData[districtData][0]}*/}

            </SelectList>


            <TxtInput_Instance label='District'/>
            <TxtInput_Instance label='Nearest Blood Bank'/>


            <View style={
                {
                    alignItems: undefined,
                    all: 'reset',
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'space-between'

                }
            }>
                {/*Back Button*/}
                <TouchableOpacity
                    style={styles.Home__AppointBtn}
                >
                    <Text
                        style={styles.Home__AppointBtn__text}
                    >
                        Back
                    </Text>

                </TouchableOpacity>

                {/*Next Button*/}
                <TouchableOpacity
                    style={styles.Home__AppointBtn}
                >
                    <Text
                        style={styles.Home__AppointBtn__text}
                    >
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
        alignItems: "center",
        justifyContent: "center"
    },
    Home__AppointBtn: {
        backgroundColor: COLORS.CandyRed,
        borderRadius: 20,
        width: 140,
        height: 46,
        alignItems: "center",
        justifyContent: "center",
    },

    Home__AppointBtn__text: {
        color: '#fff',
        fontFamily: FONTS.Bold,
        fontSize: 18
    }


});

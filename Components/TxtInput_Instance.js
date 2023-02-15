import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS,FONTS} from "../Theme";


export default function TxtInput_Instance(props) {

    return (
        <View style={styles.container}>

            {/*label*/}
            <Text style={{color:COLORS.WineRed, fontFamily:FONTS.Bold, fontSize:16, alignSelf: 'flex-start', paddingLeft:20}}>
                {props.label}
            </Text>

            {/*textbox*/}
            <TextInput style={
                {
                    backgroundColor: COLORS.CrepePink,
                    width: 320,
                    height: 50,
                    borderRadius: 10,
                    margin:10
                }
            }
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }


});

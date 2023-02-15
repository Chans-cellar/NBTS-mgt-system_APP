import RadioForm from 'react-native-simple-radio-button';
import {useState} from "react";
import {View, Text} from "react-native";
import {COLORS} from "../Theme";

export default function ReactSimpleButton() {
    const [chosenOption, setChosenOption] = useState('apple'); //will store our current user options
    const options = [
        {label: 'Apple', value: 'apple'},
        {label: 'Samsung', value: 'samsung'},
    ]; //create our options for radio group
    return (
        <View>
            <RadioForm
                radio_props={options}
                initial={0} //initial value of this group
                onPress={(value) => {
                    setChosenOption(value);
                }} //if the user changes options, set the new value
                
            />
        </View>
    );
}
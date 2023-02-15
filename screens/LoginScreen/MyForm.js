import React, { useState } from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';

const MyForm = () => {
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <View style={styles.container}>
            <Text>Please select an option:</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                }
            >
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.LavenderBlush,
    }


});
export default MyForm;
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Home from "./screens/Home";
import NIC_Screen from "./screens/LoginScreen/NIC_Screen";
import {
    useFonts,
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
} from '@expo-google-fonts/lato';
import FirstScreen from "./screens/LoginScreen/FirstScreen";
import LocationScreen from "./screens/LoginScreen/LocationScreen";
import AlertScreen from "./screens/AlertScreen";

export default function App() {

    let [fontsLoaded] = useFonts({
        Lato_100Thin,
        Lato_300Light,
        Lato_400Regular,
        Lato_700Bold,
        Lato_900Black,
    });

    if (!fontsLoaded) {
        return null;
    }


    //return statement
    return (
        <View style={styles.container}>
            <AlertScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});

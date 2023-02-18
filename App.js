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
import AppointmentScreen from "./screens/AppointmentScreen";
import HealthScreen from "./screens/LoginScreen/HealthScreen";
import PasswordScreen from "./screens/LoginScreen/PasswordScreen";
import TabNavigationScreen from "./screens/TabNavigationScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventScreen from "./screens/EventScreen";
import { useState } from 'react';
import { NICContext } from './screens/helper/Context';




const Stack = createNativeStackNavigator();

export default function App() {


    //declare usestate for NIC
    const[NIC,setNIC] = useState("");


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
        <NICContext.Provider value={{NIC, setNIC}}>
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={'PersonalLog'}>
                        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
                        <Stack.Screen options={{headerShown:false}} name="Event" component={EventScreen} />
                        <Stack.Screen options={{headerShown:false}} name="Alert" component={AlertScreen} />
                        <Stack.Screen options={{headerShown:false}} name="Appointment" component={AppointmentScreen} />
                        <Stack.Screen options={{headerShown:false}} name="PersonalLog" component={FirstScreen} />
                        <Stack.Screen options={{headerShown:false}} name="LocationLog" component={LocationScreen} />
                        <Stack.Screen options={{headerShown:false}} name="HealthLog" component={HealthScreen} />
                        <Stack.Screen options={{headerShown:false}} name="PasswordLog" component={PasswordScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </NICContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});

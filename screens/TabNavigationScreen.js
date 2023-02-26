import {StatusBar} from 'expo-status-bar';
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

//import icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//import screens
import Home from "./Home";
import EventScreen from "./EventScreen";
import AlertScreen from "./AlertScreen";

import {StyleSheet} from "react-native";
import {COLORS} from "../Theme";

const Tab = createBottomTabNavigator();


export default function TabNavigationScreen() {

    return (
        <Tab.Navigator screenOptions={{
            tabBarInactiveTintColor: COLORS.Awakening,
            tabBarActiveTintColor: COLORS.RomanEmpireRed,

            tabBarStyle: {
                position: "absolute",
                bottom: 20,
                left: 25,
                right: 25,
                elevation: 0,
                borderRadius: 15,
                height: 65,
                ...styles.shadow

            },
            tabBarShowLabel: false
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({color}) => (

                    <View>
                        <MaterialCommunityIcons
                            name='speedometer'
                            size={30}
                            color={color}
                        />
                    </View>

                ),
                headerShown: false
            }}/>


            <Tab.Screen name="Event" component={EventScreen} options={{
                tabBarIcon: ({color}) => (

                    <View>
                        <MaterialCommunityIcons
                            name='campfire'
                            size={30}
                            color={color}
                        />
                    </View>

                ),
                headerShown: false
            }}/>


            <Tab.Screen name="Alert" component={AlertScreen} options={{
                tabBarIcon: ({color}) => (

                    <View>
                        <MaterialCommunityIcons
                            name='bell-outline'
                            size={30}
                            color={color}
                        />
                    </View>

                ),
                headerShown: false
            }}/>
        </Tab.Navigator>

    );
}
const styles = StyleSheet.create({
    container: {},
    shadow: {
        shadowColor: COLORS.UsedOil,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 7,

        elevation: 9
    }

});
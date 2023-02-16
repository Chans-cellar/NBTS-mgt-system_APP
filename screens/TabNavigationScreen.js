import {StatusBar} from 'expo-status-bar';
import {View,Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

//import icons
import {AiOutlineApartment} from "react-icons/ai";
import {AiOutlineApi} from "react-icons/ai";
import {AiOutlineApple} from "react-icons/ai";

//import screens
import Home from "./Home";
import EventScreen from "./EventScreen";
import AlertScreen from "./AlertScreen";

import {StyleSheet} from "react-native";

const Tab = createBottomTabNavigator();


export default function TabNavigationScreen() {

    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                tabBarShowLabel: false,
                style: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 40,
                    marginHorizontal: 20,
                    // Max Height...
                    height: 60,
                    borderRadius: 10,
                    // Shadow...
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    }
                },
            }}>

                <Tab.Screen name={'Home'} component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 20
                        }}>
                            <AiOutlineApartment
                                style={{
                                    size:20,
                                    color: focused ? 'red' : 'gray'

                                }}

                            />

                        </View>
                    )
                }}></Tab.Screen>

                <Tab.Screen name={'Event'} component={EventScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 20
                        }}>
                            <AiOutlineApple
                                style={{
                                    size:20,
                                    color: focused ? 'red' : 'gray'
                                }}
                            />

                        </View>
                    )
                }}></Tab.Screen>

                <Tab.Screen name={'Alert'} component={AlertScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 20
                        }}>
                            <AiOutlineApi
                                style={{
                                    size:20,
                                    color: focused ? 'red' : 'gray'
                                }}
                            />

                        </View>
                    )
                }}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {}

});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Drivers} from './src/pages/Drivers';
import { HomePage } from './src/pages/HomesPage';
import { Tracks } from './src/pages/Tracks';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Drivers" component={Drivers} />
        <Tab.Screen name="Tracks" component={Tracks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
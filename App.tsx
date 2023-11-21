import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Drivers} from './src/pages/Drivers';
import { HomePage } from './src/pages/HomesPage';
import { Tracks } from './src/pages/Tracks';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { Constructors } from './src/pages/Constructors';

const Tab = createBottomTabNavigator();

const queryClient = new QueryClient(({
  defaultOptions:{
    queries:{
      staleTime: 1000*60*5, // 5 minutes 
    }
  }
})) 

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} options={{headerShown:false}} />
        <Tab.Screen name="Drivers" component={Drivers} options={{headerShown:false}}/>
        <Tab.Screen name="Tracks" component={Tracks} options={{headerShown:false}} />
        <Tab.Screen name="Constructors" component={Constructors} options={{headerShown:false}} />
      </Tab.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  );
}
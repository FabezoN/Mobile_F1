import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { StyleSheet, Image } from 'react-native'; // Ajout de Image
import { Drivers } from './src/pages/Drivers';
import { HomePage } from './src/pages/HomesPage'; // Correction de "HomesPage" à "HomePage"
import { Races } from './src/pages/Races';
import { Constructors } from './src/pages/Constructors';
import { LinearGradient } from 'expo-linear-gradient';
import { DriversDetails } from './src/pages/DriversDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Écran d'accueil avec la barre d'onglets */}
          <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />

          {/* Écran en dehors de la barre d'onglets */}
          <Stack.Screen name="DriversDetails" component={DriversDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { backgroundColor: 'black', borderTopWidth: 0} }}>
          <Tab.Screen
            name="Standings"
            component={HomePage}
            options={{
              headerShown: false,
              tabBarActiveTintColor: 'white',
              tabBarLabel: 'Standings',
              tabBarIcon: ({ focused }) => focused ?
                <LinearGradient colors={['rgba(238,0,0,0.5)', 'transparent']} style={{ width: '100%', height: 38, justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={styles.imageDriver} tintColor={focused ? 'white' : 'gray'} source={require('../Mobile_F1/assets/latest.png')} />
                </LinearGradient>
              : <Image style={styles.imageDriver} tintColor={focused ? 'white' : 'gray'} source={require('../Mobile_F1/assets/latest.png')} />
            }} />
      <Tab.Screen
        name="Video"
        component={Constructors}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarLabel: 'Video',
          tabBarIcon: ({ focused }) => focused ?
            <LinearGradient colors={['rgba(238,0,0,0.5)', 'transparent']} style={{ width: '100%', height: 38, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={styles.imageDriver} tintColor={focused ? 'white' : 'gray'} source={require('../Mobile_F1/assets/video.png')} />
            </LinearGradient>
          : <Image style={styles.imageDriver} tintColor={focused ? 'white' : 'gray'} source={require('../Mobile_F1/assets/video.png')} />
        }} />
      <Tab.Screen
        name="Races"
        component={Races}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarLabel: 'Racing',
          tabBarIcon: ({ focused }) => focused ?
            <LinearGradient colors={['rgba(238,0,0,0.5)', 'transparent']} style={{ width: '100%', height: 38, justifyContent: 'center', alignItems: 'center'}}>
              <Image style={styles.imageDriver} tintColor={focused ? 'white' : 'gray'} source={require('../Mobile_F1/assets/racing.png')} />
            </LinearGradient>
          : <Image style={styles.imageDriver} tintColor={focused ? 'white' : 'gray'} source={require('../Mobile_F1/assets/racing.png')} />
        }} />
      <Tab.Screen
        name="StandingsTab"
        component={Drivers}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarLabel: 'Standings',
          tabBarIcon: ({ focused }) => focused ?
            <LinearGradient colors={['rgba(238,0,0,0.5)', 'transparent']} style={{ width: '100%', height: 38, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={styles.imageDriver} tintColor={focused ? 'white' : 'gray'} source={require('../Mobile_F1/assets/standings.png')} />
            </LinearGradient>
          : <Image style={styles.imageDriver} tintColor={focused ? 'white' : 'gray'} source={require('../Mobile_F1/assets/standings.png')} />
        }} />
      <Tab.Screen
        name="More"
        component={Constructors}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarLabel: 'More',
          tabBarIcon: ({ focused }) => focused ?
            <LinearGradient colors={['rgba(238,0,0,0.5)', 'transparent']} style={{ width: '100%', height: 38, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={styles.imageDriver} tintColor={focused ? 'white' : 'gray'} source={require('../Mobile_F1/assets/more.png')} />
            </LinearGradient>
          : <Image style={styles.imageDriver} tintColor={focused ? 'white' : 'gray'} source={require('../Mobile_F1/assets/more.png')} />
        }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  imageDriver: {
    width: 24,
    height: 24,
  },
});
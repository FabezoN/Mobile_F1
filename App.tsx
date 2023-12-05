import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { StyleSheet, Image } from 'react-native'; // Ajout de Image
import { Standings } from './src/pages/Standings';
import { HomePage } from './src/pages/HomesPage'; // Correction de "HomesPage" à "HomePage"
import { Races } from './src/pages/Races';
import { LinearGradient } from 'expo-linear-gradient';
import { MorePage } from './src/pages/morePage';
import { FlagIcon, FlagIconFocused } from './src/components/FlagIcon';
import { StandingIcon, StandingIconFocused } from './src/components/StandingsIcon';
import { VideoIcon, VideoIconFocused } from './src/components/VideoIcon';
import { LatestIcon, LatestIconFocused } from './src/components/LatestIcon';
import { MoreIcon, MoreIconFocused } from './src/components/MoreIcon';

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
            name="Latest"
            component={HomePage}
            options={{
              headerShown: false,
              tabBarActiveTintColor: 'white',
              tabBarLabel: 'Latest',
              tabBarIcon: ({ focused }) => focused ?
                <LinearGradient colors={['rgba(238,0,0,0.5)', 'transparent']} style={{ width: '100%', height: 38, justifyContent: 'center', alignItems: 'center' }}>
                  <LatestIconFocused />
                </LinearGradient>
              : <LatestIcon />
            }} />
      <Tab.Screen
        name="Video"
        component={Races}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarLabel: 'Video',
          tabBarIcon: ({ focused }) => focused ?
            <LinearGradient colors={['rgba(238,0,0,0.5)', 'transparent']} style={{ width: '100%', height: 38, justifyContent: 'center', alignItems: 'center' }}>
              <VideoIconFocused />  
            </LinearGradient>
          : <VideoIcon /> 
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
              <FlagIconFocused />
            </LinearGradient>
          : <FlagIcon />
        }} />
      <Tab.Screen
        name="StandingsTab"
        component={Standings}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarLabel: 'Standings',
          tabBarIcon: ({ focused }) => focused ?
            <LinearGradient colors={['rgba(238,0,0,0.5)', 'transparent']} style={{ width: '100%', height: 38, justifyContent: 'center', alignItems: 'center' }}>
              <StandingIconFocused />  
            </LinearGradient>
          : <StandingIcon /> 
          }} />
      <Tab.Screen
        name="More"
        component={MorePage}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarLabel: 'More',
          tabBarIcon: ({ focused }) => focused ?
            <LinearGradient colors={['rgba(238,0,0,0.5)', 'transparent']} style={{ width: '100%', height: 38, justifyContent: 'center', alignItems: 'center' }}>
              <MoreIconFocused />
            </LinearGradient>
          : <MoreIcon />
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
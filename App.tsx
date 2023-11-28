import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Drivers } from './src/pages/Drivers';
import { HomePage } from './src/pages/HomesPage';
import { Races } from './src/pages/Races';
import { Constructors } from './src/pages/Constructors';
import { Details } from './src/pages/Details';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        <Stack.Navigator>
          {/* Écran d'accueil avec la barre d'onglets */}
          <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />

          {/* Écran en dehors de la barre d'onglets */}
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="Drivers" component={Drivers} options={{ headerShown: false }} />
      <Tab.Screen name="Races" component={Races} options={{ headerShown: false }} />
      <Tab.Screen name="Constructors" component={Constructors} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Drivers} from './src/pages/Drivers';
import { HomePage } from './src/pages/HomesPage';
import { Races } from './src/pages/Races';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { Constructors } from './src/pages/Constructors';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

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
        <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: 'black', borderBlockColor: 'black'}}}>
          <Tab.Screen name="Home" component={HomePage} options={{headerShown:false, tabBarActiveTintColor: 'white', tabBarLabel:"Home", tabBarIcon: ({focused}) => (<Entypo name="home" size={24} color={focused ? 'white' : 'gray'} />)}}/>
          <Tab.Screen name="Drivers" component={Drivers} options={{headerShown:false, tabBarActiveTintColor: 'white', tabBarLabel:"Drivers", tabBarIcon: ({focused}) => (<MaterialCommunityIcons name="racing-helmet" size={24} color={focused ? 'white' : 'gray'} />)}}/>
          <Tab.Screen name="Races" component={Races} options={{headerShown:false, tabBarActiveTintColor: 'white', tabBarLabel:"Races", tabBarIcon: ({focused}) => (<MaterialCommunityIcons name="flag-checkered" size={24} color={focused ? 'white' : 'gray'} />)}} />
          <Tab.Screen name="Constructors" component={Constructors} options={{headerShown:false, tabBarActiveTintColor: 'white', tabBarLabel:"Teams", tabBarIcon: ({focused}) => (<MaterialIcons name="drive-eta" size={24} color={focused ? 'white' : 'gray'} />)}} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
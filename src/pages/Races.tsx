import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageRequireSource,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { useGetRaces } from "../hooks/useGetRaces";
import React, { useState } from 'react';
import PastRaceList from "../components/PastRaceList";
import UpcommingRaceList from "../components/UpcommingRaceList";


export function Races() {
  const [activeTab, setActiveTab] = useState('Past')
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <Text style={styles.Schedule}>Racing</Text>
      <View style= {styles.button}>
      <TouchableOpacity
          style={activeTab === 'Upcoming' ? styles.activeButton : styles.boxDrivers}
          onPress={() => setActiveTab('Upcoming')}>
          <Text style={activeTab === 'Upcoming' ? styles.activeText : styles.textConstructors}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={activeTab === 'Past' ? styles.activeButton : styles.boxDrivers}
          onPress={() => setActiveTab('Past')}>
          <Text style={activeTab === 'Past' ? styles.activeText : styles.textConstructors}>Past</Text>
        </TouchableOpacity>
        </View>
        {activeTab === 'Upcoming' ? (
          <UpcommingRaceList />
        ) : (
          <PastRaceList />
        )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  Schedule: {
    fontWeight: '700',
    color: 'white', 
    fontSize: 41, 
    paddingTop: 71,
    paddingLeft: 27,

  },
  button:{
    flex:1,
    paddingTop:32,
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 27,
    paddingLeft: 27,
    justifyContent: 'space-between',
    paddingBottom: 24,
  },

  textConstructors: {
    textAlign: 'center',
    color: 'grey', 
    fontWeight: '700',
    fontSize: 15,
  },
  boxDrivers:{
    flex: 1,height: 44,
    borderTopWidth: 5,
    borderRightWidth: 5,
    justifyContent: 'center',
  },
  activeText : {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
  },
  activeButton:{
    borderTopRightRadius: 15,
    borderColor: 'red',
    borderTopWidth: 2,
    borderRightWidth: 2,
    flex: 1,
    height: 44,
    justifyContent: 'center',
  }
});



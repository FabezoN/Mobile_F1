import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity, ImageRequireSource } from 'react-native';
import { useGetDrivers } from '../hooks/useGetDrivers';
import React, { useState } from 'react';
import DriverList from '../components/DriverList';
import ConstructorList from '../components/ConstructorList';



export function Standings() {
  const [activeTab, setActiveTab] = useState('Drivers')
  const {data} = useGetDrivers();
  const drivers = data?.MRData.StandingsTable.StandingsLists[0].DriverStandings; 
    return (
      <ScrollView style={{backgroundColor: 'black' }}>
        <Text style={styles.standings}>Standings</Text>
        <View style= {styles.button}>
        <TouchableOpacity
          style={activeTab === 'Drivers' ? styles.activeButton : styles.boxDrivers}
          onPress={() => setActiveTab('Drivers')}>
            <Text style={activeTab === 'Drivers' ? styles.activeText : styles.textConstructors}>
            Drivers
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={activeTab === 'Constructors' ? styles.activeButton : styles.boxDrivers}
          onPress={() => setActiveTab('Constructors')}>
            <Text style={activeTab === 'Constructors' ? styles.activeText : styles.textConstructors}>
            Constructors
          </Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'Drivers' ? (
          <DriverList drivers={drivers} />
        ) : (
          <ConstructorList />
        )}
      </ScrollView>
    );
  }
        
const styles = StyleSheet.create({
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

  activeText: {
    textAlign: 'center',
    color: 'white', 
    fontWeight: '700',
    fontSize: 15,
  },
  activeButton:{
    flex: 1,height: 44,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderTopRightRadius: 15,
    borderColor: 'red',
    justifyContent: 'center',
  },
  textConstructors : {
    color: 'grey',
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
  },

  boxDrivers : {
    borderTopWidth: 5,
    borderRightWidth: 5,
    flex: 1,
    height: 44,
    justifyContent: 'center',
  },
  standings: {
    fontWeight: '700',
    color: 'white', 
    fontSize: 41, 
    paddingTop: 71,
    paddingLeft: 27,
  },
})
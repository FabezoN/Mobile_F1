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
          <TouchableOpacity style={styles.boxDrivers} onPress={() => setActiveTab('Drivers')} >
            <Text style={styles.textDrivers}>Drivers</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => setActiveTab('Constructors')} style={styles.boxConstructors}>
            <Text style={styles.textConstructors}>Constructors</Text>
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

  textDrivers: {
    textAlign: 'center',
    color: 'white', 
    fontWeight: '700',
    fontSize: 15,
  },
  boxDrivers:{
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

  boxConstructors : {
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
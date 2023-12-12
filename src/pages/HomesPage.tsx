import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Pressable, ImageRequireSource, Image, FlatList } from 'react-native';
import { useGetDrivers } from '../hooks/useGetDrivers';
import React from 'react';
import { driverImagesMapping } from '../components/DriverList.constants';

export function HomePage({ navigation }: any) {
  const {data} = useGetDrivers();
    return (
      <ScrollView style={styles.main}>
        <Text style={styles.Home}>Home</Text>
        <Text style={styles.Top}>Top Drivers :  </Text>
        <FlatList
        horizontal={true}
        data={data?.MRData.StandingsTable.StandingsLists[0].DriverStandings}
        renderItem={({ item }) => (
          <View style={styles.viewDrivers}>
            <View style={styles.drivers}>
              <Image style={styles.imageDriver} source={driverImagesMapping[item.Driver.driverId]} />
              <Text style={styles.positionsDrivers}>{item.position}</Text>
              <Text style={styles.familynameDrivers}>{item.Driver.familyName}</Text>
            </View>
          </View>
        )}
        />
      </ScrollView>
    );
  }
        
  const styles = StyleSheet.create({
    main: {
      backgroundColor: 'black'
    },
    Home: {
      fontWeight: '700',
      color: 'white', 
      fontSize: 41, 
      paddingTop: 71,
      paddingLeft: 27,
    },
    viewDrivers:{
      borderRadius: 14,
      backgroundColor: '#1B1A19',
      marginRight: 27,
      marginLeft: 27,
      marginTop: 20,
    },
    drivers: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    positionsDrivers:{
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      paddingLeft:15,
    },
    nameDrivers:{
      flex: 1,
      color: 'white',
      fontSize: 15,
      textAlign: 'center',
    },
    familynameDrivers:{
      flex: 1,
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
    imageDriver:{
      width: 60,
      height: 60,
      borderRadius: 20,
      marginRight: 10,
    },

    viewConstructors:{
      borderRadius: 14,
      backgroundColor: '#1B1A19',
      marginRight: 27,
      marginLeft: 27,
      marginTop: 32,
    },
    Constructors:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    nameConstrutors:{
      flex: 1,
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
    positionsConstrutors:{
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      paddingLeft:15,
    },
    pointConstructors:{
      color: 'white',
      fontSize: 13,
      textAlign: 'center',
    },
    Top:{
      fontWeight: '700',
      color: 'white', 
      fontSize: 25, 
      borderColor: 'red',
      borderWidth: 3,
      borderRadius: 14,
      marginRight: 200,
      marginLeft: 27,
      paddingLeft: 10,
      justifyContent: 'center',
      alignItems: 'center', 
      marginTop: 10,
    }
  })
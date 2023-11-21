import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useGetRaces } from '../hooks/useGetRaces';

export function Races() {
  const {data} = useGetRaces();
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <Text style={styles.standings}>Standings</Text>
        {data?.MRData.RaceTable.Races.map((item, i) => (
          <View style={styles.view} >
            <Text style={styles.position} >{item.raceName}</Text>
            <Text style={styles.givenName} >{item.date}</Text>        
          </View>
        ))}
        <View style={{height: 200}}></View>
      </ScrollView>
    );
  }


  const styles = StyleSheet.create({
    standings: {
      fontWeight: '700',
      color: 'white', 
      fontSize: 34, 
      top: 71, 
      left: 27
    },
    textDrivers: {
      fontWeight: '700',
      color: 'white', 
      top: 156, 
      left: 27, 
      width: 160,
      textAlign: 'center', 
      fontSize: 15
    },
    textConstructors : {
      fontWeight: '700',
      opacity: 0.5,
      color: 'white', 
      top: 140, 
      left: 203, 
      width: 160,
      textAlign: 'center', 
      fontSize: 15
    },
    view : {
      width: 336, 
      height: 148, 
      top: 188, 
      backgroundColor: '#1B1A19', 
      left: 25, 
      marginBottom: 15, 
      borderRadius: 14
    },
    position : {
      color: 'white',
      left: 20,
      top: 15, 
      fontSize: 20, 
      fontWeight: '700'
    },
    givenName : {
      color: 'white',
      left: 20,
      top: 15, 
      fontSize: 16, 
      fontWeight: '700'
    },
    familyName : {
      color: 'white',
      left: 20,
      top: 15, 
      fontSize: 20, 
      fontWeight: '700'
    },
    constructors : {
      color: '#CCCDD7',
      left: 20,
      top: 15, 
      fontSize: 11, 
      width: 90, 
      fontWeight: '700'
    },
    imageDriver : {
      width: 100, 
      height: 100, 
      left: 216, 
      bottom: 110
    },
    points : {
      color: 'white',
      fontSize: 20,
      left: 226,
      bottom: 125,
      textAlign: 'center' ,
      width: 80, 
      fontWeight: '700',
    },
  })
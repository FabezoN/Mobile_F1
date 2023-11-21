import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useGetProducts } from '../hooks/useGetConstructors';


export function Constructors() {
  const {data} = useGetProducts();
  console.log({data})
    return (
      <ScrollView style={styles.main}>
        <Text style={styles.constructors}>Constructors</Text>
        <TouchableOpacity style={styles.textDrivers}><Text style={{color: 'white', textAlign: 'center',borderTopColor: 'white',borderTopWidth: 1}}>Drivers</Text></TouchableOpacity>
        <TouchableOpacity onPress={Constructors}>
          <Text style={styles.textConstructors}>Constructors</Text>
        </TouchableOpacity>
        {data?.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map((item, i) => (
        <View style={styles.view} >
          <Text style={styles.position} >{item.position}{"\n"}</Text>
          <Text style={styles.Name} key={i}>{item.Constructor.name}</Text>
          <Text style={styles.points} key={i}>{item.points}</Text>
          <Text style={styles.wins} >Race wins: {item.wins}</Text>
        </View>
        ))}
      </ScrollView>
    );
  }



  const styles = StyleSheet.create({
    main: {
      backgroundColor: 'black'
    },
    constructors: {
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
    Name : {
      color: 'white',
      left: 20,
      top: 15, 
      fontSize: 20, 
      fontWeight: '700'
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
    wins : {
      color: '#CCCDD7',
      left: 20,
      top: 15, 
      fontSize: 11, 
      width: 90, 
      fontWeight: '700'
    },
  })
        

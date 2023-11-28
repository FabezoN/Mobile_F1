import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity, ImageRequireSource } from 'react-native';
import { useGetDrivers } from '../hooks/useGetDrivers';
import React from 'react';

const driverImagesMapping: Record<string, ImageRequireSource> = {
  'hamilton': require('../../assets/Drivers/hamilton.png'),
  'alonso': require('../../assets/Drivers/alonso.png'),
  'ricciardo': require('../../assets/Drivers/ricciardo.png'),
  'max_verstappen': require('../../assets/Drivers/max_verstappen.png'),
  'leclerc': require('../../assets/Drivers/leclerc.png'),
  'sainz': require('../../assets/Drivers/sainz.png'),
  'bottas': require('../../assets/Drivers/bottas.png'),
  'gasly': require('../../assets/Drivers/gasly.png'),
  'ocon': require('../../assets/Drivers/ocon.png'),
  'perez': require('../../assets/Drivers/perez.png'),
  'norris': require('../../assets/Drivers/norris.png'),
  'russell': require('../../assets/Drivers/russell.png'),
  'piastri': require('../../assets/Drivers/piastri.png'),
  'stroll': require('../../assets/Drivers/stroll.png'),
  'albon': require('../../assets/Drivers/albon.png'),
  'tsunoda': require('../../assets/Drivers/tsunoda.png'),
  'hulkenberg': require('../../assets/Drivers/hulkenberg.png'),
  'zhou': require('../../assets/Drivers/zhou.png'),
  'kevin_magnussen': require('../../assets/Drivers/kevin_magnussen.png'),
  'lawson': require('../../assets/Drivers/lawson.png'),
  'sargeant': require('../../assets/Drivers/sargeant.png'),
  'de_vries': require('../../assets/Drivers/de_vries.png'),
}

export function Drivers({ navigation }: any) {
  const {data} = useGetDrivers();
  const onPress = () => {
    navigation.navigate('Constructors')
  }
    return (
      <ScrollView style={{backgroundColor: 'black' }}>
        <Text style={styles.standings}>Standings</Text>
        <View style= {styles.button}>
          <TouchableOpacity style={styles.boxDrivers}>
            <Text style={styles.textDrivers}>Drivers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress ={onPress} style={styles.boxConstructors}>
            <Text style={styles.textConstructors}>Constructors</Text>
          </TouchableOpacity>
        </View>
        {data?.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((item, i) => (
          <View style={styles.view} key={i}>
            <View style={styles.textView}>
              <Text style={styles.position} >{item.position}{"\n"}</Text>
              <Text style={styles.givenName} >{item.Driver.givenName}</Text>
              <Text style={styles.familyName} >{item.Driver.familyName}{"\n"}</Text>
              <Text style={styles.constructors} >{item.Constructors[0].name}</Text>
            </View>
            <View style={styles.ImageView}>
              <Image style={styles.imageDriver} source={driverImagesMapping[item.Driver.driverId]} />
              <Text style={styles.points} >{item.points}{' PTS'}</Text>
            </View>
          </View>
        ))}
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
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderTopRightRadius: 15,
    borderColor: 'red',
    justifyContent: 'center',
  },
  textConstructors : {
    color: 'white',
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
  view : {
    height: 148, 
    backgroundColor: '#1B1A19', 
    marginLeft: 27,
    marginRight: 27,
    marginBottom: 16, 
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'row',

  },
  position : {
    color: 'white', 
    fontSize: 20, 
    fontWeight: '700',
    paddingTop: 20,
  },
  givenName : {
    color: 'white',
    fontSize: 16, 
    fontWeight: '700',
    paddingTop: 0,
  },
  familyName : {
    color: 'white',
    fontSize: 20, 
    fontWeight: '700',
    height: 35,
  },
  constructors : {
    color: '#CCCDD7',
    fontSize: 11, 
    width: 90, 
    fontWeight: '700',
    paddingBottom: 20,
  },
  imageDriver : {
    width: 100, 
    height: 100,
  },
  points : {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
  },

  textView : {
    flex : 1,
    paddingRight: 46,
    paddingLeft: 20,
    
  },
  ImageView : {
    flex : 1,
    borderRadius: 14,
    alignItems: 'center',
    paddingRight: 6,
    paddingTop: 16,
  }
})
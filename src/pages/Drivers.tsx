import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity, ImageRequireSource } from 'react-native';
import { useGetProducts } from '../hooks/useGetDrivers';
import React from 'react';

const driverImagesMapping: Record<string, ImageRequireSource> = {
  'hamilton': require('../../assets/hamilton.png'),
  'alonso': require('../../assets/alonso.png'),
  'ricciardo': require('../../assets/ricciardo.png'),
  'max_verstappen': require('../../assets/max_verstappen.png'),
  'leclerc': require('../../assets/leclerc.png'),
  'sainz': require('../../assets/sainz.png'),
  'bottas': require('../../assets/bottas.png'),
  'gasly': require('../../assets/gasly.png'),
  'ocon': require('../../assets/ocon.png'),
  'perez': require('../../assets/perez.png'),
  'norris': require('../../assets/norris.png'),
  'russell': require('../../assets/russell.png'),
  'piastri': require('../../assets/piastri.png'),
  'stroll': require('../../assets/stroll.png'),
  'albon': require('../../assets/albon.png'),
  'tsunoda': require('../../assets/tsunoda.png'),
  'hulkenberg': require('../../assets/hulkenberg.png'),
  'zhou': require('../../assets/zhou.png'),
  'kevin_magnussen': require('../../assets/kevin_magnussen.png'),
  'lawson': require('../../assets/lawson.png'),
  'sargeant': require('../../assets/sargeant.png'),
  'de_vries': require('../../assets/de_vries.png'),
}

export function Drivers({ navigation }: any) {
  const {data} = useGetProducts();
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
          <View style={styles.view}>
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
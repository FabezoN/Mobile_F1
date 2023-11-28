import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Pressable, ImageRequireSource, Image } from 'react-native';
import { useGetDrivers } from '../hooks/useGetDrivers';

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


export function HomePage({ navigation }: any) {
  const {data} = useGetDrivers();
  const onPress = () => {
    navigation.navigate('Drivers')
  }
    return (
      <ScrollView style={styles.main}>
        <Text style={styles.Home}>Home</Text>
        <View style= {styles.viewDrivers}>
        {data?.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(0,3).map((item, i) => (
           <Pressable style={styles.drivers} onPress ={onPress}>
           <Text style={styles.positionsDrivers}>{item.position}</Text>
           <Text style={styles.nameDrivers}>{item.Driver.givenName}</Text>
           <Text style={styles.familynameDrivers}>{item.Driver.familyName}</Text>
           <View>
              <Image style={styles.imageDriver} source={driverImagesMapping[item.Driver.driverId]} />
            </View>
         </Pressable> 
        ))}
        </View>
        <View style={styles.viewConstructors}>

        </View>
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
      marginTop: 32,
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
  })
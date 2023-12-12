import { StyleSheet, Text, View, FlatList , ScrollView, Image} from 'react-native';
import { useGetDrivers } from '../hooks/useGetDrivers';
import { driverImagesMapping } from '../components/DriverList.constants';
import { LinearGradient } from 'expo-linear-gradient';
import { Line } from 'react-native-svg';
import { useGetProducts } from '../hooks/useGetConstructors';
import {ConstructorImagesMapping} from '../components/ConstructorList.constants';


export function HomePage() {
  const {data} = useGetDrivers();
  const {data: dataCons} = useGetProducts();
    return (
      <ScrollView style={styles.main}>
        <Text style={styles.Home}>Home</Text>
        <Text style={styles.Top}>Discover Drivers   </Text>
        <FlatList
        horizontal={true}
        data={data?.MRData.StandingsTable.StandingsLists[0].DriverStandings}
        renderItem={({ item }) => (
          <View style={styles.viewDrivers}>
              <Image style={styles.imageDriver} source={driverImagesMapping[item.Driver.driverId]} />
              <View style={styles.textdrivers}>
              <LinearGradient
              colors={['rgba(27, 26, 25, 0.00)', 'rgba(27, 26, 25, 0.54)']} style={{height:93,width:163}}>
                 <Text style={styles.firstnameDrivers}>{item.Driver.givenName}</Text>
                 <Text style={styles.familynameDrivers}>{item.Driver.familyName}</Text> 
              </LinearGradient>
              </View>
          </View>
        )}
        />
        <Text style={styles.Constructors}>Top Constructors</Text>
        <FlatList
        horizontal={true}
        data={dataCons?.MRData.StandingsTable.StandingsLists[0].ConstructorStandings }
        renderItem={({ item }) => (
          <View style={styles.viewDrivers}>
              <Image style={styles.imageDriver} source={ConstructorImagesMapping[item.Constructor.constructorId]} />
              <View style={styles.textdrivers}>
              <LinearGradient
              colors={['rgba(27, 26, 25, 0.00)', 'rgba(27, 26, 25, 0.54)']} style={{height:93,width:163}}>
                 <Text style={styles.firstnameDrivers}>{item.Constructor.name}</Text> 
              </LinearGradient>
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
    Top:{
      fontWeight: '600',
      color: 'white', 
      marginLeft: 27,
      marginTop: 29,
    },

    viewDrivers:{
      backgroundColor: '#181818',
      borderRadius: 10,
      marginTop: 13,
      marginLeft:13,
    },
    imageDriver:{
      width: 163,
      height: 163,
      borderRadius: 20,
    },
    familynameDrivers:{
      color: 'white',
      paddingBottom: 9,
      fontWeight:'600',
      paddingLeft:14,
    },
    firstnameDrivers:{
      color: 'white',
      paddingTop: 44,
      fontWeight:'600',
      paddingLeft:14,
    },
    textdrivers:{
      position: 'absolute',
      paddingTop:70,
    },
    Constructors:{
      fontWeight: '600',
      color: 'white', 
      paddingLeft: 27,
      paddingTop:54,
    },
  })
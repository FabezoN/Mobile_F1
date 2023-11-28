import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Pressable, ImageRequireSource, Image } from 'react-native';
import { useGetDrivers } from '../hooks/useGetDrivers';
import { useGetProducts } from '../hooks/useGetConstructors'; 
import {driverImagesMapping}  from './Drivers';
import { ConstructorImagesMapping } from './Constructors';

export function HomePage({ navigation }: any) {
  const {data} = useGetDrivers();
  const {data:dataCons} = useGetProducts();
  const onPress = () => {
    navigation.navigate('Drivers')
  }
  const OnPressCons =() =>{
    navigation.navigate('Constructors')
  }
    return (
      <ScrollView style={styles.main}>
        <Text style={styles.Home}>Home</Text>
        <Text style={styles.Top}>Top Drivers :  </Text>
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
        {dataCons?.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.slice(0,3).map((itemCons, i) => (
          <Pressable style={styles.Constructors}onPress={OnPressCons}>
            <Text style={styles.positionsConstrutors}>{itemCons.position}</Text>
            <Text style={styles.nameConstrutors}>{itemCons.Constructor.name}</Text>
            <Text style={styles.pointConstructors}>{itemCons.points} PTS </Text>
            <View>
              <Image style={styles.imageDriver} source={ConstructorImagesMapping[itemCons.Constructor.constructorId]} />
            </View>
          </Pressable>
        ))}
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
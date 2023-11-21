import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { useGetRaces } from '../hooks/useGetRaces';

export function Races() {
  const {data} = useGetRaces();
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <Text style={styles.standings}>Schedule</Text>
        {data?.MRData.RaceTable.Races.map((item, i) => (
          <View style={styles.view} >
            <Text style={styles.position} >{item.Circuit.Location.country}</Text>
            <Text style={styles.givenName} >{item.date}</Text>
            <Text style={styles.familyName} >{item.round}</Text>  



            {
              item.raceName != "Bahrain Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/qatar.png')} />
              )
            }    
            {
              item.raceName != "Saudi Arabian Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/arabie-saoudite.png')} />
              )
            }
            {
              item.raceName != "Australian Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/australie.png')} />
              )
            }
            {
              item.raceName != "Azerbaijan Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/azerbaidjan.png')} />
              )
            }
            {
              item.raceName != "Miami Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/etats-unis.png')} />
              )
            }
            {
              item.raceName != "Monaco Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/monaco.png')} />
              )
            }
            {
              item.raceName != "Spanish Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/espagne.png')} />
              )
            }
            {
              item.raceName != "Canadian Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/canada.png')} />
              )
            }
            {
              item.raceName != "Austrian Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/autriche.png')} />
              )
            }
            {
              item.raceName != "British Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/royaume-uni.png')} />
              )
            }
            {
              item.raceName != "Hungarian Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/hongrie.png')} />
              )
            }
            {
              item.raceName != "Belgian Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/belgique.png')} />
              )
            }
            {
              item.raceName != "Dutch Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/pays-bas.png')} />
              )
            }
            {
              item.raceName != "Italian Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/italie.png')} />
              )
            }
            {
              item.raceName != "Singapore Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/singapore.png')} />
              )
            }
            {
              item.raceName != "Japanese Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/japon.png')} />
              )
            }
            {
              item.raceName != "Qatar Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/qatar.png')} />
              )
            }
            {
              item.raceName != "United States Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/etats-unis.png')} />
              )
            }
            {
              item.raceName != "Mexico City Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/mexique.png')} />
              )
            }
            {
              item.raceName != "São Paulo Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/bresil.png')} />
              )
            }
            {
              item.raceName != "Las Vegas Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/etats-unis.png')} />
              )
            }
            {
              item.raceName != "Abu Dhabi Grand Prix" ? (
                <Text></Text>
              ) : (
                <Image style={styles.imageDriver} source={require('../../assets/flag/abu-dhabi.png')} />
              )
            }
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
      position: 'absolute',
      width: 100, 
      height: 100, 
      left: 216, 
      bottom: 50,
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
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image, ImageRequireSource } from 'react-native';
import { useGetProducts } from '../hooks/useGetConstructors';


export const ConstructorImagesMapping: Record<string, ImageRequireSource> = {
  'red_bull': require('../../assets/Constructors/red_bull.png'),
  'mercedes': require('../../assets/Constructors/mercedes.png'),
  'ferrari': require('../../assets/Constructors/ferrari.png'),
  'mclaren': require('../../assets/Constructors/mclaren.png'),
  'aston_martin': require('../../assets/Constructors/astonmartin.png'),   
  'alpine': require('../../assets/Constructors/alpine.png'), 
  'williams': require('../../assets/Constructors/williams.png'),
  'alphatauri': require('../../assets/Constructors/alphatauri.png'),
  'alfa': require('../../assets/Constructors/alfaromeo.png'),
  'haas': require('../../assets/Constructors/haas.png'),
}

export function Constructors({ navigation }: any) {
  const {data} = useGetProducts();
  const onPress = () => {
    navigation.navigate('Drivers')
  }
    return (
      <ScrollView style={styles.main}>
        <Text style={styles.constructors}>Constructors</Text>
        <View style= {styles.button}>
        <TouchableOpacity onPress ={onPress} style={styles.boxDrivers}>
          <Text style={styles.textDrivers}>Drivers</Text>
          </TouchableOpacity>
        <TouchableOpacity  style={styles.boxConstructors}>
          <Text style={styles.textConstructors}>Constructors</Text>
        </TouchableOpacity>
        </View>
        {data?.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map((item, i) => (
        <View style={styles.view} key={i} >
          <View style={styles.textView}>
            <Text style={styles.position} >{item.position}{"\n"}</Text>
            <Text style={styles.Name}>{item.Constructor.name}</Text>
            <Text style={styles.wins} >Race wins: {item.wins}</Text>
          </View>
          <View style={styles.ImageView}>
              <Image style={styles.imageConstructors} source={ConstructorImagesMapping[item.Constructor.constructorId]} />
              <Text style={styles.points} >{item.points}{' PTS'}</Text>
           </View>
        </View >
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
      fontSize: 41, 
      paddingTop: 71,
      paddingLeft: 27,
    },
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
      justifyContent: 'center',
    },
    textConstructors : {
      color: 'white',
      fontWeight: '700',
      fontSize: 15,
      textAlign: 'center',
    },

    boxConstructors : {
      borderTopRightRadius: 15,
      borderColor: 'red',
      borderTopWidth: 2,
      borderRightWidth: 2,
      flex: 1,
      height: 44,
      justifyContent: 'center',
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
    
    textView : {
      flex : 1,
      paddingRight: 46,
      paddingLeft: 20,
    },

    position : {
      color: 'white', 
      fontSize: 20, 
      fontWeight: '700',
      paddingTop: 20,
    },

    Name : {
      color: 'white',
      fontSize: 20, 
      fontWeight: '700',
      height: 35,
    },

    points : {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '700',
    },
    wins : {
      color: '#CCCDD7',
      fontSize: 11, 
      width: 90, 
      fontWeight: '700',
      paddingBottom: 20,
    },

    imageConstructors : {
      width: 100, 
      height: 100,
    },

    ImageView : {
      flex : 1,
      borderRadius: 14,
      alignItems: 'center',
      paddingRight: 6,
      paddingTop: 16,
    }
  })
        

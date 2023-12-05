import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ConstructorImagesMapping } from './ConstructorList.constants'
import { useGetProducts } from '../hooks/useGetConstructors';

const ConstructorList = () => {
  const {data} = useGetProducts();
  return (
   <>
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
   </>
  )
}

export default ConstructorList


const styles = StyleSheet.create({
  
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
      

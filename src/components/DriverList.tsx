import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { DriverStandingTable } from '../hooks/useGetDrivers'
import { driverImagesMapping } from './DriverList.constants'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

interface DriverListProps {
  drivers?: DriverStandingTable[]
}

const DriverList = ({
  
  drivers,
}: DriverListProps) => {
  const navigation = useNavigation();
  return (
    <>
      {drivers?.map((item, i) => (
        <TouchableOpacity style={styles.view} key={i} onPress={() => {
          navigation.navigate('DriversDetails', {
            driverId: item.Driver.driverId,
          })
        }}>
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
        </TouchableOpacity>
      ))}
    </>
  )
}

export default DriverList

     
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
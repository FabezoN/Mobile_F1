import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'


const UpcommingRaceList = () => {
    return (
      <>
      <Text style={styles.Text}>No upcomming races...</Text>
      </>
    )
  }

  export default UpcommingRaceList

  const styles = StyleSheet.create({
    Text:{
        color: '#555',
        fontWeight: '400',
        fontSize: 15,
        textAlign: 'center',
        marginTop:239,
    }
    })
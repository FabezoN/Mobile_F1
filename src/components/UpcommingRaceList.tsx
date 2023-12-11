import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet,  } from 'react-native'
import LottieView from 'lottie-react-native';



const UpcommingRaceList = () => {
  const animation = useRef(null)
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
    },
    })



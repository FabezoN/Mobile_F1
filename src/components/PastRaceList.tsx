import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useRef, useEffect } from 'react';
import { useGetRaces } from '../hooks/useGetRaces';
import { format } from "date-fns";
import LottieView from 'lottie-react-native';

const PastRaceList = () => {
    const { data, isFetching } = useGetRaces();
    const animation = useRef(null)
    if (isFetching) {
        return (
            <View style={styles.animationContainer}>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 200,
                height: 200,
                backgroundColor: 'black',
              }}
              // Find more Lottie files at https://lottiefiles.com/featured
              source={require('../../assets/5VEighXCKj.json')}
            />
          </View>
        );
      }

    return (
      <>
        {data?.MRData.RaceTable.Races.map((item, i) => (
        <View style={styles.view} key={i}>
          <View style={styles.left}>
          <Text style={styles.date}>{format(new Date(item.FirstPractice.date), "dd")} - {format(new Date(item.date), "dd")}</Text>
          <View style={styles.viewMounth}>
            <Text style={styles.mounth}>{(new Date(item.FirstPractice.date).toLocaleString('en-EN', {month: 'short'}) )}</Text>
          </View>
          </View>
          <View style={styles.middle}>
          </View>
          <View style={styles.right}>
          <Text style={styles.round}>Round {item.round}</Text>
          <Text style={styles.country}>{item.Circuit.Location.country}</Text>
          <Text style={styles.racename}>{item.raceName}</Text>
          </View>
        </View>
      ))}
      </>
    )
  }

  export default PastRaceList

  const styles = StyleSheet.create({

  view: {
    height: 104,
    backgroundColor: "#1B1A19",
    marginBottom: 15,
    borderRadius: 14,
    display: "flex",
    flexDirection: "row",
    marginLeft: 27,
    marginRight: 27,
  },

  left:{
    flex: 1,
    width: 48,
    marginLeft: 28,
    marginTop: 30,
    marginBottom: 29,
  },
  right:{
    display: "flex",
    marginLeft: 47,
  },
  middle:{
    backgroundColor : "rgba(255, 255, 255, 0.1)",
    width: 1,
    marginTop: 16,
    marginBottom: 16,
  },
  date:{
    color: "white",
    fontWeight: "700",
    fontSize: 13,
    paddingBottom: 11,
    alignItems: 'center',
  },
  viewMounth:{
    display:'flex',
    paddingTop: 3,
    width: 48,
    paddingBottom: 3,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 24,
    alignItems: 'center',
  },

  mounth:{
    color: "white",
    fontWeight: "400",
    fontSize: 11,
  },  

  round: {
    width: 207,
    fontSize: 11,
    fontWeight: "400",
    marginTop: 16,
    color: 'white',
  },
  country:{
    paddingTop: 6,
    fontWeight: "700",
    fontSize: 15,
    color: 'white',
  },
  racename:{
    paddingTop: 6,
    color: '#CCCDD7',
  },

  animationContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})

    function formatTime(str: string): string {
        const length = str.length
        return str.substring(0, length - 4)
      }    
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageRequireSource,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { useGetRaces } from "../hooks/useGetRaces";
import { format } from "date-fns";
import React from 'react';
import { getMonth } from 'date-fns';


export function Races( { navigation }: { navigation: any}) {
  const { data } = useGetRaces();
  const onPressDetails = () => {
    navigation.navigate('Details')
  }
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <Text style={styles.Schedule}>Racing</Text>
      <View style= {styles.button}>
        <TouchableOpacity style={styles.boxDrivers}>
          <Text style={styles.textDrivers}>Upcoming</Text>
          </TouchableOpacity>
        <TouchableOpacity  style={styles.boxConstructors}>
          <Text style={styles.textConstructors}>Past</Text>
        </TouchableOpacity>
        </View>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  Schedule: {
    fontWeight: '700',
    color: 'white', 
    fontSize: 41, 
    paddingTop: 71,
    paddingLeft: 27,

  },
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
    MarginLeft: 20,
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
    color: 'grey', 
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

});


function formatTime(str: string): string {
  const length = str.length
  return str.substring(0, length - 4)
}
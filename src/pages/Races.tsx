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
import { useNavigation } from '@react-navigation/native';

const flagImagesMapping: Record<string, ImageRequireSource> = {
  "Bahrain Grand Prix": require("../../assets/flag/bahrein.png"),
  "Saudi Arabian Grand Prix": require("../../assets/flag/arabie-saoudite.png"),
  "Australian Grand Prix": require("../../assets/flag/australie.png"),
  "Azerbaijan Grand Prix": require("../../assets/flag/azerbaidjan.png"),
  "Miami Grand Prix": require("../../assets/flag/etats-unis.png"),
  "Monaco Grand Prix": require("../../assets/flag/monaco.png"),
  "Spanish Grand Prix": require("../../assets/flag/espagne.png"),
  "Canadian Grand Prix": require("../../assets/flag/canada.png"),
  "Austrian Grand Prix": require("../../assets/flag/autriche.png"),
  "British Grand Prix": require("../../assets/flag/royaume-uni.png"),
  "Hungarian Grand Prix": require("../../assets/flag/hongrie.png"),
  "Belgian Grand Prix": require("../../assets/flag/belgique.png"),
  "Dutch Grand Prix": require("../../assets/flag/pays-bas.png"),
  "Italian Grand Prix": require("../../assets/flag/italie.png"),
  "Singapore Grand Prix": require("../../assets/flag/singapore.png"),
  "Japanese Grand Prix": require("../../assets/flag/japon.png"),
  "Qatar Grand Prix": require("../../assets/flag/qatar.png"),
  "United States Grand Prix": require("../../assets/flag/etats-unis.png"),
  "Mexico City Grand Prix": require("../../assets/flag/mexique.png"),
  "São Paulo Grand Prix": require("../../assets/flag/bresil.png"),
  "Las Vegas Grand Prix": require("../../assets/flag/etats-unis.png"),
  "Abu Dhabi Grand Prix": require("../../assets/flag/abu-dhabi.png"),
}


export function Races( { navigation }: any) {
  const { data } = useGetRaces();
  const onPress = () => {
    navigation.navigate('Details')
  }
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <Text style={styles.Schedule}>Schedule</Text>
      {data?.MRData.RaceTable.Races.map((item, i) => (
        <View style={styles.view} key={i}>
          <View style={styles.textView}>
          <Text style={styles.country}>{item.Circuit.Location.country}</Text>
          <Text style={styles.Date}>
            {format(new Date(item.date), "dd/MM/yyyy")}
          </Text>
          <Text style={styles.Hours}>{formatTime(item.time)}</Text>
          <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.textDetails}>Details</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.imageView}>
            <Image
            style={styles.imageDriver}
            source={flagImagesMapping[item.raceName]}
             />
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
    paddingBottom: 24,
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

  country : {
    color: 'white', 
    fontSize: 20, 
    fontWeight: '700',
    paddingTop: 20,
    paddingBottom:5,
  },

  Date : {
    color: 'white',
    fontSize: 16, 
    fontWeight: '700',
    ppaddingBottom:5,
  },

  Hours : {
    color: 'white',
    fontSize: 20, 
    fontWeight: '700',
    paddingBottom:5,
  },
  imageDriver : {
    width: 100, 
    height: 100,
  },

  imageView : {
    flex : 1,
    borderRadius: 14,
    alignItems: 'center',
    paddingTop: 16,
  },
  textDetails :{
    paddingLeft: 10,
    color: '#0671E8',
    fontSize: 15,
    paddingTop:5,
    textDecorationLine: 'underline',  
  },
  button:{
    borderRadius: 14,
  }
});


function formatTime(str: string): string {
  const length = str.length
  return str.substring(0, length - 4)
}
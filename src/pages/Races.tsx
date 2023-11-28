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


export function Races( { navigation }: { navigation: any}) {
  const { data } = useGetRaces();
  const onPressDetails = () => {
    navigation.navigate('Details')
  }
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <Text style={styles.Schedule}>Racing</Text>
      <View style= {styles.button}>
      <TouchableOpacity style={styles.boxUpcoming}>
            <Text style={styles.textUpcoming}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxPast}>
            <Text style={styles.textPast}>Past</Text>
          </TouchableOpacity>
          </View>
      {data?.MRData.RaceTable.Races.map((item, i) => (
        <View style={styles.view} key={i}>
          <View style={styles.left}>
          <Text style={styles.date}>{format(new Date(item.FirstPractice.date), "dd")} - {format(new Date(item.date), "dd")}</Text>
          <Text style={styles.mounth}>{format(new Date(item.FirstPractice.date), "MM")}</Text>
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

  },
  right:{
    flex: 1,
  },
  date:{
    paddingTop: 30,
    paddingLeft: 20,
    color: "white",
    fontWeight: "700",
    fontSize: 13,
    paddingBottom: 11,
  },
  mounth:{
    color: "white",
    fontWeight: "700",
    fontSize: 11,
    marginLeft: 36,
    marginBottom:32,
    backgroundColor: "rgba(255, 255, 255, 0.1)", 
  },  


  textPast : {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
  },

  boxPast:{
    flex: 1,height: 44,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderTopRightRadius: 15,
    borderColor: 'red',
    justifyContent: 'center',
  },

  boxUpcoming:{
    flex: 1,height: 44,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderTopRightRadius: 15,
    borderColor: 'red',
    justifyContent: 'center',
  },

  textUpcoming: {
    textAlign: 'center',
    color: 'white', 
    fontWeight: '700',
    fontSize: 15,
  },
  button: {
    flex:1,
    paddingTop:32,
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 27,
    paddingLeft: 27,
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  textDetails: {
    color: 'blue', // Couleur du texte du bouton
    fontWeight: 'bold', // Gras
  },
  boxDetails : {
    backgroundColor: '#3498db', // Couleur de fond du bouton
    padding: 10, // Espacement intérieur du bouton
    borderRadius: 5, // Coins arrondis
    alignItems: 'center', // Alignement du contenu au centre
  },
});


function formatTime(str: string): string {
  const length = str.length
  return str.substring(0, length - 4)
}
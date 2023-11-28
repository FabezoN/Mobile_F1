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
          <Text style={styles.position}>{item.Circuit.Location.country}</Text>
          <Text style={styles.givenName}>
            {format(new Date(item.date), "dd/MM/yyyy")}
          </Text>
          <Text style={styles.familyName}>{formatTime(item.time)}</Text>
          <Image
            style={styles.imageDriver}
            source={flagImagesMapping[item.raceName]}
          />
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.textDetails}>Details</Text>
          </TouchableOpacity>
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
  textDrivers: {
    fontWeight: "700",
    color: "white",
    top: 156,
    left: 27,
    width: 160,
    textAlign: "center",
    fontSize: 15,
  },
  button: {
    padding: 40,
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
  view: {

    width: 336,
    height: 148,
    backgroundColor: "#1B1A19",
    left: 25,
    marginBottom: 15,
    borderRadius: 14,
  },
  position: {
    color: "white",
    left: 20,
    top: 15,
    fontSize: 20,
    fontWeight: "700",
  },
  givenName: {
    color: "white",
    left: 20,
    top: 15,
    fontSize: 16,
    fontWeight: "700",
  },
  familyName: {
    color: "white",
    left: 20,
    top: 15,
    fontSize: 20,
    fontWeight: "700",
  },
  constructors: {
    color: "#CCCDD7",
    left: 20,
    top: 15,
    fontSize: 11,
    width: 90,
    fontWeight: "700",
  },
  imageDriver: {
    position: "absolute",
    width: 100,
    height: 100,
    left: 216,
    bottom: 50,
  },
  points: {
    color: "white",
    fontSize: 20,
    left: 226,
    bottom: 125,
    textAlign: "center",
    width: 80,
    fontWeight: "700",
  },
});


function formatTime(str: string): string {
  const length = str.length
  return str.substring(0, length - 4)
}
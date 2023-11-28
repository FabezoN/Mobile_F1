import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useGetRaces } from "../hooks/useGetRaces";
import { format } from 'date-fns';
import React from 'react';

export function Details() {
  const { data } = useGetRaces();
    return (
      <ScrollView style ={{backgroundColor: "black"}}>
        {data?.MRData.RaceTable.Races.slice(0,1).map((item, i) => (
        <View key={i}>
          <Text style={styles.textDetails}>{item.Circuit.circuitName}</Text>
          <Text style={styles.textDetails}>First Practice : {format(new Date(item.FirstPractice.date), "dd/MM/yyyy")} at {formatTime(item.FirstPractice.time)}</Text>
          <Text style={styles.textDetails}>Second Practice : {format(new Date(item.SecondPractice.date), "dd/MM/yyyy")} at {formatTime(item.SecondPractice.time)}</Text>
          <Text style={styles.textDetails}>Third Practice : {format(new Date(item.ThirdPractice.date), "dd/MM/yyyy")} at {formatTime(item.ThirdPractice.time)}</Text>
          <Text style={styles.textDetails}>Qualifying : {format(new Date(item.Qualifying.date), "dd/MM/yyyy")} at {formatTime(item.Qualifying.time)}</Text>
        </View>
      ))}


        

      </ScrollView>
    );
  }
        
const styles = StyleSheet.create({
  textDetails: {
    color: "white",
    left: 20,
    top: 15,
    fontSize: 16,
    fontWeight: "700",
  },
});

  function formatTime(str: string): string {
    const length = str.length
    return str.substring(0, length - 4)
  }

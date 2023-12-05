import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image, ImageRequireSource } from 'react-native';

export function Video() {
      return (
        <ScrollView style={styles.main}>
            <Text style={styles.video}>Video</Text>
            <View style={styles.textView}>
                <Text style={styles.Text}>In construction...</Text>
            </View>
        </ScrollView>
      );
    }


    const styles = StyleSheet.create({
        main: {
          backgroundColor: 'black',
        },
        textView:{
            alignItems: 'center',
            flex: 1,    
            marginTop: 250,
        },
        Text:{
            color: 'white',
            fontWeight: '700',
            fontSize: 20,
        },
        video: {
            fontWeight: '700',
            color: 'white', 
            fontSize: 41, 
            paddingTop: 71,
            paddingLeft: 27,
          },
    })

import { StyleSheet, Text, View, ScrollView} from 'react-native';

export function MorePage() {
      return (
        <ScrollView style={styles.main}>
            <Text style={styles.more}>More</Text>
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
        more: {
            fontWeight: '700',
            color: 'white', 
            fontSize: 41, 
            paddingTop: 71,
            paddingLeft: 27,
          },
    })

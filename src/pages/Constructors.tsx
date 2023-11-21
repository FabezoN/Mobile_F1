import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useGetProducts } from '../hooks/useGetConstructors';


export function Constructors() {
  const {data} = useGetProducts();
  console.log({data})
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {data?.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map((item, i) => (
          <Text key={i}>{item.Constructor.name}</Text>
        ))}
      </View>
    );
  }
  
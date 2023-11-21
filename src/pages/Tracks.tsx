import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useGetTracks } from '../hooks/useGetTracks';

export function Tracks() {
  const {data} = useGetTracks();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {data?.MRData.CircuitTable.Circuits.map((item, i) => (
          <Text key={i}>{item.circuitName}</Text>
        ))}
      </View>
    );
  }

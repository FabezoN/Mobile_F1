import { Text, View } from 'react-native';
import { useGetProducts } from '../hooks/useGetConstructors';


export function HomePage() {
  const {data} = useGetProducts();
  console.log({data})
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>home</Text>
      </View>
    );
  }
        

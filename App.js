import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Button, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const handlePress = () => console.log("button pressed")

  return (
    <SafeAreaProvider style={styles.container}>
      <Text>
        Hello React Native
      </Text>
      <Button title="Click me" onPress={handlePress} />
      
      <TouchableOpacity>
        <Image
          fadeDuration={500}
          source={{
            width: 200,
            height: 300, 
            uri: 'https://picsum.photos/200/300'
          }}/>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

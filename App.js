import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const handlePress = () => console.log("Text pressed")

  return (
    <SafeAreaProvider style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native
      </Text>
      <Image
        fadeDuration={500}
        source={{
          width: 200,
          height: 300, 
          uri: 'https://picsum.photos/200/300'
        }}/>
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

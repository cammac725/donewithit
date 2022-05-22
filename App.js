import { StatusBar } from 'expo-status-bar';
import 
  { 
    StyleSheet, 
    Text,
    Alert,
    TouchableOpacity, 
    Button, 
    Image,
    Platform,
  } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  // iOS only
  // const handlePress = () => Alert.prompt(
  //   "Answer quickly",
  //   "How much do you love me?",
  //   text => Alert.alert("Tons!")
  // )

  const handlePress = () => Alert.alert(
    "Answer if you dare",
    "Do you love me?",
    [
      { text: "Yes", onPress: () => Alert.alert("Phew!") },
      { text: "No", onPress: () => Alert.alert("What?!?!") }
    ]
  )

  return (
    <SafeAreaProvider style={[styles.container, containerStyle]}>
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

const containerStyle = { backgroundColor: 'lightblue'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 
    //   Platform.OS === "android" ? 25 : 0,
  },
});

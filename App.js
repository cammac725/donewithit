import { StatusBar } from 'expo-status-bar';
import 
  { 
    Dimensions,
    StyleSheet, 
    Platform,
    View,
  } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  console.log(Dimensions.get("screen"))

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{
        backgroundColor: 'lightblue',
        width: '50%',
        height: 70,
      }}></View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 
       Platform.OS === "android" ? 25 : 0,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Create from './crud/Create';
import Read from './crud/Read';

export default function App() {
  return (
    <View style={styles.container}>
      <Create />
      <Read />
      <StatusBar style="auto" />
    </View>
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
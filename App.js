import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Create from './crud/Create';
import Read from './crud/Read';
import { Text } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IssueLogger</Text>
      <Create />
      <Read />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E3DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#263A29',
  },
  
});
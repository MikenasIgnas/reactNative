import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}><Text  style={styles.title}>Hello</Text></View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
})

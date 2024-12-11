import {StyleSheet, View, Text} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello there</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#F2F333',
  },
  text: {
    fontSize: 80,
  }
});

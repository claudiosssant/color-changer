import { StyleSheet, View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  function test() {
    console.log("TESTE");
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={test}>
        <Text style={styles.text}>Hello there</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#F2F333",
  },
  text: {
    fontSize: 60,
  },
  pressable: {
    height: "100%",
    width: "100%",
    backgroundColor: "#0000",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

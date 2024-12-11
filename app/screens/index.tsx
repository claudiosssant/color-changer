import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  const getChangeColor = () => {
    var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  };

  const [changeColor, setChangeColor] = useState("#0000");

  const changeBgColor = () => {
    setChangeColor(getChangeColor());
  };

  function test() {
    console.log("TESTE");
  }
  return (
    <View style={[styles.container, { changeColor }]}>
      <Pressable style={styles.pressable} onPress={changeBgColor}>
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
    alignItems: "center",
    justifyContent: "center",
  },
});

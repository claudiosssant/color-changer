import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  const [changeColor, setChangeColor] = useState("#FFFF");

  const getChangeColor = () => {
    const randomColor =`#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setChangeColor(randomColor);
    console.log('Change color!')
  };

  return (
    <View style={[styles.container, { backgroundColor:changeColor }]}>
      <Pressable style={styles.pressable} onPress={getChangeColor}>
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
  },
  text: {
    fontSize: 60,
  },
  pressable: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

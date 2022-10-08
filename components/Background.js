import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Background() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#6FB23E",
    position: "absolute",
    width: "100%",
    zIndex: -1,
  },
});

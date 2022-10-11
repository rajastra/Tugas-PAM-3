import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function DetailHeader(props) {
  return (
    <View style={styles.detailHeader}>
      <Text style={styles.font}>Hasil Pencarian Penerbangan</Text>
      <Text style={styles.font}>
        {props.tanggal === "" ? "(tanggal keberangkatan)" : props.tanggal}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailHeader: {
    backgroundColor: "#6FB23E",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    paddungTop: 0,
    alignItems: "center",
    marginBottom: 30,
  },
  font: {
    color: "#fff",
    fontSize: 20,
  },
});

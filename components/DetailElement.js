import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";

export default function DetailElement(props) {
  return (
    <View style={styles.detailBox}>
      <View style={styles.lokasi}>
        <Text>
          {props.keberangkatan === ""
            ? "(L. Keberangkatan)"
            : props.keberangkatan}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-end",
          }}
        >
          <FontAwesomeIcon
            icon={faPlaneUp}
            size={30}
            color="#6FB23E"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{props.nama}</Text>
        </View>
      </View>
      <View style={styles.tempat}>
        <Text>{props.tujuan === "" ? "(L.tujuan)" : props.tujuan}</Text>
        <View style={{ width: 200 }}>
          <Text style={{ color: "#3D3B91" }}>
            {props.tanggal === "" ? "(Tanggal keberangkatan)" : props.tanggal}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailBox: {
    width: "90%",
    height: 150,
    backgroundColor: "#fff",
    padding: 20,
    alignSelf: "center",
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lokasi: {
    justifyContent: "space-between",
    marginRight: 20,
  },
  tempat: {
    justifyContent: "space-between",
  },
});

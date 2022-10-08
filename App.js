import {
  faCalendar,
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TouchableHighlight,
} from "react-native";
import Background from "./components/Background";
import Header from "./components/Header";
import InputData from "./components/InputData";

export default function App() {
  return (
    <Fragment>
      <Background />
      <View style={styles.backgroundBody}></View>
      <Header />
      <View style={styles.container}>
        <View style={styles.form}>
          <InputData label={"Lokasi keberangkatan"} icon={faPlaneDeparture} />
          <InputData label={"Lokasi Tujuan"} icon={faPlaneArrival} />
          <InputData label={"Tanggal keberangkatan"} icon={faCalendar} />
          <TouchableHighlight style={{ marginTop: 20 }}>
            <Button onPress={() => {}} title="Cari" color="#E47D24" />
          </TouchableHighlight>
        </View>
        <View style={styles.footer}>
          <Text>Copyright Raja Saputera 120140228</Text>
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  backgroundBody: {
    position: "absolute",
    backgroundColor: "#F0F0F0",
    width: "100%",
    height: "55%",
    bottom: 0,
    zIndex: -1,
  },
  form: {
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    paddingBottom: 50,
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
});

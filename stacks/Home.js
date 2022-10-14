import {
  faCalendar,
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";
import Background from "../components/Background";
import InputData from "../components/InputData";

const Home = ({ navigation }) => {
  const [keberangkatan, setKeberangkatan] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");

  return (
    <Fragment>
      <Background />
      <View style={styles.backgroundBody}></View>
      <View style={styles.container}>
        <View style={styles.form}>
          <InputData
            label={"Lokasi keberangkatan"}
            icon={faPlaneDeparture}
            value={keberangkatan}
            onChangeText={(text) => setKeberangkatan(text)}
            placeholder={"Masukan Lokasi keberangkatan"}
          />
          <InputData
            label={"Lokasi Tujuan"}
            icon={faPlaneArrival}
            value={tujuan}
            onChangeText={(text) => setTujuan(text)}
            placeholder={"Masukan Lokasi Tujuan"}
          />
          <InputData
            label={"Tanggal keberangkatan"}
            icon={faCalendar}
            value={tanggal}
            onChangeText={(text) => setTanggal(text)}
            placeholder={"Masukan Tanggal keberangkatan"}
          />
          <TouchableHighlight style={{ marginTop: 10 }}>
            <Button
              onPress={() =>
                navigation.push("Details", {
                  keberangkatan,
                  tujuan,
                  tanggal,
                })
              }
              title="Cari"
              color="#E47D24"
            />
          </TouchableHighlight>
        </View>
        <View style={styles.footer}>
          <Text>Copyright hiling hiling apaan</Text>
        </View>
      </View>
    </Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  backgroundBody: {
    position: "absolute",
    backgroundColor: "#F0F0F0",
    width: "100%",
    height: "55%",
    bottom: 0,
    left: 0,
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
    marginTop: 50,
    alignItems: "center",
  },
  datePickerStyle: {
    width: 230,
  },
});

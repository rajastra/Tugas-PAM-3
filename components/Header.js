import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <FontAwesomeIcon icon={faBars} style={styles.icon} />
        <FontAwesomeIcon icon={faUser} style={styles.icon} />
      </View>
      <Text style={styles.title}>Hiling.id</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "#6FB23E",
    padding: 25,
  },
  icon: {
    color: "#fff",
    width: 35,
    height: 25,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

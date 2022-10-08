import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

const InputData = (props) => {
  const [inputField, setInputField] = React.useState("");

  return (
    <View style={styles.formGroup}>
      <Text style={styles.formLabel}>{props.label}</Text>
      <View style={styles.formInput}>
        <FontAwesomeIcon icon={props.icon} style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={setInputField}
          value={inputField}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 20,
  },
  input: {
    flex: 1,
  },
  formLabel: {
    marginBottom: 5,
  },
  formInput: {
    flexDirection: "row",
    boxShadow: "0 0 4px rgba(0,0,0,0.3)",
    borderRadius: 5,
  },
  icon: {
    padding: 10,
    color: "#6FB23E",
  },
});

export default InputData;

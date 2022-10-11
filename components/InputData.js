import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const InputData = (props) => {
  return (
    <View style={styles.formGroup}>
      <Text style={styles.formLabel}>{props.label}</Text>
      <View style={styles.formInput}>
        <FontAwesomeIcon icon={props.icon} style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeText}
          value={props.value}
          placeholder={props.placeholder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 30,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  formInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  icon: {
    padding: 10,
    color: "#6FB23E",
  },
});

export default InputData;

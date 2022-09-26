import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>{count}</Text>
      <Button
        onPress={() => setCount((prevCount) => prevCount + 1)}
        title="+"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

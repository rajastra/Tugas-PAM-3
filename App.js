import * as React from "react";
import Home from "./stacks/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./stacks/Detail";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Hilling.id",
            headerStyle: {
              backgroundColor: "#6FB23E",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: () => <Text style={styles.title}>Hiling.id</Text>,
            headerLeft: () => (
              <FontAwesomeIcon icon={faBars} style={styles.icon} />
            ),
            headerRight: () => (
              <FontAwesomeIcon icon={faUser} style={styles.icon} />
            ),
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Detail}
          options={{
            title: "Hilling.id",
            headerStyle: {
              backgroundColor: "#6FB23E",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: () => <Text style={styles.title}>Hiling.id</Text>,
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerRight: () => (
              <FontAwesomeIcon icon={faUser} style={styles.icon} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  icon: {
    color: "#fff",
    width: 40,
    height: 30,
    padding: 10,
    margin: 5,
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

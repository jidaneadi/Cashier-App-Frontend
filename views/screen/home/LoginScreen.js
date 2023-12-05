import { View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Logo from "../../../src/components/Logo";
import { Button, Text, TextInput } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    margin: 20,
  },
  inputText: {
    backgroundColor: "#DBE2EF",
  },
});

export default function LoginScreen({ navigation }) {
  const [Username, onChangeUsername] = React.useState("");
  const [Password, onChangePassword] = React.useState("");
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Logo />
      </View>
      <Text>Username</Text>
      <TextInput
        activeUnderlineColor="#04364A"
        activeOutlineColor="#04364A"
        label={"Username"}
        value={Username}
        onChangeText={onChangeUsername}
        style={styles.inputText}
      />
      <Text>Password</Text>
      <TextInput
        activeUnderlineColor="#04364A"
        activeOutlineColor="#04364A"
        label={"Password"}
        value={Password}
        onChangeText={onChangePassword}
        style={styles.inputText}
        secureTextEntry
        // right={<TextInput.Icon icon="eye" />}
      />
      <Button
        mode="contained"
        buttonColor="#04364A"
        onPress={() => navigation.navigate("Main", { screen: "CashierScreen" })}
      >
        LOGIN
      </Button>
    </View>
  );
}


import React from "react";
import { Button } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

export default function ButtonEdit() {
  return (
      <Button
        buttonColor="#F7D716"
        style={{ marginRight: 10 }}
        textColor="white"
      >
        <Ionicons name="pencil" size={25} /> Edit
      </Button>
  );
}

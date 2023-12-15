import { View, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import SearchBarTransaksi from "../../../src/components/SearchBarComponents/SearchBarTransaksi";
import { Card, IconButton, Title } from "react-native-paper";
import GlobalStyle from "../../../src/styles/GlobalStyle";
import CardRiwayatTransaksi from "../../../src/components/TransaksiComponent/CardRiwayatTransaksi";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    gap: 10,
    marginBottom: 50,
  },
});
export default function TransaksiScreen() {
  return (
    <View style={styles.mainContainer}>
      {/* Search Bar */}
      <SearchBarTransaksi />
      <CardRiwayatTransaksi/>
    </View>
  );
}
